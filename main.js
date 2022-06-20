// CONSEGNA
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// ---------------------------------------------------------------------------------------------------------------------------------

// milestone 1
// array di oggetti 

const socialPosts = [
    {
        id: 1,
        name: 'Phil Mangione',
        userImage: 'https://unsplash.it/300/300?image=<1>',
        date: '25/6/2021',
        Text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/300/300?image=<2>',
        likes: 80
    },
    {
        id: 2,
        name: 'Sofia Perlari',
        userImage: null,
        date: '3/9/2021',
        Text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: null,
        likes: 120
    }
]

console.log(socialPosts)