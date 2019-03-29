import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

const collectionPath = require.resolve('../collection.json');

describe('component', () => {
  const runner = new SchematicTestRunner('storybook-screenshot-schematics', collectionPath);
  const workspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '6.0.0',
  };
  const appOptions = {
    name: 'bar',
    inlineStyle: false,
    inlineTemplate: false,
    routing: false,
    style: 'css',
    skipTests: false,
    skipPackageJson: false,
  };
  let appTree: UnitTestTree;

  beforeEach(() => {
    appTree = runner.runSchematic('workspace', workspaceOptions);
    appTree = runner.runSchematic('application', appOptions, appTree);
  });

  const defaultOptions = {
    name: 'foo',
    inlineStyle: false,
    inlineTemplate: false,
    changeDetection: 'Default',
    style: 'css',
    skipTests: false,
    module: undefined,
    export: false,
    project: 'bar',
  };

  it('requires required option', () => {
    const options = {};
    expect(() => runner.runSchematic('component', options, appTree)).toThrow();
  });

  it('works', () => {
    const options = { ...defaultOptions };
    const tree = runner.runSchematic('component', options, appTree);

    // Listing files
    expect(tree.files).toEqual(jasmine.arrayContaining([
      '/projects/bar/src/app/foo/foo.component.css',
      '/projects/bar/src/app/foo/foo.component.html',
      '/projects/bar/src/app/foo/foo.component.spec.ts',
      '/projects/bar/src/app/foo/foo.component.stories.ts',
      '/projects/bar/src/app/foo/foo.component.ts',
    ]));
  });
});
