# MeanDockerAngularApp

Deploy an Angular2+ app with Docker, building it with Node.js as you would do locally for development and end up with a thin and efficient Nginx image, with just the compiled code. Ready for production using Docker multi-stage builds.

#Dcoker commands are-
#Build your image using the production environment
docker build -t manishsingh27/angular-nginx:prod .

#Build your image using the development environment
docker build -t manishsingh27/angular-nginx:dev --build-arg env=dev .

#Test your image for the production environment
docker run -p 80:80 manishsingh27/angular-nginx:prod

#Test your image for the development environment 
docker run -p 80:80 manishsingh27/angular-nginx:dev


#You can use below commands if you don't want to go with Docker
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.


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
