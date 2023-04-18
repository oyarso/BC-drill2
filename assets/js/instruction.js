fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
        console.log(datos)
        for (let temp of datos) {
            tcg(temp);
        }
    })



document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("demo").innerHTML = "Digimon";
}

function mouseOut() {
  document.getElementById("demo").innerHTML = "Digital Monster";
}


    function Alerta(){
        alert ("¡Bienvenido al Digimundo!");
    
    }

function tcg(digimon) {
    
    let contenido = document.getElementById('contenido');

    contenido.innerHTML += `

    <div class="card item col-xs-8 col-sm-6 col-md-4 col-lg-3">
      <div class="container">
        <div class="card-body">
        <h4 class="card-title">${digimon.name}</h4>
        <p class="card-text">${digimon.level}</p>
      </div>
        <img src="${digimon.img}" alt="Digi" class="image">
          <div class="overlay">
            <div class="text">
              <div class="card-body">
                <h4 class="card-title">${digimon.name}</h4>
                <p class="card-text">${digimon.level}</p><br>
                <input type="button" class="btn btn-outline-warning" value="Click aqui" onClick="Alerta()">
              </div>
            </div>
          </div>
      </div>


    
    `
}

