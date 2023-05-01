import en from './en';
import es from './es';

const getLocale = (router : any) => {
  switch (router.locale) {
    case 'en':
      return en;
    case 'es':
      return es;
  }
}

export default getLocale;