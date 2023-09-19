import kistimath from "../assets/svg/projects/kistimath.webp";
import courier from "../assets/svg/projects/gmc.webp";
import upa from "../assets/svg/projects/upa.png";
import visa from "../assets/svg/projects/visa.png";
import sell from "../assets/svg/projects/sell.webp";
import lefabre from "../assets/svg/projects/lefabre.png";

export const projectsData = [
    {
        id: 1,
        projectName: "Le-fabre",
        projectDesc: "An e-commerce Application. ",
        tags: ["JavaScript", "NodeJs", "NextJs","Tailwind Css"],
        code: "https://gitlab.com/akibulshohag",
        demo: "https://le-fabre.com/",
        image: lefabre,
    },
    {
        id: 2,
        projectName: "Kistimath",
        projectDesc:
            "An e-commerce mobile application" +
            "where user can choose their products and" +
            "order this product. ",
        tags: ["React Native(Ios + Android)"],
        code: "https://gitlab.com/akibulshohag",
        demo: "https://play.google.com/store/search?q=kistimath&c=apps",
        image: kistimath,
    },
    {
        id: 3,
        projectName: "Visa management",
        projectDesc:
            "A web application where user apply for visa and upload his/her documents to fill form." +
            "It's using a digital platform very easily. ",
        tags: ["NodeJs", "ReactJS", "MongoDB"],
        code: "https://gitlab.com/akibulshohag",
        demo: "https://visasaimon.com/",
        image: visa,
    },
    {
        id: 4,
        projectName: "Sell Mart",
        projectDesc:
            "E-commerce web application. ",
        tags: ["Javascript", "NodeJs", "NextJs"],
        code: "https://gitlab.com/akibulshohag",
        demo: "https://sellmart.com.bd/",
        image: sell,
    },
    {
        id: 5,
        projectName: "Upa Esports",
        projectDesc:
            "A web application where user find game url" +
            "and they can challenge other player.",
        tags: ["NodeJs","NextJs","MongoDB"],
        code: "https://gitlab.com/akibulshohag",
        demo: "https://upaesports.com/",
        image: upa,
    },
    {
        id: 6,
        projectName: "Courier Management System",
        projectDesc:
            "A Desktop application for making the " +
            "parcel and delivery the exact location and maintain accounts.",
        tags: ["NodeJS","NextJs","MongoDB"],
        code: "https://gitlab.com/akibulshohag",
        demo: "https://courier.b2gsoft.xyz/",
        image: courier,
    },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
