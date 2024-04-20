import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { DEFAULT_LANG } from './config';
import translate from './utils';
import { getCookie, setCookie } from 'src/utils/cookies';
import { getPathByString } from 'src/utils/getPathByString';

type LanguageContextType = {
  selectedLanguage: Languages;
  t: (path?: string) => string;
  changeLanguage: (Languages: Languages) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

type LanguageProviderProps = {
  children: ReactNode;
  defaultLanguage?: string;
};
export function LanguageProvider({
  children,
  defaultLanguage,
}: LanguageProviderProps): JSX.Element {
  const [translations, setTranslations] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState(
    getCookie('lang') || defaultLanguage || DEFAULT_LANG
  );

  useEffect(() => {
    translate()
      .then((result) => {
        setTranslations(result);
      })
      .catch((error) => {
        console.error(error);
        setTranslations({});
      });
  }, [selectedLanguage]);

  const t = (path?: string) => {
    if (!path) {
      throw new Error('Path is required');
    } else {
      const translated = getPathByString(path, translations);
      return translated &&
        (typeof translated === 'string' || typeof translated === 'number')
        ? translated
        : `${selectedLanguage}.${path}`;
    }
  };

  const changeLanguage = (newLanguage: Languages) => {
    setSelectedLanguage(newLanguage);
    setCookie('lang', newLanguage);
  };

  const value: LanguageContextType = {
    selectedLanguage,
    t,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
export enum Languages {
  EN = 'en',
  AR = 'ar',
  FR = 'fr',
}
export const languagesNames = {
  [Languages.EN]: 'English',
  [Languages.AR]: 'العربية',
  [Languages.FR]: 'Français',
};
