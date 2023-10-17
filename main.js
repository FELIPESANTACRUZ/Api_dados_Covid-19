
const url = 'https://api.covid19api.com/dayone/country/brazil';


const callApi = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.onload = () => {
        if(xhr.status === 200){
            callback(xhr.status, xhr.response);
        } else {
            console.error("Problema ao conectar com a API: ", xhr.status);
        }
    };
    xhr.send();
}


callApi(url, (status, response) => {

    document.getElementById("body").innerHTML  = `
        <span id='titulo'>Estatísticas do covid-19 - Dia 1</span>
        
        <div id="container"></div>
    `;
    
    response.forEach((day)=>{
        document.getElementById("container").innerHTML += `
            <div class='card'>
                <h1>${day.Date.split("T")?.[0].split("-").reverse().join("/")}</h1>
                <div class='line'>
                    <div class='box' style='background-color: #ffcc00' >
                        <span class='label' >Confirmados</span>
                        <span class='value' >${day.Confirmed}</span>
                    </div>
                    <div class='box' style='background-color: #f32013' >
                        <span class='label' >Óbitos</span>
                        <span class='value' >${day.Deaths}</span>
                    </div>
                    <div class='box' style='background-color: #0892d0' >
                        <span class='label' >Recuperados</span>
                        <span class='value' >${day.Recovered}</span>
                    </div>
                </div>
            </div>
        `;
    })
})


