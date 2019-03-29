import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

const collectionPath = require.resolve('../collection.json');

describe('stories', () => {
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
    project: 'bar',
  };

  it('requires required option', () => {
    expect(() => runner.runSchematic('stories', {}, appTree)).toThrow();
  });

  it('works', () => {
    const tree = runner.runSchematic('stories', defaultOptions, appTree);

    // Listing files
    expect(tree.files).toEqual(jasmine.arrayContaining([
      '/projects/bar/src/app/foo/foo.component.stories.ts',
    ]));
  });
});
