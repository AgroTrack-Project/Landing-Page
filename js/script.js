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

                "problema.title": "The problem we solve",
                "problema.legend1": "Intuition-based decisions (70%)",
                "problema.legend2": "Data-informed decisions (30%)",
                "problema.soilTitle": "Improve soil health",
                "problema.benefit1": "Reduces nutrient loss",
                "problema.benefit2": "Prevents water stress",
                "problema.benefit3": "Maximizes crop yield",
                "problema.description": "Over 70% of Peruvian farmers make irrigation decisions by intuition. Too much water loses nutrients, too little stresses the crop. Either way, harvest is lost.",
                "problema.cta": "Grow better and earn more, without overspending on complicated technology",
                "problema.solucionTitle": "Our Solution",
                "problema.badge1": "Robust technology",
                "problema.badge2": "Easy to use",
                "problema.badge3": "Low operating cost",

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


                //Demo request form
                "demo.title": "Would you like to see it in action?",
                "demo.subtitle": "We show you how AgroTrack adapts to your plots and crops",
                "demo.formTitle": "Request a demo",
                "demo.formSubtitle": "We’ll contact you within 24 hours.",
                "demo.labelName": "Full Name",
                "demo.labelEmail": "Email",
                "demo.formButton": "Request demo",

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

                //Features section
                "features.title": "Everything you need, in one place",
                "features.subtitle": "Features designed for day-to-day fieldwork.",
                "features.card1.title": "Soil monitoring",
                "features.card1.desc": "Record humidity and temperature, and know the real state of your plots.",
                "features.card2.title": "Irrigation recommendations",
                "features.card2.desc": "Know exactly when to water and when not to, no guessing.",
                "features.card3.title": "Weather alerts",
                "features.card3.desc": "Get frost, drought and heavy rain warnings in time.",
                "features.card4.title": "Crop history",
                "features.card4.desc": "Keep a record of every planting and harvest by season.",
                "audience.title": "Who is AgroTrack for?",
                "audience.subtitle": "Designed for two profiles in Peruvian agriculture.",
                "audience.card1.title": "Farmer",
                "audience.card1.desc": "If you work your own plot, AgroTrack helps you make clear irrigation decisions and avoid losing your harvest to preventable mistakes.",
                "audience.card2.title": "Agricultural Business Owner",
                "audience.card2.desc": "If you manage several plots or an SME, get full visibility of your production, losses and water consumption in a single panel.",

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
                "testimonials.occupation-julio": "Agricultural Entrepreneur – Piura",
                
                // About Team & Product
                "about.teamTitle": "About the team",
                "about.teamDescription": "We are a team dedicated to transforming agriculture through technology.",
                "about.productTitle": "About the product",
                "about.productDescription": "AgroTrack is an intuitive tool designed specifically for the needs of the modern farmer."
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

                "problema.title": "El problema que resolvemos",
                "problema.legend1": "Decisiones por intuición (70%)",
                "problema.legend2": "Decisiones informadas (30%)",
                "problema.soilTitle": "Mejorar la salud del suelo",
                "problema.benefit1": "Reduce la pérdida de nutrientes",
                "problema.benefit2": "Evita el estrés hídrico",
                "problema.benefit3": "Maximiza el rendimiento",
                "problema.description": "Más del 70% de los agricultores peruanos toman decisiones de riego por intuición. El exceso de agua pierde nutrientes, la falta, estresa al cultivo. En ambos casos, se pierde cosecha.",
                "problema.cta": "Mejora tu cosecha y gana más, sin gastar de más en tecnología complicada",
                "problema.solucionTitle": "Nuestra Solución",
                "problema.badge1": "Tecnología robusta",
                "problema.badge2": "Fácil de usar",
                "problema.badge3": "Bajo costo operativo",

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


                //Fomulario Demo
                "demo.title": "¿Te gustaría verlo en acción?",
                "demo.subtitle": "Te mostramos cómo AgroTrack se adapta a tus parcelas y tu tipo de cultivo",
                "demo.formTitle": "Solicita una demo",
                "demo.formSubtitle": "Te contactamos en menos de 24 horas.",
                "demo.labelName": "Nombre completo",
                "demo.labelEmail": "Correo Electrónico",
                "demo.formButton": "Solicitar demo",

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
                //Features section
                "features.title": "Todo lo que necesitas, en un solo lugar",
                "features.subtitle": "Funciones diseñadas para el día a día en el campo.",
                "features.card1.title": "Monitoreo de suelo",
                "features.card1.desc": "Registra humedad y temperatura, y conoce el estado real de tus parcelas.",
                "features.card2.title": "Recomendaciones de riego",
                "features.card2.desc": "Sabe exactamente cuándo regar y cuándo no, sin adivinar.",
                "features.card3.title": "Alertas climáticas",
                "features.card3.desc": "Recibe avisos de heladas, sequías y lluvias intensas a tiempo.",
                "features.card4.title": "Historial de cultivos",
                "features.card4.desc": "Lleva el registro de cada siembra y cosecha por temporada.",
                "audience.title": "¿Para quién es AgroTrack?",
                "audience.subtitle": "Pensado para dos perfiles del agro peruano.",
                "audience.card1.title": "Agricultor",
                "audience.card1.desc": "Si trabajas tu propia parcela, AgroTrack te ayuda a tomar decisiones claras de riego y a no perder tu cosecha por errores evitables.",
                "audience.card2.title": "Empresario Agrícola",
                "audience.card2.desc": "Si gestionas varias parcelas o una PYME, obtén visibilidad completa de tu producción, mermas y consumo de agua en un solo panel.",

                //Testimonials
                "testimonials.title-of-opinion": "Lo que dicen del campo",
                "testimonials.opinion-pedro": "Con AgroTrack ahora sé exactamente cuándo regar y cuánto necesita mi cultivo. \n" +
                    "He reducido desperdicio de agua y mis tomates salen de mejor calidad.",
                "testimonials.ocupation-pedro": "Agricultor – Arequipa",
                "testimonials.opinion-rosa": "Antes revisaba todo manualmente. Hoy desde mi celular veo humedad, clima y alertas. \n" +
                    "AgroTrack me ahorra tiempo cada semana.",
                "testimonials.ocupation-rosa": "Productora Agrícola – Ica",
                "testimonials.opinion-julio": "Manejo varias parcelas y AgroTrack me permite controlar cada una en un solo lugar. \n" +
                    "Tomo decisiones más rápidas y con mejores resultados.",
                "testimonials.ocupation-julio": "Empresario Agrícola – Piura",

                "about.teamTitle": "Sobre el equipo",
                "about.teamDescription": "Somos un equipo dedicado a transformar la agricultura mediante la tecnología.",
                "about.productTitle": "Sobre el producto",
                "about.productDescription": "AgroTrack es una herramienta intuitiva diseñada específicamente para las necesidades del agricultor moderno."
                
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
