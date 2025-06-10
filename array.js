// Lista de itens dos comentários:
// 1. criar
let nomes = ["Ana", "Bia", "Carlos", "Daniel", "Eduardo"];
let carros = []

let idades = [12, '25', '24']


const cidadesArgentina = [
    'Buenos Aires',
    'Córdoba',
    'Rosário',
    'Mendoza',
    'Ushuaia',
    'La Plata',
    'Mar del Plata',
    'Salta',
    'Bariloche',
    'San Rafael',
    'San Juan',
    'San Carlos de Bariloche',
    'Bahía Blanca',
    'Resistencia',
    'Posadas',
    'Neuquén',
    'Paraná',
    'Formosa',
    'Corrientes',
    'Santa Fe',
    'Comodoro Rivadavia',
    'Viedma',
    'San Luis',
    'San Fernando del Valle de Catamarca',
    'Río Gallegos',
    'San Miguel de Tucumán',
    'Santa Rosa',
    'San Juan',
    'San Rafael',
    'San Salvador de Jujuy',
    'Santa Rosa',
    'San Miguel de Tucumán',
    'San Miguel de Tucumán',
]

// length: retorna o número com a quantidade de itens da lista
//console.log(`Tamanho: ${cidadesArgentina.length}`);


// 2. limpar
//console.log(idades)

idades = []
//console.log(idades);

// 3. adicionar elementos

//console.log(carros);

//push: adiciona elemento no final
carros.push("Fusca", 3);
//console.log(carros);

// 4. remover elementos
    // pop: remove o último elemento
    // shift: remove o primeiro elemento
/* console.log(nomes);
nomes.pop();
console.log(nomes);
nomes.shift();
console.log(nomes);
console.log(nomes[1])
console.log(`${nomes[1]} ${nomes[2]}`); */
// 5. buscar elementos (filtrar)
// 6. percorrer os itens
let frutas = ['abacaxi', 'goiaba', 'manga', 'maracujá', 'kiwi']
frutas.forEach(function (item) {
    console.log(item)
})




/* nomes.pop()
console.log(nomes);
nomes.shift()
console.log(nomes);
console.log(nomes[1])
let nomeProprio = `${nomes[1]} ${nomes[2]}`
console.log(nomeProprio.toUpperCase())

console.log(`${nomes[1].toUpperCase()} ${nomes[2].toUpperCase()}`); */