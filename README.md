# jlozovei's Pokédex :joystick:
This is my implementation of the Pokédex, using the [PokeAPI](https://pokeapi.co/). :rocket:  
It's available at [jlozovei.github.io/pokedex](https://jlozovei.github.io/pokedex).


## :scroll: About
This project is a basic implementation for a SPA fetching data from a random API, and is my answer for a front-end challenge.

The evaluation criteria for the challenge is to use a modern JS framework, create a nice-looking UI and fetch all the data I could from the PokéAPI.

Also, the code quality, project's structure and documentation, automated tests and the deployment are evaluation criteria too.


## :gem: Stack
This project uses [ReactJS](https://reactjs.org/) as the main lib, bootstraped with [create-react-app](https://github.com/facebook/create-react-app). The styling is done with [styled-components](https://styled-components.com/) and the automated tests with [jest](https://jestjs.io/) + [testing-library](https://testing-library.com/).

I'm using [yarn](https://yarnpkg.com) as the package manager, [GitHub Actions](https://github.com/features/actions) as the CI and [GitHub Pages](https://pages.github.com/) to render the app.

### :clipboard: Requirements
In order to properly execute everything in your local environment, install the following tools:

- [NodeJS](https://nodejs.org/en/) (LTS is fine);
- [npm](http://npmjs.com/) - it already comes with NodeJS, but if you don't have it, take a look [here](https://www.npmjs.com/get-npm);
- [yarn](https://classic.yarnpkg.com/en/docs/install/) - it can be installed as a [npm package](https://www.npmjs.com/package/yarn) or you can follow the instructions on the official website.


## :computer: Developing
First things first: clone the repo.

After clonning the repo, run the following scripts in your terminal:
```bash
# install dependencies
yarn

# run the project at localhost:3000
yarn start

# run the automated test suite w/ coverage report
yarn test

# run the automated test suite w/ watching
yarn test:dev

# create a local build
yarn build
```

After installing the dependencies, you should be able to start the local server - no secrets at all. The app doesn't have any third-party dependencies or requirements to run. :smiley:


## :rocket: Deploying
The deploy is automated by every merge in `master` branch, through the GitHub Actions [deployment workflow](https://github.com/jlozovei/pokedex/blob/master/.github/workflows/deploy.yml).


## :closed_lock_with_key: License
This repo and its content is licensed under the [GPL-3.0](https://github.com/jlozovei/pokedex/blob/master/LICENSE).
