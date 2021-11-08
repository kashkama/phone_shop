import Iphone from "./../../public/images/logo5.jpg";
import All from "./../../public/images/all.jpg";
import Issues from "./../../public/images/issues.png";
import samsung from "../../public/images/samsung.svg";
import apple from "../../public/images/apple.svg";
import xiaomi from "../../public/images/xiaomi.svg";
import lenovo from "../../public/images/lenovo.svg";
import lg from "../../public/images/lg.svg";
import htc from "../../public/images/htc.svg";
import huawei from "../../public/images/huawei.svg";
import vivo from "../../public/images/vivo.svg";
import blackberry from "../../public/images/blackberry.svg";
import asus from "../../public/images/asus.svg";
import oppo from "../../public/images/oppo.svg";
import moto from "../../public/images/moto.svg";
import tecno from "../../public/images/tecno.svg";

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

export const devices = [
    {
        name: "samsung",
        icon: samsung
    },
    {
        name: "apple",
        icon: apple
    },
    {
        name: "xiaomi",
        icon: xiaomi
    },
    {
        name: "htc",
        icon: htc
    },
    {
        name: "vivo",
        icon: vivo
    },
    {
        name: "asus",
        icon: asus
    },
    {
        name: "blackberry",
        icon: blackberry
    },
    {
        name: "oppo",
        icon: oppo
    },
    {
        name: "lenovo",
        icon: lenovo
    },
    {
        name: "lg",
        icon: lg
    },
    {
        name: "huawei",
        icon: huawei
    },
    {
        name: "motorolla",
        icon: moto
    },
    {
        name: "tecno",
        icon: tecno
    }
]