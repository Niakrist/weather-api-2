import React from "react";

import Barometr from "./icons/Barometr";
import Chevron from "./icons/Chevron";
import Close from "./icons/Close";
import Clouds from "./icons/Clouds";
import Humidity from "./icons/Humidity";
import LogoDesctop from "./icons/LogoDesctop";
import LogoMobile from "./icons/LogoMobile";
import LogoTablet from "./icons/LogoTablet";
import Search from "./icons/Search";
import Sunrise from "./icons/Sunrise";
import Sunset from "./icons/Sunset";
import Visibility from "./icons/Visibility";
import Wind from "./icons/Wind";

export default function Icon({ name, className }) {
  console.log("namclassNamee: ", className);
  const inconsName = {
    barometr: <Barometr className={className} />,
    chevron: <Chevron className={className} />,
    close: <Close className={className} />,
    day04: <Clouds className={className} />,
    humidity: <Humidity className={className} />,
    logoDesctop: <LogoDesctop className={className} />,
    logoMobile: <LogoMobile className={className} />,
    logoTablet: <LogoTablet className={className} />,
    search: <Search className={className} />,
    sunrise: <Sunrise className={className} />,
    sunset: <Sunset className={className} />,
    visibility: <Visibility className={className} />,
    wind: <Wind className={className} />,
  };

  return inconsName[name];
}
