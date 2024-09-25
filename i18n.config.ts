import uz from "./locales/uz.json";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "uz",
  messages: {
    uz,
    ru,
    en,
  },
}));
