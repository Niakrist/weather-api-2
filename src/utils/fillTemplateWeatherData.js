import {
  fromMetersToKilometers,
  fromPascalToAtmospheric,
  roundWinterSpeed,
} from "./calculationOfValues";

// Шаблон для заполнения данных
const weatherTemplateData = [
  {
    id: "humidity",
    title: "Влажность",
    value: "",
    measurement: "%",
    hasProgressBar: true,
    meaning: "0%",
    meaningEnd: "100%",
  },
  {
    id: "pressure",
    title: "Давление",
    value: "",
    measurement: "",
    hasProgressBar: true,
    meaning: "Повышенное",
    meaningEnd: "",
  },
  {
    id: "visibility",
    title: "Видимость",
    value: "",
    measurement: "км",
    hasProgressBar: true,
    meaning: "Нормальная",
    meaningEnd: "",
  },
  {
    id: "sunrise",
    timezone: "",
    title: "Рассвет",
    value: "8:42",
    measurement: "",
    hasProgressBar: false,
    meaning: "Прошло: 02:47",
  },
  {
    id: "sunset",
    timezone: "",
    title: "Закат",
    value: "16:37",
    measurement: "",
    hasProgressBar: false,
    meaning: "Осталось: 05:08",
  },
  {
    id: "wind",
    title: "Сила ветра",
    value: "",
    deg: "",
    measurement: "м/с",
    hasProgressBar: false,
    meaning: "Северо-западный",
  },
];

// функция для заполнения данных
export const fillTemplateWeatherData = (weatherData) => {
  const fillWeatherData = weatherTemplateData.map((data) => {
    if (data.id === "humidity") {
      return { ...data, value: weatherData.main.humidity };
    }
    if (data.id === "pressure") {
      return {
        ...data,
        value: fromPascalToAtmospheric(weatherData.main.pressure),
      };
    }
    if (data.id === "visibility") {
      return { ...data, value: fromMetersToKilometers(weatherData.visibility) };
    }
    if (data.id === "sunrise" || data.id === "sunset") {
      return { ...data, timezone: weatherData.timezone };
    }
    if (data.id === "wind") {
      return {
        ...data,
        value: roundWinterSpeed(weatherData.wind.speed),
        deg: weatherData.wind.deg,
      };
    }

    return data;
  });

  return fillWeatherData;
};
