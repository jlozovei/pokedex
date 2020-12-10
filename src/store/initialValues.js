import { KEYS } from 'constants/localStorage';

const skeleton = {
  firstTwelve: [],
  currentPokemon: {},
  generations: [],
  currentGeneration: {}
};

const stored = JSON.parse(sessionStorage.getItem(KEYS.context));

const initialValues = stored || skeleton;

export { initialValues };
