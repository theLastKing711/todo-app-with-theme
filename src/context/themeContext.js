import React from "react"
import SunSvg from "../images/icon-sun.svg";
import MoonSvg from "../images/icon-moon.svg";

import lightImageHeader from "../images/bg-desktop-light.jpg";
import darkImageHeader from "../images/bg-desktop-dark.jpg";


import lightImageHeaderMobile from "../images/bg-mobile-light.jpg";
import darkImageHeaderMobile from "../images/bg-mobile-dark.jpg";

export const themes = {
  light: {
    mainBackgroundImage: lightImageHeader,
    mainBackgroundImageMobile: lightImageHeaderMobile,
    backgroundImage: SunSvg,
    mainBackground: "hsl(233, 11%, 84%)",
    mainText: "black",
    todoListBackground: "white",
    lightGray: "hsl(0, 0%, 98%)",
    lightGrayishBlue: "hsl(236, 33%, 92%)",
    darkGrayeshBlue: "hsl(233, 11%, 84%)",
    veryDarkGrayishBlue: "hsl(235, 19%, 35%)"
  },
  dark: {
    mainBackgroundImage: darkImageHeader,
    mainBackgroundImageMobile: darkImageHeaderMobile,
    mainText: "white",
    mainBackground: "black",
    todoListBackground: "hsl(237, 14%, 26%)",
    backgroundImage: MoonSvg,
    darkBlue: 'hsl(235, 21%, 11%)',
    darkDesaturatedBlue: 'hsl(235, 24%, 19%)',
    grayisshBlue: "hsl(234, 11%, 52%)",
    darkGrayishBlue:"hsl(237, 14%, 26%)"
  },
}

export const ThemeContext = React.createContext(themes.light)

