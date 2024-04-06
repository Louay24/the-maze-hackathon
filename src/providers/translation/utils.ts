import { getCookie } from 'src/utils/cookies';
import { DEFAULT_LANG } from './config';
const tran = async () => {
  try {
    return await fetch(`./langs/${getCookie('lang') || DEFAULT_LANG}.json`)
      .then((response) => response.json())
      .then((translation) => {
        return translation;
      });
  } catch (error) {
    return Promise.reject(
      error +
        `  \n there is a problem in importing the ${`./s${
          getCookie('lang') || DEFAULT_LANG
        }.json`} tranlsation file  \n  NOTE:it's important to define DEFAULT_LANG in the env ` ||
        'Translation not found'
    );
  }
};

const t = async () => {
  try {
    const translation = await tran();
    return translation;
  } catch (error) {
    console.error(
      error || 'path is wrong you should point at a string or number'
    );
    return Promise.reject(error || 'Translation not found');
  }
};

export default t;
