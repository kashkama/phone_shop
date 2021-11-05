import Iphone from "./../../public/images/logo5.jpg";
import All from "./../../public/images/all.jpg";
import Issues from "./../../public/images/issues.png";

export const homeObjOne = {
    id: "about",
    purpose: "nav",
    to: "devices",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Quality Phone Service',
    headLine: 'We deal with all types of smartphones and tablets.',
    description: 'Get quality smartphone services for apple, android and blackberry smartphones and tablets at affordable fee.',
    buttonLabel: 'Learn More',
    imgStart: false,
    img: All,
    alt: "phone services",
    dark: false,
    dark2: false,
    primary: false,
    darkText: true
};

export const homeObjTwo = {
    id: "what we do",
    purpose: "nav",
    to: "/",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'What we fix?',
    headLine: 'We fix all smartphone issues.',
    description: 'Craked screen, Water damage, Spoilt charging ports, Speaker or earpiece not working, Broken buttons, connection issue and more...',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: Issues,
    alt: "issues we fix",
    dark: true,
    dark2: false,
    primary: true,
    darkText: false
}

export const homeObjThree = {
    id: "why us",
    purpose: "scroll",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Why customers trust us',
    headLine: 'Our technicians believe in relationship building with our customers.',
    description: 'We offer free diagnostics, low fee guarantee, quick fix, Can fix your device on standby.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: Iphone,
    alt: "why us",
    dark: false,
    dark2: false,
    primary: false,
    darkText: true
}