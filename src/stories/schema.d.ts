import { Schema as OriginalSchema } from '@schematics/angular/component/schema';

export interface Schema {
  path?: string;
  project?: string;
  name: string;
  flat?: boolean;
  lintFix?: boolean;
}
