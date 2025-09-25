function calculateWindChill(tempC, windKmh) {
    const tempF = (tempC * 9/5) + 32;
    const windMph = windKmh / 1.609;

    if (tempF <= 50 && windMph > 3) {
        const chillF = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windMph, 0.16)) + (0.4275 * tempF * Math.pow(windMph, 0.16));
        
        return ((chillF - 32) * 5/9).toFixed(1);
    } else {
        return "N/A";
    }
}

const tempSpan = document.querySelector("#temp");
const windSpan = document.querySelector("#wind");
const chillSpan = document.querySelector("#chill");

const tempC = parseFloat(tempSpan.textContent);
const windKmh = parseFloat(windSpan.textContent);

const windChill = calculateWindChill(tempC, windKmh);
chillSpan.textContent = windChill !== "N/A" ? `${windChill} °C` : "N/A";

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;