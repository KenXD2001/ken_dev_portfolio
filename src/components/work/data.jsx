import Chetak from "../../assets/chetak_product_page.webp"
import WeatherApp from "../../assets/weather_app.webp"
import Portfolio from "../../assets/my_portfolio.webp"
import Authentication from "../../assets/authentication_system.webp"
import DigiParikshak from "../../assets/DigiParikshak.webp"

export const projectsData = [
    {
        id: 1,
        image: Chetak,
        title: "Chetak Product Page",
        category: "web",
        description: "A sleek product landing page for Chetak electric scooters.",
        demo: "https://chetak-product-page.vercel.app",
        github: "https://github.com/KenXD2001/chetak-product-page",
    },
    {
        id: 2,
        image: WeatherApp,
        title: "Weather App",
        category: "app",
        description: "Real-time weather updates with a clean, responsive UI.",
        demo: "https://weather-app-kohl-six-80.vercel.app",
        github: "https://github.com/KenXD2001/weather-app",
    },
    {
        id: 3,
        image: Portfolio,
        title: "Portfolio Design",
        category: "design",
        description: "Personal portfolio showcasing projects and skills.",
        demo: "#",
        github: "https://github.com/KenXD2001/ken_dev_portfolio",
    },
    {
        id: 4,
        image: Authentication,
        title: "Authentication Website",
        category: "web",
        description: "Full-stack authentication system with login and registration.",
        demo: "https://auth-website.vercel.app",
        github: "https://github.com/KenXD2001/auth-website",
    },
    {
        id: 5,
        image: DigiParikshak,
        title: "DigiParikshak",
        category: "web",
        description: "Digital examination platform for seamless online assessments.",
        demo: "https://digiparikshak.vercel.app",
        github: "https://github.com/KenXD2001/digiparikshak",
    },
];

export const projectsNav = [
    {
        name: "all"
    },
    {
        name: "web"
    },
    {
        name: "app"
    },
    {
        name: "design",
    },
];