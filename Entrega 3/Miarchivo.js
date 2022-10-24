
const polo = {
    id: "1",
    nombre: "Polo",
    valor: parseInt(1500000),
}

const vento = {
    id: "2",
    nombre: "Vento",
    valor: parseInt(2000000),
}

const tiguan = {
    id: "3",
    nombre: "Tiguan",
    valor: parseInt(3000000),
}

const amarok = {
    id: "4",
    nombre: "Amarok",
    valor: parseInt(4000000),
}

//let autos = [polo,vento,tiguan,amarok]

let autos = [
    {  id: "1", nombre: "Polo", valor: parseInt(1500000), img:'imagenes/polo-1.png'},
    {  id: "2", nombre: "Vento", valor: parseInt(2000000), img:'imagenes/vento-1.png'},
    {  id: "3", nombre: "Tiguan", valor: parseInt(3000000), img:'imagenes/tiguan-1.png'},
    {  id: "4", nombre: "Amarok", valor: parseInt(4000000), img:"imagenes/amarok-1.png"}
]

console.log(autos)

let menores = autos.filter (M => M.valor < 3000000)
let mayores = autos.filter (M => M.valor > 2000000)

console.log (menores)
console.log (mayores)

const descuento = parseInt(200000)
const coutas60 = parseInt(300000)
const coutas80 = parseInt(500000)

function pedirNombre () {
    let comprador1 = prompt("Bienvenido a concesionaria Volkswagen Argentina, Ingrese su Nombre y Apellido").toLowerCase()
    console.log(comprador1)
}

pedirNombre()

function sumarInt60 (compra1, coutas60) {
    console.log(compra1 + coutas60)
}

function sumarInt80 (compra1, coutas80) {
    console.log(compra1 + coutas80)
}

let valorAuto
let valorAuto1
let precioContado
let elegido

let respuesta1 = prompt("Usted desea comprar un vehiculo? Si/No.").toLowerCase()
console.log(respuesta1)

if(respuesta1 !== "si" && respuesta1 !== "no"){
    alert("Opcion no valida")
    console.log("Opcion no valida")
} else {
    switch(respuesta1){
        case ("si"):
            console.log("Eligio si")
            let compra1 = prompt("Elija uno de los siguientes modelos a continuacion para seguir con la compra de su vehiculo: Polo / Vento / Tiguan / Amarok.").toLowerCase()
            if(compra1 != "polo" && compra1 != "vento" && compra1 != "tiguan" && compra1 != "amarok"){
                alert("opcion no valida.")
                console.log("Opcion no valida.")
            } else { 
                switch(compra1){
                    case("polo"):
                        valorAuto = polo.valor
                        console.log(polo)
                        alert("El modelo Gol tiene un valor de " + polo.valor + " pesos.")
                        elegido = autos.find(M => M.nombre == "polo")
                    break
                
                    case("vento"):
                        valorAuto = vento.valor
                        console.log(vento)
                        alert("El modelo Vento tiene un valor de " + vento.valor + " pesos.")
                        elegido = autos.find(M => M.nombre == "vento")
                    break
                
                    case("tiguan"):
                        valorAuto = tiguan.valor
                        console.log(tiguan)
                        alert("El modelo Golf tiene un valor de " + tiguan.valor + " pesos.")
                        elegido = autos.find(M => M.nombre == "tiguan")
                    break

                    case("amarok"):
                        valorAuto = amarok.valor
                        console.log(amarok)
                        alert("El modelo Amarok tiene un valor de " + amarok.valor + " pesos.")
                        elegido = autos.find(M => M.nombre == "amarok")
                    break
                }

                console.log(valorAuto)
                let respuesta2 = prompt("Desea financiar el vehiculo? Si / No.").toLowerCase()
                console.log(respuesta2)
                if(respuesta2 === "si"){
                    alert("El metodo de financiacion es de 60 o 80 cuotas. (Al pago de 60 coutas se le sumará un interes total de 300.000 pesos y al plan de 80 coutas se le sumará un interes total de 500.000 pesos).")
                    let respuesta3 = prompt("En cuantas cuotas desea realizarlo? 60 / 80.").toLocaleLowerCase()
                    if(respuesta3 !== "60" && respuesta3 !== "80"){
                        alert("Opcion no valida.")
                        console.log("Opcion Invalida.")
                    } else{
                        switch(respuesta3){
                            case("60"):
                                console.log("60 cuotas")
                                sumarInt60(valorAuto, coutas60)
                                valorAuto1 = valorAuto + coutas60
                                alert("Dentro del plan usted deberá pagar " + valorAuto1 + " pesos. Haga click en el boton ACEPTAR para proceder a realizar el pago, muchas gracias!") 
                            break

                            case("80"):
                                console.log("80 cuotas")
                                sumarInt80(valorAuto, coutas80)
                                valorAuto1 = valorAuto + coutas80
                                alert("Dentro del plan usted deberá pagar " + valorAuto1 + " pesos. Haga click en el boton ACEPTAR para proceder a realizar el pago, muchas gracias!")
                            break
                        }
                    } 
                } else { 
                    precioContado = valorAuto - descuento
                    alert("Si desea abonar el vehiculo de contado, recibirá una bonificacion del 200Mil pesos del precio del vehiculo, teniendo que abonar: " + precioContado + " pesos, precione Aceptar para comunicarte con nuestra concecionaria mas cercana.")
                    alert("por favor contactarse al 0800-888-8338, muchas gracias!")
                }
            }   
        case ("no"):
        alert("muchas gracias por visitar nuestra pagina!")
    }
    
} 

function crearCards(autos){
    autos.forEach(element => {
        let div = document.createElement("div")
        div.className = `"div__" + ${element.nombre.toLowerCase()}` //div__polo div__vento div__tiguan div__amarok
        div.innerHTML =`
            <img src="${element.img}" class="${element.nombre.toLowerCase() + '__img'}">
            <a href="${element.nombre.toLowerCase()+'.html'}" class="${'a__'+element.nombre.toLowerCase()}">Conocé el nuevo ${element.nombre}</a>
            `
            document.getElementById("contenedor").appendChild(div)
    });
    localStorage.setItem("elegido", JSON.stringify(autos))
}

crearCards(autos)

function verificarStorage() {
    if (localStorage.getItem("elegido")) {
        let elegido = JSON.parse(localStorage.getItem("elegido"))
        crearCards(elegido)
    }
}
verificarStorage()