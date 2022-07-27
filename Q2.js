const url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

function getUrlParameterValue(url, parameter) {
    
    const urlParams = new URLSearchParams(url);

    const page_type = urlParams.get(parameter);

    return page_type;
}
    
let value = getUrlParameterValue(url,"utm_medium");

console.log(value);

    