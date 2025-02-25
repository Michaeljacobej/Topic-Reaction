import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      addNewTopic: "Add a New Topic",
      cancel: "Cancel",
      submit: "Submit",
      title: "Title",
      description: "Description",
      titleRequired: "Title is required",
      descriptionRequired: "Description is required",
      enterTitle: "Enter topic title",
      enterDescription: "Enter topic description",
      listOfTopic: "List of Topics",
    },
  },
  it: {
    translation: {
      addNewTopic: "Aggiungi un Nuovo Argomento",
      cancel: "Annulla",
      submit: "Invia",
      title: "Titolo",
      description: "Descrizione",
      titleRequired: "Il titolo è obbligatorio",
      descriptionRequired: "La descrizione è obbligatoria",
      enterTitle: "Inserisci il titolo dell'argomento",
      enterDescription: "Inserisci la descrizione dell'argomento",
      listOfTopic: "Elenco degli Argomenti",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
