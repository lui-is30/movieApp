/**
 * prende l'array come parametro e aggiungera un nodo che avra il tag <li> contenente il titolo del movie
 * 
 */

export const createMovieTitleList=(array,content)=>{
    //const ul=document.getElementById("li");
    array.results.forEach(element => {
        const li=document.createElement("li");
        switch(element.media_type){
            case "movie":
        li.innerHTML=element.title;
        break;
            case "tv":
                li.innerHTML=element.name;
                break;
        }
        content.appendChild(li);

    });
}

export const createMovieView=(data)=>{
    const movie=document.getElementById("movies");
    data.results.forEach(element=>{
        const card=document.createElement("div");
        card.classList.add("card");
        const textContainer=document.createElement("div");
        const image=document.createElement("img");
        image.src=element.poster_path;
        const title=document.createElement("h1");
        title.innerText=element.title;
        const description=document.createElement("p");
        description.innerText=element.overview;

        textContainer.appendChild(title);
        textContainer.appendChild(description);
        card.appendChild(textContainer);
        card.appendChild(image);
        movie.appendChild(card);

    })
}