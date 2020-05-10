# NgGraphics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Dev Notes
- We may need to perform some configuration.
  - In angular.json, we may need to add `"node_modules/chart.js/dist/Chart.js"` at `scripts` section in `angular.json` file.

- We may face with the following error.

```bash
ERROR in ./src/polyfills.ts
Module not found: Error: Can't resolve 'core-js/es7/reflect' in '/home/linosx/Code/angular5-examples/ng-sockets/ng-graphics/src'
```
Previous error was fixed following: `https://github.com/angular/angular-cli/issues/14542`, `https://stackoverflow.com/questions/55398923/error-cant-resolve-core-js-es7-reflect-in-node-modules-angular-devkit-bui`

- Latest changes in 

```bash
modified:   README.md
modified:   angular.json
modified:   src/polyfills.ts
modified:   src/tsconfig.app.json
```





