const casas = [
    {
        id: 1,
        nombre: "Casa",
        descripcion: ": Casa Huechuraba",
        imagen: "./assets/img/casa-huechuraba.jpg",
        cuartos: ": 1",
        metros: 100,
    },
    {
        id: 2,
        nombre: "Casa ",
        descripcion: ": Casa la florida ",
        imagen: "./assets/img/casa-la-florida.jpg",
        cuartos: ": 2",
        metros: 150,
    },
    {
        id: 3,
        nombre: "Departamento",
        descripcion: ": Departamento Providencia",
        imagen: "./assets/img/depto-providencia.jpg",
        cuartos: ": 3",
        metros: 200,
    },
    {
        id: 4,
        nombre: "Casa",
        descripcion: ": Casa San Joaquin",
        imagen: "./assets/img/casa-san-joaquin.jpg",
        cuartos: ": 4",
        metros: 250,
    },

    {
        id: 4,
        nombre: "Departamento",
        precio: 4000,
        descripcion: ": Departamento Ñuñoa",
        imagen: "./assets/img/depto-ñiñoa.jpg",
        cuartos: ": 4",
        metros: 300,
    },

    {
        id: 4,
        nombre: "Casa",
        descripcion: ": Casa La Dehesa",
        imagen: "./assets/img/casa-la-dehesa.jpg",
        cuartos: ": 6",
        metros: 400,
    }
]
const renderizar = () => {
    const cardContainer = document.querySelector(".card-container")
    casas.map(casa => {
        console.log('casa', casa)
        const card = document.createElement("div")
        cardContainer.classList.add("row")
        card.classList.add("card")
        card.innerHTML = `
        <img src="${casa.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${casa.nombre}</h5>
            <p class="card-text">Descripcion ${casa.descripcion}</p>
            <p class="card-text">Cuartos ${casa.cuartos}</p>
            <p class="card-text">Metros ${casa.metros}</p>  
        </div>
        `;
        cardContainer.appendChild(card)
    })
}

renderizar()
document.addEventListener("DOMContentLoaded", function () {

})
const limpiar=()=>{
    const cardContainer = document.querySelector(".card-container")
    cardContainer.innerHTML=""
}
const buscar = () => {
    const cuartos = parseInt(document.getElementById("cuartos").value)
    const mtInit = parseInt(document.getElementById("mtInit").value)
    const mtEnd = parseInt(document.getElementById("mtEnd").value)
    console.log('cuartos', cuartos, 'mtInit', mtInit, 'mtEnd', mtEnd);

    if (!mtInit && !mtEnd) {
        alert("Ingrese un rango de metros")
        limpiar()
        renderizar()
        return false
    }
    const casasFiltradas = casas.filter(casa => {
        return casa.metros >= mtInit && casa.metros <= mtEnd
    })
    limpiar()
    casasFiltradas.map(casa => {
        const cardContainer = document.querySelector(".card-container")
        console.log('casa', casa)
        const card = document.createElement("div")
        cardContainer.classList.add("row")
        card.classList.add("card")
        card.innerHTML = `
        <img src="${casa.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${casa.nombre}</h5>
            <p class="card-text">Descripcion ${casa.descripcion}</p>
            <p class="card-text">Cuartos ${casa.cuartos}</p>
            <p class="card-text">Metros ${casa.metros}</p>  
        </div>
        `;
        cardContainer.appendChild(card)

    })
    console.log('casasFiltradas', casasFiltradas);
    return false

}