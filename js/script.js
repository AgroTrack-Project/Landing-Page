/**
 * Current active language. Defaults to English
 * @type {string}
 */
let currentLanguage = "en";

/**
 *  Translation object containing all UI string for each supported language.
 *  Supported locales: en -> English, es_419 -> Spanish
 *  To add a nwe text add the key in both locales and use data-i18n = "key" in HTML.
 * @type {{en: {"demo.title": string, "demo.subtitle": string, "demo.formTitle": string, "demo.formSubtitle": string, "demo.labelName": string, "demo.labelEmail": string, "demo.formButton": string}, es_419: {"demo.title": string, "demo.subtitle": string, "demo.formTitle": string, "demo.formSubtitle": string, "demo.labelName": string, "demo.labelEmail": string, "demo.formButton": string}}}
 */
const translation =
    {
        en:
        {
            // Navbar
            "nav.features": "Features",
            "nav.plans": "Plans",
            "nav.forWho": "For who",
            "nav.demo": "Demo",
            "nav.signIn": "Sign in",
            "nav.signUp": "Sign up",

            // Hero section
            "hero.titleLine1": "Grow better with",
            "hero.titleLine2": "real data",
            "hero.description": "AgroTrack helps you register your plots, monitor soil conditions, and receive clear irrigation recommendations. Decide with data, not intuition.",
            "hero.primaryCta": "Get started now",
            "hero.secondaryCta": "Request demo",
            "hero.badgeFirst": "No installation",
            "hero.badgeSecond": "Built for the field",

            //AgroTrack Plans

            // basic plan
            "basic-plan.title": "Clear plans, no surprises",
            "basic-plan.subtitle": "Choose the plan that adapts to your operation",
            "basic-card.title": "Basic",
            "basic-card.subtitle": "For independent farmers",
            "basic-card.price": "S/39 ",
            "basic-card.time": "/month",
            "basic-card.benefit-first": "Up to 3 plots",
            "basic-card.benefit-third": "Irrigation recommendations",
            "basic-card.benefit-fourth":"Basic weather alerts",
            "basic-card.button": "Get Started",

            //Pro plan
            "pro-card.title": "Pro",
            "pro-card.simbol": "Most Popular",
            "pro-card.subtitle": "For growing farmers",
            "pro-card.price": "S/85 ",
            "pro-card.time": "/month",
            "pro-card.benefit-first": "Up to 10 plots",
            "pro-card.benefit-second":"Dashboard",
            "pro-card.benefit-third": "Everything in the Basic plan",
            "pro-card.benefit-fourth":"Advanced weather alerts",
            "pro-card.benefit-fifth":"PDF export",
            "pro-card.button": "Choose Pro",

            //Enterprise plan
            "enterprise-card.title": "Enterprise",
            "enterprise-card.subtitle": "For agricultural SMEs",
            "enterprise-card.price": "S/149 ",
            "enterprise-card.time": "/month",
            "enterprise-card.benefit-first": "Unlimited plots and multi-user access",
            "enterprise-card.benefit-second":"Everything in the Pro plan",
            "enterprise-card.benefit-third": "Excel export and loss metrics",
            "enterprise-card.benefit-fourth":"Dedicated priority support",
            "enterprise-card.button": "Choose enterprise",

            //Footer
                "footer.title-phrase": "Grow better with real data.",
                "footer.title-navigation": "Navigation",
                "footer.title-characteristics": "Characteristics",
                "footer.title-plans": "Plans",
                "footer.title-for-who": "For who",
                "footer.title-demo": "Demo",
                "footer.title-social-media": "Social Media",
                "footer.title-contact": "Contact",
                "footer.title-copyright": "2026 AgroTrack — Andes Smart. All rights reserved.",
                "footer.title-privacy-policy": "Privacy policy",
                "footer.title-term-conditions": "Terms and conditions",

            //Testimonials
            "testimonials.title-of-opinion": "What the field says",
            "testimonials.opinion-pedro": "With AgroTrack I now know exactly when to irrigate and how much water my crops need.\n" +
                "I have reduced water waste and improved the quality of my tomatoes.",
            "testimonials.occupation-pedro": "Farmer – Arequipa",
            "testimonials.opinion-rosa": "Before, I checked everything manually. Now from my phone I can see humidity,\n" +
                "weather, and alerts. AgroTrack saves me time every week.",
            "testimonials.occupation-rosa": "Agricultural Producer – Ica",
            "testimonials.opinion-julio": "I manage several fields and AgroTrack lets me control each one in a single place.\n" +
                "I make faster decisions with better results.",
            "testimonials.occupation-julio": "Agricultural Entrepreneur – Piura"

        },
        es_419:
        {
            // Navbar
            "nav.features": "Características",
            "nav.plans": "Planes",
            "nav.forWho": "Para quién",
            "nav.demo": "Demo",
            "nav.signIn": "Ingresar",
            "nav.signUp": "Registrarse",

            // Hero section
            "hero.titleLine1": "Cultiva mejor con",
            "hero.titleLine2": "datos reales",
            "hero.description": "AgroTrack te ayuda a registrar tus parcelas, monitorear el suelo y recibir recomendaciones claras de riego. Decide con datos, no por intuición.",
            "hero.primaryCta": "Comenzar ahora",
            "hero.secondaryCta": "Solicitar demo",
            "hero.badgeFirst": "Sin instalación",
            "hero.badgeSecond": "Pensado para el campo",

            //Planes de AgroTrack

            //Plan básico
            "basic-plan.title": "Planes claros, sin sorpresas",
            "basic-plan.subtitle": "Elige el plan que se ajusta a tu operación",
            "basic-card.title": "Básico",
            "basic-card.subtitle": "Para agricultores independientes",
            "basic-card.price": "S/39 ",
            "basic-card.time": "/mes",
            "basic-card.benefit-first": "Hasta 3 parcelas",
            "basic-card.benefit-third": "Recomendaciones de riego",
            "basic-card.benefit-fourth":"Alertas climáticas básicas",
            "basic-card.button": "Comenzar",

            //Plan Pro
            "pro-card.title": "Pro",
            "pro-card.simbol": "Más popular",
            "pro-card.subtitle": "Para agricultores en crecimiento",
            "pro-card.price": "S/85 ",
            "pro-card.time": "/mes",
            "pro-card.benefit-first": "Hasta 10 parcelas",
            "pro-card.benefit-second":"Panel",
            "pro-card.benefit-third": "Todo lo del plan básico",
            "pro-card.benefit-fourth":"Alertas climáticas avanzadas",
            "pro-card.benefit-fifth":"Exportación en PDF",
            "pro-card.button": "Elegir Pro",

            //Plan empresa
            "enterprise-card.title": "Empresa",
            "enterprise-card.subtitle": "Para MYPEs agrícolas",
            "enterprise-card.price": "S/149 ",
            "enterprise-card.time": "/mes",
            "enterprise-card.benefit-first": "Parcelas ilimitadas y multiusuario",
            "enterprise-card.benefit-second":"Todo lo del plan pro",
            "enterprise-card.benefit-third": "Exportación Excel y métricas de mermas",
            "enterprise-card.benefit-fourth":"Soporte prioritario dedicado",
            "enterprise-card.button": "Elegir Empresa",

            //Footer
                "footer.title-phrase": "Cultiva mejor con datos reales.",
                "footer.title-navigation": "Navegación",
                "footer.title-characteristics": "Características",
                "footer.title-plans": "Planes",
                "footer.title-for-who": "Para quien",
                "footer.title-demo": "Demo",
                "footer.title-social-media": "Redes Sociales",
                "footer.title-contact": "Contactos",
                "footer.title-copyright": "© 2026 AgroTrack — Andes Smart. Todos los derechos reservados.",
                "footer.title-privacy-policy": "Política de privacidad",
                "footer.title-term-conditions": "Términos y condiciones",

            //Testimonios
            "testimonials.title-of-opinion": "Lo que dicen del campo",
            "testimonials.opinion-pedro": "Con AgroTrack ahora sé exactamente cuándo regar y cuánto necesita mi cultivo. \n" +
                "He reducido desperdicio de agua y mis tomates salen de mejor calidad.",
            "testimonials.ocupation-pedro": "Agricultor – Arequipa",
            "testimonials.opinion-rosa": "Antes revisaba todo manualmente. Hoy desde mi celular veo humedad, clima y alertas. \n" +
                "AgroTrack me ahorra tiempo cada semana.",
            "testimonials.ocupation-rosa": "Productora Agrícola – Ica",
            "testimonials.opinion-julio": "Manejo varias parcelas y AgroTrack me permite controlar cada una en un solo lugar. \n" +
                "Tomo decisiones más rápidas y con mejores resultados.",
            "testimonials.ocupation-julio": "Empresario Agrícola – Piura"
        }
    }

/**
 * Toggles the page language between English and Spanish.
 * Update all elements with data-i18n attribute and the HTML lang attribute for all
 */
function toggleLanguage(){

    //Switch between English and Spanish
    currentLanguage = currentLanguage === "en" ? "es_419" : "en";

    //Update HTML lang attribute for screen readers (Ally)
    document.documentElement.lang = currentLanguage === "en" ? "en" : "es";

    // Find all translatable elements and update their text
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (element){
        const key = element.getAttribute("data-i18n");
        element.textContent = translation[currentLanguage][key];
    });
}

function toggleMobileMenu() {
    const navCollapse = document.getElementById("navCollapse");
    const hamburgerButton = document.querySelector(".hamburger-button");

    navCollapse.classList.toggle("open");
    hamburgerButton.classList.toggle("active");

    const isExpanded = navCollapse.classList.contains("open");
    hamburgerButton.setAttribute("aria-expanded", isExpanded ? "true" : "false");
}

window.addEventListener("resize", function () {
    const navCollapse = document.getElementById("navCollapse");
    const hamburgerButton = document.querySelector(".hamburger-button");

    if (window.innerWidth > 900 && navCollapse && hamburgerButton) {
        navCollapse.classList.remove("open");
        hamburgerButton.classList.remove("active");
        hamburgerButton.setAttribute("aria-expanded", "false");
    }
});