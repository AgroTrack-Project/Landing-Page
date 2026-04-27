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
        },
        es_419:
        {

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

