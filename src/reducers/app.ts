import packageJson from '../../package.json';

const INITIAL_STATE = {
  version: packageJson.version,
};

export const appReducer = (state = INITIAL_STATE) => {
  return state;
};
