let servicesContentTitle = document.querySelector('.services_content-title');
let servicesContentDesc = document.querySelector('.services_content-desc');
    

    let servicesContentTitleSeo = "SEO & Marketing";
    let servicesContentDescSeo = "Spyro WordPress theme is insanely flexible and amazingly easy to use. This alone would be enough for a 5 star rating on top of a great tool is even better customer support";  
    let servicesContentTitleEmail = "Email Marketing";
    let servicesContentDescEmail = "A great marketing landing page plays a major role to increase conversion rates in order to reach your marketing or business growth goals. It helps you to Introduce your digital campaign to visitors in a more professional way.";

    let servicesContentTitleMobile = "Mobile Marketing";
    let servicesContentDescMobile = "Spyro WordPress theme is insanely flexible and amazingly easy to use. This alone would be enough for a 5 star rating on top of a great tool is even better customer support";

    let servicesContentTitleGoogleAds = "Google Ads";
    let servicesContentDescGoogleAds = "A great marketing landing page plays a major role to increase conversion rates in order to reach your marketing or business growth goals. It helps you to Introduce your digital campaign to visitors in a more professional way.";

    let servicesContentTitleSmAds = "Social Media Ads";
    let servicesContentDescSmAds = "Spyro WordPress theme is insanely flexible and amazingly easy to use. This alone would be enough for a 5 star rating on top of a great tool is even better customer support";

    let servicesContentTitleDigital = "Digital Marketing";
    let servicesContentDescDigital = "A great marketing landing page plays a major role to increase conversion rates in order to reach your marketing or business growth goals. It helps you to Introduce your digital campaign to visitors in a more professional way.";

    let servicesSeo = document.querySelector('.services_item-seo');
    let servicesEmail = document.querySelector('.services_item-email');
    let servicesMobile = document.querySelector('.services_item-mobile');
    let servicesGoogleAds = document.querySelector('.services_item-google-ads');
    let servicesSmAds = document.querySelector('.services_item-sm-ads')
    let servicesDigital = document.querySelector('.services_item-digital')
    
    
        servicesSeo.addEventListener('click',() => {
            servicesContentTitle.innerHTML = servicesContentTitleSeo;
            servicesContentDesc.innerHTML = servicesContentDescSeo;
        });
        servicesEmail.addEventListener('click',() => {
            servicesContentTitle.innerHTML = servicesContentTitleEmail;
            servicesContentDesc.innerHTML = servicesContentDescEmail;
        });

        servicesMobile.addEventListener('click',() => {
            servicesContentTitle.innerHTML = servicesContentTitleMobile;
            servicesContentDesc.innerHTML = servicesContentDescMobile;
        });
        servicesGoogleAds.addEventListener('click',() => {
            servicesContentTitle.innerHTML = servicesContentTitleGoogleAds;
            servicesContentDesc.innerHTML = servicesContentDescGoogleAds;
        });
        servicesSmAds.addEventListener('click',() => {
            servicesContentTitle.innerHTML = servicesContentTitleSmAds;
            servicesContentDesc.innerHTML = servicesContentDescSmAds;
        });
        servicesDigital.addEventListener('click',() => {
            servicesContentTitle.innerHTML = servicesContentTitleDigital;
            servicesContentDesc.innerHTML = servicesContentDescDigital;
        });