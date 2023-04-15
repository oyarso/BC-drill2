fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
        console.log(datos)
        for (let temp of datos) {
            tcg(temp);
        }
    })

function tcg(digimon) {
    let contenido = document.getElementById('contenido');
    contenido.innerHTML += `


    <div class="item col-xs-12 col-sm-10 col-md-8 col-lg-5">
    <div class="card col-xs-12" >
        <img class="card-img-top" src="${digimon.img}" alt="Digivolve">
        <div class="card-body">
            <h4 class="card-title">${digimon.name}</h4>
            <p class="card-text">${digimon.level}</p>
        </div>
    </div>
    </div>
   
    
    `
}