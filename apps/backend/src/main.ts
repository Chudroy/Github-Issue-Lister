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

app.get('/api/:OWNER/:REPO/issueCount', async (req, res) => {
  const { OWNER, REPO } = req.params;

  try {
    const octokit = new Octokit({
      auth: process.env['GITHUB_PAT'],
    });
    const totalIssuesRequest = await octokit.request(
      `GET /search/issues?q=repo:${OWNER}/${REPO}+type:issue+state:open&page=0&per_page=1`
    );

    const totalIssues = totalIssuesRequest.data.total_count;
    return res.json(totalIssues);
  } catch (e) {
    return res.send(e);
  }
});

app.get('/api/:OWNER/:REPO', async (req, res) => {
  const { OWNER, REPO } = req.params;
  const query = req.query;

  const octokit = new Octokit({
    auth: process.env['GITHUB_PAT'],
  });

  try {
    const result = await octokit.request(`GET /repos/${OWNER}/${REPO}/issues`, {
      owner: OWNER,
      repo: REPO,
      page: query.p || 1,
    });

    return res.send(result);
  } catch (e) {
    return res.sendStatus(e.status);
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
