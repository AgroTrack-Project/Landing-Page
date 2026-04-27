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
            //Problem Section

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
        },
        es_419:
        {
            //Problem Section

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

