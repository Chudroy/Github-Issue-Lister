export interface Issue {
  title: string;
  body?: string;
  user: User;
  number: number;
  created_at: string;
  html_url: string;
  labels?: string[];
  pull_request?: object;
}

export interface User {
  login: string;
}
