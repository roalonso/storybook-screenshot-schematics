# storybook-screenshot-schematics

The `storybook-screenshot-schematics` schematics are an extension to the Angular schematics with Storybook templates for storybook-chrome-screenshot. It allows you to both generate a `.stories.ts` file together with your new components and standalone stories files.

### Getting Started

Add `storybook-screenshot-schematics` to your Angular app with Storybook and storybook-chrome-screenshot.

```shell
$ npm install --save-dev storybook-screenshot-schematics
```

### Configure

The `storybook-screenshot-schematics` replicate the default `@schematics/angular` collection, so if you want to reuse any custom configuration such as non CSS styles, you should replicate such configuration in `angular.json`. You can check out your project's @schematic/angular settings with:

```shell
$ ng config projects.webapp.schematics
```

For example, to generate SCSS style templates with your components instead of CSS:

```shell
$ ng config projects.webapp.schematics.storybook-screenshot-schematics:component.styleext sass
```

(Optional) You can set storybook-screenshot-schematics as the default collection in your Angular CLI project:

```shell
$ ng config cli.defaultCollection storybook-screenshot-schematics
```

This way you avoid having to specify the storybook-screenshot-schematics collection every time you generate a component.

### Usage

```shell
# if you use storybook-screenshot-schematics as the default collection
$ ng generate component foo
CREATE src/app/foo/foo.component.scss (0 bytes)
CREATE src/app/foo/foo.component.html (22 bytes)
CREATE src/app/foo/foo.component.spec.ts (607 bytes)
CREATE src/app/foo/foo.component.ts (258 bytes)
CREATE src/app/foo/foo.component.stories.ts (376 bytes)
UPDATE src/app/app.module.ts (481 bytes)

# if you do not use storybook-screenshot-schematics as the default collection
$ ng generate storybook-screenshot-schematics:component bar
CREATE src/app/bar/bar.component.scss (0 bytes)
CREATE src/app/bar/bar.component.html (22 bytes)
CREATE src/app/bar/bar.component.spec.ts (607 bytes)
CREATE src/app/bar/bar.component.ts (258 bytes)
CREATE src/app/bar/bar.component.stories.ts (376 bytes)
UPDATE src/app/app.module.ts (481 bytes)

# if you have a component without story...
$ ng generate @schematics/angular:component pie
CREATE src/app/pie/pie.component.scss (0 bytes)
CREATE src/app/pie/pie.component.html (22 bytes)
CREATE src/app/pie/pie.component.spec.ts (607 bytes)
CREATE src/app/pie/pie.component.ts (258 bytes)
UPDATE src/app/app.module.ts (481 bytes)

# ...then you can simply create a stories file using the same syntax
$ ng generate storybook-screenshot-schematics:stories pie
CREATE src/app/pie/pie.component.stories.ts (376 bytes)
```
