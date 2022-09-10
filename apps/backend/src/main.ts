/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';
import { Octokit, App } from 'octokit';
import { fakeRes } from './assets/fakeRes.js';

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to Prueba-Backend!' });
});

app.get('/api/:OWNER/:REPO', async (req, res) => {
  // Octokit.js
  // https://github.com/octokit/core.js#readme

  // return res.send({ message: 'API GET!' });

  return res.send(fakeRes);

  const query = req.query;

  const { OWNER, REPO } = req.params;

  const octokit = new Octokit({
    auth: process.env['GITHUB_PAT'],
  });

  await octokit
    .request(`GET /repos/${OWNER}/${REPO}/issues`, {
      owner: OWNER,
      repo: REPO,
      page: query.p || 1,
    })
    .then((issues) => {
      if (issues) return res.send(issues);
    })
    .catch((e) => {
      console.log(e);
      return res.status(e.status).json(e);
    });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
