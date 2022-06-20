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
        userImage: 'https://unsplash.it/300/300?image=15',
        date: '25/6/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=171',
        likes: 80
    },
    {
        id: 2,
        name: 'Sofia Perlari',
        userImage: null,
        date: '3/9/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: null,
        likes: 120
    }
]

// milestone 2
// stampo i post 
printArray(socialPosts);

// milestone 3
// al click sul tasto "mi piace" il colore del testo del bottone cambia e il counter dei likes viene incrementato

const likeButton = document.querySelectorAll('.like-button');
const likeCounter = document.querySelectorAll('.js-likes-counter');

for(let i = 0; i < likeButton.length; i++) {
    let thisLikeButton = likeButton[i];
    thisLikeButton.addEventListener('click', function(event){
        event.preventDefault();

        // cambio il colore del tasto aggiungendo la classe "like-button--liked"
        if(!this.classList.contains('like-button--liked')) {
            this.classList.add('like-button--liked')
        }

        // scorro e prendo singolarmente il div dove c'è all'interno il numero da incremnetare
        let relativeCounter = likeCounter[i];
        console.log(relativeCounter)
        // prendo il numero all'interno e lo incremento
        let relativeNumber = parseInt(relativeCounter.innerHTML)
        relativeNumber++;

        // numero incrementato stampato in pagina
        relativeCounter.innerHTML = relativeNumber;
        
    })
}






// functions
function printArray(socialPostsArray) {
    // variabile per concatenare il template al contenitore nell'html
    const jsPost = document.querySelector('.posts-list');

    // ciclo for che scorre singolarmente i post
    for(let i = 0; i < socialPostsArray.length; i++) {
        let thisPost = socialPostsArray[i];
        const {id, name, userImage, date, text, postImage, likes} = thisPost;

        // creo template
        const newTemplate = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic"  src="${userImage}" alt="${userImage === null ? 'nessuna immagine' : ''}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text}</div>
            <div class="post__image">
                <img src="${postImage}" alt="${postImage === null ? 'nessuna immagine' : ''}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>
        </div>
        `

        jsPost.innerHTML += newTemplate;
    }
}



