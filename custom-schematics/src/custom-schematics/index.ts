import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import {IOptions} from "./options.interface";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function customSchematics(_options: IOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const {name} = _options;
    tree.create("greet.js", `console.log('Hello ${name} , How r u!!')`);
    return tree;
  };
}
