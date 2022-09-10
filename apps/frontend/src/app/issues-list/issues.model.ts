export interface Issue {
  title: string;
  body: string;
  user: string;
  number: number;
  created_at: string;
  url: string;
  labels?: string[];
  pull_request?: object;
}
