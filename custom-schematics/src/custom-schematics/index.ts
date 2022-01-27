import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  mergeWith,
  template,
  url,
} from "@angular-devkit/schematics";
import {strings} from "@angular-devkit/core";
import {IOptions} from "./options.interface";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function customSchematics(_options: IOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const templatUrl = url("./files");
    const templateWithParameters = apply(templatUrl, [
      template({..._options, ...strings}),
    ]);
    // const {componentName} = _options;
    // tree.create(
    //   "greet.js",
    //   `console.log('Hello ${componentName} , How r u!!')`
    // );
    // return tree;

    return mergeWith(templateWithParameters)(tree, _context);
  };
}
