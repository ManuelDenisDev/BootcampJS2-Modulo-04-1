import "./style.css";


// Introduccion a las funciones

/* function doble(x) {
  return x * 2;
}

console.log("El doble de 5 es: " + doble(5));


function triple(x) {
  return x * 3;
}

console.log("El triple de 5 es: " + triple(5));


// Calcular area de un circulo y un cuadrado + rectangulo

function areaCirculo(radio) {
    return 2 * Math.PI * radio * radio;
    }

console.log("El area del circulo es: " + areaCirculo(5));
console.log("El area del circulo es: " + areaCirculo(10));

function areaCuadrado(lado) {
    return lado * lado;
}

console.log("El area del cuadrado es: " + areaCuadrado(5));
console.log("El area del cuadrado es: " + areaCuadrado(10));

function areaRectangulo(base, altura) {
    return base * altura;
}

console.log("El area del rectangulo es: " + areaRectangulo(5, 10));
console.log("El area del rectangulo es: " + areaRectangulo(10, 20));

// Recetas de cocina

const lechuga = "🥬 Lechuga";
const setas = "🍄 Setas";
const alubias = "🫘 Alubias";
const cebolla = "🧅 Cebolla";
const maiz = "🌽 Maíz";
const arandanos = "🫐 Arándanos";
const aceitunas = "🫒 Aceitunas";
const pina = "🍍 Piña";
const mango = "🥭 Mango";
const zanahoria = "🥕 Zanahoria";
const tomate = "🍅 Tomate";
const pepino = "🥒 Pepino";
const aguacate = "🥑 Aguacate";
const bacon = "🥓 Bacon";
const huevos = "🥚 Huevos";
const queso = "🧀 Queso";

function pintaReceta(titulo, ingredientes, preparacion) {
    // Estilos
    const estiloTitulo = "background-color: blue; font-size: 18px; padding: 8px; color: white;";
    const estiloIngredientes = "background-color: white; color: black; font-size: 16px; padding: 8px;";
    const estiloPreparacion = "background-color: black; color: white; font-size: 14px; padding: 8px;";

    // Titulo de la receta
    console.log(`%c${titulo}`, estiloTitulo);
    // Ingredientes
    console.log(`%cIngredientes: ${ingredientes}`, estiloIngredientes);
    // Preparacion
    console.log(`%cPreparación: ${preparacion}`, estiloPreparacion);
    }

pintaReceta(
    "Ensalada de alubias con aguacate y huevo",
    `${alubias}, ${aguacate}, ${huevos}, ${cebolla}, ${tomate}, ${lechuga}`,
    "Cocer las alubias, cortar las verduras y mezclar todo en un bol."
    );   

pintaReceta(
    "Ensalada de setas con bacon",
    `${setas}, ${bacon}, ${cebolla}, ${tomate}, ${lechuga}, ${queso}`,
    "Saltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre."
    );

pintaReceta(
    "Ensalada de arándanos y pollo",
    `${arandanos}, pollo cocido, ${lechuga}, ${zanahoria}, ${queso}, nueces`,
    "Mezclar los arándanos con el pollo cocido en cubos, lechuga troceada, zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de miel y mostaza."
    );

pintaReceta(
    "Ensalada de maíz y piña",
    `${maiz}, ${pina}, ${lechuga}, ${pepino}, ${cebolla}, ${aguacate}`,
    "Mezclar el maíz con la piña en cubos, lechuga troceada, pepino en rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de aceite de oliva y vinagre."
    );

pintaReceta(
    "Ensalada de mango y queso feta",
    `Mango, ${queso}, ${lechuga}, ${cebolla}, ${pepino}, ${aceitunas}`,
    "Mezclar el mango en cubos con el queso feta desmenuzado, lechuga troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una vinagreta de limón y aceite de oliva."
    ); */



// Ejercicio 1

/* function sumar() {
    // Leer los valores de los inputs
    const sumando1 = document.getElementById("sumando1").value;
    const sumando2 = document.getElementById("sumando2").value;

    // Sumar los valores
    const resultado = parseInt(sumando1) + parseInt(sumando2);

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = resultado;
    }

    const botonSumar = document.getElementById("sumar");
    botonSumar.addEventListener("click", sumar); */

// Ejercicio 2

/* function saludar() {
    // Leer el nombre y apellido del input
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellido").value;

    // Concatenar el nombre y apellido
    const resultado = `¡Hola ${nombre} ${apellidos}!`;

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = resultado;
    }

    const botonSaludar = document.getElementById("saludar");
    botonSaludar.addEventListener("click", saludar);
 */

// Ejercicio 3

function cambiarFotoPrincipal(idMiniatura) {
   const fotoPrincipal = document.getElementById("foto-principal");
    const miniatura = document.getElementById(idMiniatura);

    fotoPrincipal.src = miniatura.src;
    fotoPrincipal.alt = miniatura.alt;
}

const miniatura1 = document.getElementById("miniatura1");
const miniatura2 = document.getElementById("miniatura2");
const miniatura3 = document.getElementById("miniatura3");
const miniatura4 = document.getElementById("miniatura4");


miniatura1.addEventListener("click", () => cambiarFotoPrincipal("miniatura1"));
miniatura2.addEventListener("click", () => cambiarFotoPrincipal("miniatura2"));
miniatura3.addEventListener("click", () => cambiarFotoPrincipal("miniatura3"));
miniatura4.addEventListener("click", () => cambiarFotoPrincipal("miniatura4"));