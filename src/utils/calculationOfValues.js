// Переводит из кельвины в градусы цельсия
export const fromKelvinsToDegrees = (kelvin) => {
  return Math.round(kelvin - 273.15);
};

// Переводит из метров в километры
export const fromMetersToKilometers = (meters) => {
  return Math.round(meters / 1000);
};

// Переводит из метров в километры
export const fromPascalToAtmospheric = (pascal) => {
  return Math.round(pascal * 0.750062);
};

// Округляет скорость ветра
export const roundWinterSpeed = (speed) => {
  return Math.round(speed);
};
