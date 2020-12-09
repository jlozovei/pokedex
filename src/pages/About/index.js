import React from 'react';

import { Page } from 'containers/Page';

import { StyledContentContainer } from './styled';

const About = () => {
  return (
    <Page>
      <StyledContentContainer>
        <h1 data-testid="about-title">jlozovei + PokéAPI</h1>

        <p>
          I've built this project as a front-end challenge, but also to be part of my portfolio. The
          evaluation criteria for the challenge was to fetch all the data I could from the PokéAPI,
          the (correct) usage of a modern JS framework, build a nice-looking UI and deploy it
          somewhere.
        </p>

        <p>
          But while creating the codes, I decided to go beyond than like just meeting the challenge;
          and decided to keep it in my personal portfolio.
        </p>

        <p>
          I've used{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            ReactJS
          </a>{' '}
          as the main dependency to create this project, and used a lot of{' '}
          <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">
            styled-components
          </a>{' '}
          to create the UI. There are not so many components here, and their usage is kinda limited
          by the project scope.
        </p>

        <h2>Dependencies</h2>
        <p>Listed below you can find the packages I used to create this project:</p>

        <ul>
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              ReactJS
            </a>{' '}
            as the main JS lib;
          </li>
          <li>
            <a
              href="https://github.com/facebook/create-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              create-react-app
            </a>{' '}
            to bootstrap the app;
          </li>
          <li>
            <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">
              styled-components
            </a>{' '}
            for styling - I'm using a personal <code>reset.css</code> file, everything else I'm
            using styled;
          </li>
          <li>
            <a href="https://polished.js.org/" target="_blank" rel="noopener noreferrer">
              polished
            </a>{' '}
            to handle color transformations
          </li>
          <li>
            <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">
              react-router-dom
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/ReactTraining/history"
              target="_blank"
              rel="noopener noreferrer"
            >
              history
            </a>{' '}
            to handle all the routing (routes and redirects)
          </li>
          <li>
            <a href="https://react-hook-form.com/" target="_blank" rel="noopener noreferrer">
              react-hook-form
            </a>{' '}
            to handle form submit and validation
          </li>
          <li>
            <a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">
              axios
            </a>{' '}
            to execute PokéAPI calls
          </li>
          <li>
            <a
              href="https://github.com/facebook/prop-types"
              target="_blank"
              rel="noopener noreferrer"
            >
              prop-types
            </a>{' '}
            to validate all the typing inside components
          </li>
          <li>
            <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
              jest
            </a>{' '}
            and{' '}
            <a href="https://testing-library.com/" target="_blank" rel="noopener noreferrer">
              @testing-library/react
            </a>{' '}
            to handle all the unit testing
          </li>
        </ul>

        <h2>Development Tools</h2>
        <p>
          Beyond the packages from npm, I've also used those tools below to develop, test and deploy
          this project:
        </p>

        <ul>
          <li>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            as the VCS platform
          </li>
          <li>
            <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">
              GitHub Actions
            </a>{' '}
            as the CI/CD
          </li>
          <li>
            <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
              GitHub Pages
            </a>{' '}
            as the host for the website
          </li>
          <li>
            <a href="https://about.codecov.io/" target="_blank" rel="noopener noreferrer">
              Codecov
            </a>{' '}
            as the coverage analysis tool
          </li>
        </ul>

        <h2>Special thanks</h2>
        <p>
          I couldn't get here today by myself. There were a lot of people who helped me (a lot) to
          accomplish the things I have and the person I am today. I would like to thank:
        </p>
        <ul>
          <li>Our almigty God, for His daily mercy and His endless love</li>
          <li>Tim Berners-Lee</li>
          <li>Brendan Eich</li>
          <li>Jon Skinner, Will Bond and Cesar Mariniti</li>
          <li>Chris Wanstrath, Tom Preston-Werner, P. J. Hyett, Scott Chacon and Nat Friedman</li>
          <li>The JS community</li>
          <li>
            My dear friends (and awesome developers) Celso Fabri Jr, Daniel Koganas, Daniel Nass and
            Bruno Almeida
          </li>
          <li>The PokéAPI development team</li>
        </ul>

        <p>
          Those are the people who daily help me, and also who provided all the necessary stuff to
          create this project.
        </p>
        <p>So, thank you!</p>

        <hr />

        <blockquote>
          This project is open source! Feel free to fork and remake it as your wish guides you.
        </blockquote>
      </StyledContentContainer>
    </Page>
  );
};

export { About };
