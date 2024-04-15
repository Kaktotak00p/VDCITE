import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        landing: {
            "Dscr": "& Text text text Text Text text Text Text text",
            "MEDIABUY": "MEDIABUYING",
            "COMPANY": "COMPANY",
            "RIGHTDOWN" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            "BUTTON" : "[CONTACT US]",
        },
        header:{
            "ABOUT_US": "[ ABOUT US ]",
            "ADVANT": "[ ADVANTAGES ]",
            "VACAN": "[ VACANCIES ]",
            "SOURCES": "[ SOURCES ]",
            "CONTACT": "[ CONTACT ]",
        },
        advantages: {
            "NAME": "ADVANTAGES",
            "ABOUT_US": `
            Текст ола да текст ола да текст ола да текст ола да текст ола би \n 
            ола да текст ола да текст ола A a текст ола да текст ола\n
            да текст ола A текст ола да текст.
        `,
            "THINK": "://WRITE SMTH HERE",
            "Card1" : "ЛЕИ БЕЗ ЛИМИТОВ!",
            "Card2" : "ВЫСОКИЕ СТАВКИ!",
            "Card3" : "ДРУЖНАЯ КОМАНДА",
            "Card4" : "ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА",
            "Card5" : "ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА",
            "Card6" : "ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА",
        },
        headHunter:{
          "HUNT" : "HUNTING FOR",
          "HEADS": "HEADS",
          "VACANCIES": "VACANCIES"
        },
        vacancies:{
          "vac1NAME": "Junior Media Buyer",
          "vac1DSCR": "Lorem ipsum dolor sit amet",
        },
        Sources: {
          "NAME": "TRAFFIC SOURCES"
        },
        Partners: {
          "NAME": "PARTNERS"
        },
        ContactForm:{
          "FillForm" : "FILL THE FORM",
          "submit" : "SUBMIT FORM",
          "upload": "UPLOAD CV",
        },
  
    }
  },
  ua: {
    translation: {
        landing: {
            "Dscr": "& Text text text Text Text text Text Text text",
            "MEDIABUY": "МЕДІАБАІИНГОВА",
            "COMPANY": "КОМПАНІЯ",
            "RIGHTDOWN" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            "BUTTON" : "[НАПИШIТЬ НАМ]",
        },
        header: {
            "ABOUT_US": "[ О НАС ]",
            "ADVANT": "[ ПРЕИМУЩЕСТВА ]",
            "VACAN": "[ ВАКАНСII ]",
            "SOURCES": "[ ДЖЕРЕЛА ]",
            "CONTACT": "[ CONTACT ]",
        },
        advantages: {
            "NAME": "НАШІ ПЕРЕВАГИ",
            "ABOUT_US": `
            Текст ола да текст ола да текст ола да текст ола да текст ола би \n
            ола да текст ола да текст ола A a текст ола да текст ола\n
            да текст ола A текст ола да текст.
        `,
            "THINK": "://ПРИДУМАТЬ СЮДА ТЕКСТ ...",
            "Card1" : "ЛЕИ БЕЗ ЛИМИТОВ!",
            "Card2" : "ВЫСОКИЕ СТАВКИ!",
            "Card3" : "ДРУЖНАЯ КОМАНДА",
            "Card4" : "ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА",
            "Card5" : "ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА",
            "Card6" : "ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА",
      },
      headHunter:{
        "HUNT" : "ПОЛЮВАННЯ ЗА",
        "HEADS": "ГОЛОВАМИ",
        "VACANCIES": "ВАКАНСII"
      },
      vacancies:{
        "vac1NAME": "Junior Media Buyer",
        "vac1DSCR": "Lorem ipsum dolor sit amet",
      },
      Sources: {
        "NAME": "ДЖЕРЕЛА ТРАФФIКУ"
      },
      Partners: {
        "NAME": "ПАРТНЕРИ"
      },
      ContactForm:{
        "FillForm" : "ЗАПОВНІТЬ ФОРМУ",
        "submit" : "ВIДГУКНУТИСЯ",
        "upload": "ЗАВАНТАЖИТИ РЕЗЮМЕ",
      },
    }
  },
  ru: {
    translation: {
        landing: {
            "Dscr": "& Text text text Text Text text Text Text text",
            "MEDIABUY": "МЕДИАБАИНГОВАЯ",
            "COMPANY": "КОМПАНИЯ",
            "RIGHTDOWN" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            "BUTTON" : "[НАПИШИ НАМ]",
        },
        header: {
            "ABOUT_US": "[ О НАС ]",
            "ADVANT": "[ ПЕРЕВАГИ ]",
            "VACAN": "[ ВАКАНСИИ ]",
            "SOURCES": "[ ИСТОЧНИКИ ]",
            "CONTACT": "[ CONTACT ]",
        },
        advantages: {
            "NAME": "НАШИ ПРЕИМУЩЕСТВА",
            "ABOUT_US": `
            Текст ола да текст ола да текст ола да текст ола да текст ола би <br/>
            ола да текст ола да текст ола A a текст ола да текст ола<br/>
            да текст ола A текст ола да текст.
        `,
            "THINK": "://ПРИДУМАТЬ СЮДА ТЕКСТ ...",
            "Card1" : "ЛЕИ БЕЗ ЛИМИТОВ!",
            "Card2" : "ВЫСОКИЕ СТАВКИ!",
            "Card3" : "ДРУЖНАЯ КОМАНДА",
            "Card4" : "ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА",
            "Card5" : "ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА",
            "Card6" : "ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА",
      },
      headHunter:{
        "HUNT" : "ОХОТА ЗА",
        "HEADS": "ГОЛОВАМИ",
        "VACANCIES": "ВАКАНСИИ"
      },
      vacancies:{
        "vac1NAME": "Junior Media Buyer",
        "vac1DSCR": "Lorem ipsum dolor sit amet",
      },
      Sources: {
        "NAME": "ИСТОЧНИКИ ТРАФИКА"
      },
      Partners: {
        "NAME": "ПАРТНЕРЫ"
      },
      ContactForm:{
        "FillForm" : "ЗАПОЛНИТЕ ФОРМУ",
        "submit" : "ОТКЛИКНУТЬСЯ",
        "upload": "ЗАГРУЗИТЬ РЕЗЮМЕ",
      },

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;