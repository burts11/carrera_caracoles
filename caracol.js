window.addEventListener("load", inicio);
function inicio() {
    document.getElementById("imagen").addEventListener("click", function () {
        var value = document.getElementById("imagen").value;

        var div = document.getElementById("imagen_caracol");

        if (value == "caracol2") {
            div.innerHTML = "<img src='caracol2.gif' alt='' heigth='80' width='80'>";
        } else if (value == "caracol3") {
            div.innerHTML = "<img src='caracol3.gif' alt='' heigth='80' width='80'>";
        } else if (value == "caracol1") {
            div.innerHTML = "<img src='" + value + ".png' alt=' heigth='80' width='80'>";
        }

    });
    document.getElementById("añadir").addEventListener("click", CrearCaracol);

    document.getElementById("añadir").addEventListener("click", Mostrar);
    document.getElementById("iniciar").addEventListener("click", caracolesListos.interval);



}
var contador = 0;
var contadorPodio = 0;
var movimiento;
var caracolesDisponibles = new Array();
var caracolesListos = new carrera();
var posiciones = new Array();
function Caracol() {
    this.nombre;
    this.imagen;
    this.posicion = 0;

    this.avanzaCaracol = function () {
        this.posicion = this.posicion + (Math.random() * (5, 10));
        console.log("hola" + this.posicion);
    };
}
function carrera() {
    this.longitud = 93;
    this.caracolesListos = new Array();

    this.addCaracol = function (caracol) {
        this.caracolesListos[caracol.nombre] = caracol;
        contador++;
    };

    this.interval = function () {
        movimiento = setInterval(function () {
            caracolesListos.avanzar();
        }, 250);
    };
    this.avanzar = function () {
        for (var i in caracolesListos.caracolesListos) {
            var caracol = caracolesListos.caracolesListos[i];
            var imagen = document.getElementById(caracol.nombre);
            imagen.style.left = caracol.posicion + "%";
            caracol.avanzaCaracol();
            
            if (caracol.posicion >= this.longitud) {
                imagen.style.left = this.longitud + "%";
                añadir3(i);
            }


        }


    };


}
function  borrar(i) {
    delete caracolesDisponibles[i];
    delete caracolesListos.caracolesListos[i];
    Mostrar();
    participantes();
    pista();
    contador--;
}

function Mostrar() {
    var div = document.getElementById("creado");
    div.innerHTML = "";
    var juntar = "";
    for (var caracol in caracolesDisponibles) {

        var value = document.getElementById("imagen").value;
        juntar += "<div>";
        juntar += caracolesDisponibles[caracol].nombre;


        if (caracolesDisponibles[caracol].imagen === "caracol2") {
            juntar += " <img src='caracol2.gif' alt='' heigth='50' width='50'>";
        } else if (caracolesDisponibles[caracol].imagen === "caracol3") {
            juntar += " <img src='caracol3.gif' alt='' heigth='50' width='50'>";
        } else if (caracolesDisponibles[caracol].imagen === "caracol1") {
            juntar += " <img src='caracol1.png' alt=' heigth='50' width='50'>";
        }
        juntar += "<button id='borrar' onclick='borrar(\"" + caracol + "\")'>Borrar Caracol </button>";
        juntar += "<button id='agregar' onclick='añadir(\"" + caracol + "\")'>Agregar Caracol </button>";
        juntar += "</div>";
        juntar += "<br>";
    }
    div.innerHTML = juntar;


}



function añadir(i) {
    caracolesListos.addCaracol(caracolesDisponibles[i]);
    participantes();
    delete caracolesDisponibles[i];
    Mostrar();
    pista();
}
function añadir2(i) {
    caracolesDisponibles.push(caracolesListos.caracolesListos[i]);
    Mostrar();
    delete caracolesListos.caracolesListos[i];
    participantes();
    pista();
}
function añadir3(i) {
    
    posiciones.push(caracolesListos.caracolesListos[i]);
    console.log("lfohs" + posiciones);
    podio();
    delete caracolesListos.caracolesListos[i];
}
function podio() {
    var div = document.getElementById("podio");
    div.innerHTML = "";
    var juntar = "";
    for (var caracol in posiciones) {
        
        var x = posiciones[caracol].nombre;
        var z = posiciones[caracol].posicion;
        console.log(x);
        juntar += "<div class='podio'>";
        juntar += " - " + x;
        if (posiciones[caracol].imagen === "caracol2") {
            juntar += " <img style='position:relative' src='caracol2.gif' id='" + x.nombre + "'  heigth='50' width='50'>";
        } else if (posiciones[caracol].imagen === "caracol3") {
            juntar += " <img style='position:relative' src='caracol3.gif' id='" + x.nombre + "' heigth='50' width='50'>";
        } else if (posiciones[caracol].imagen === "caracol1") {
            juntar += " <img style='position:relative' src='caracol1.png' id='" + x.nombre + "' heigth='30' width='30'>";
        }
contadorPodio++;
        juntar += "</div>";
        juntar += "<br>";
        console.log(contadorPodio);
    }
    div.innerHTML = juntar;
    if (contador === 0) {
        clearInterval(movimiento);
    }

}
function pista() {
    var div = document.getElementById("carrera");
    div.innerHTML = "";
    var juntar = "";
    for (var caracol in caracolesListos.caracolesListos) {
        var x = caracolesListos.caracolesListos[caracol];
        console.log(x);
        juntar += "<div class='carril'>";

        if (x.imagen === "caracol2") {
            juntar += " <img style='position:relative' src='caracol2.gif' id='" + x.nombre + "'  heigth='80' width='80'>";
        } else if (x.imagen === "caracol3") {
            juntar += " <img style='position:relative' src='caracol3.gif' id='" + x.nombre + "' heigth='80' width='80'>";
        } else if (x.imagen === "caracol1") {
            juntar += " <img style='position:relative' src='caracol1.png' id='" + x.nombre + "' heigth='80' width='80'>";
        }

        juntar += "</div>";
        juntar += "<br>";
    }
    div.innerHTML = juntar;




}

function participantes() {
    var div = document.getElementById("listos");
    div.innerHTML = "";
    var juntar = "";
    for (var caracol in caracolesListos.caracolesListos) {
        var x = caracolesListos.caracolesListos[caracol];
        console.log(x);
        juntar += "<div>";
        juntar += x.nombre;

        if (x.imagen === "caracol2") {
            juntar += " <img src='caracol2.gif' alt='' heigth='50' width='50'>";
        } else if (x.imagen === "caracol3") {
            juntar += " <img src='caracol3.gif' alt='' heigth='50' width='50'>";
        } else if (x.imagen === "caracol1") {
            juntar += " <img src='caracol1.png' alt=' heigth='50' width='50'>";
        }
        juntar += "<button id='borrar' onclick='borrar(\"" + x.nombre + "\")'>Borrar Caracol </button>";
        juntar += "<button id='agregar' onclick='añadir2(\"" + caracol + "\")'>Quitar Caracol Carrera </button>";
        console.log(caracol);
        juntar += "</div>";
        juntar += "<br>";
    }
    div.innerHTML = juntar;


}
function CrearCaracol() {

    var valorNombre = document.getElementById("nombre").value;
    var valorImage = document.getElementById("imagen").value;
    var posicion = 0;
    var newcaracol = new Caracol();

    newcaracol.nombre = valorNombre;
    newcaracol.imagen = valorImage;
    newcaracol.posicion = posicion;
    caracolesDisponibles[valorNombre] = newcaracol;
    console.log(caracolesDisponibles);
//    mostrarTodosCaracoles();

}

    