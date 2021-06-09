const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");

const nombreMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
                    "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

const intervalo = setInterval(()=>{

    const local = new Date();

    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();

    // hora.innerHTML = local.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', second: 'numeric',
    // hour12: true });    
    
    let horaPrueba = local.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric'});

    fecha.innerHTML = `${day} / ${nombreMeses[month]} / ${year}`;
    var tiempo= horaPrueba.slice(0, -2);
    var momento = horaPrueba.slice(-2);
    hora.innerHTML = `<h1>${tiempo} <span class="ampm">${momento}</span></h1> `

    

}, 1000);

