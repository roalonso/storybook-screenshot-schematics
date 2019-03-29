import {
  Rule,
  Tree,
  SchematicContext,
  chain,
  externalSchematic,
  schematic,
} from '@angular-devkit/schematics';
import { Schema as ComponentOptions } from './schema';

export default function (options: ComponentOptions): Rule {
  return (_host: Tree, context: SchematicContext) => {
    context.logger.error('Component: ' + JSON.stringify(options));
    return chain([
      externalSchematic('@schematics/angular', 'component', options),
      schematic('stories', options),
    ]);
  };
}
