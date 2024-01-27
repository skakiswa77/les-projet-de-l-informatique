const form = document.querySelector("form")
const cityInput = document.querySelector("input")
const meteoHTML = document.querySelector(".meteo")
form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const ville = cityInput.value
    const meteo = await getWeather(ville)
    displayWeather(meteo)
})

async function getWeather(ville) {
    const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=5b7e0fe155fdad8367f9bd7910578dd0&units=metric`)
    const meteo = await reponse.json()
    console.log(meteo)
    return meteo
}

function displayWeather(meteo) {


    meteoHTML.innerHTML = `
    <h3>Meteo pour : ${meteo.name}</h3>
    <p>Temperature : ${Math.round(meteo.main.temp)}</p>
    <p>Pays : ${meteo.sys.country}</p>
    <p>Humidité : ${meteo.main.humidity}</p>
    <p>Pression : ${meteo.main.pressure}</p>
        `


}
