import { Issue } from '../issues-list/issues.model';

export interface Appstate {
  issues: ReadonlyArray<Issue>;
}
