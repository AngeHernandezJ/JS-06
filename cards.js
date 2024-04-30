/*Crear tarjeta
*Crear secciones p/tarjeta
*Img
*nombre, descripción, edad, lista de algo, imagen
*[] Insertar la tarjeta
*[] mostrar dentro de div.container
*/

//const CARDS_CONTAINER = document.getElementById("card-container");
const CARDS_CONTAINER = document.querySelector("#card-container");//(".container")
const USER = {
    id: 1,
    username: 'User Name',
    desc: 'Sobre mí',
    age: 26,
    fav_books: {
        books: ['Brida',
        'Ensayo sobre la ceguera',
        'Ángeles y demonios',
        'El Principito',
        ],
    },
};

const card = document.createElement("div");
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p");
const book_section = document.createElement("div");
// lista -------------------
const bookList = USER.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
})
console.log(bookList);
// Crear tarjeta
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...bookList);
card.append(name_section, desc_section, age_section,book_section);

// Inyectar tarjeta en el container
CARDS_CONTAINER.appendChild(card);