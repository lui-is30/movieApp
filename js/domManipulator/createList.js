/**
 * prende l'array come parametro e aggiungera un nodo che avra il tag <li> contenente il titolo del movie
 * 
 */
/*
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
*/
export const createMovieView=(data)=>{
    const movie=document.getElementById("movies");
    data.results.forEach(element=>{
        const card=document.createElement("div");
        card.classList.add("film");
        const textContainer=document.createElement("div");
        const image=document.createElement("img");
        image.src=`https://image.tmdb.org/t/p/w500${element.poster_path}`;
        image.classList.add("imageCard");
        const divTitle=document.createElement("div");
        divTitle.classList.add("titleMovie");
        image.addEventListener("click",()=>{
            if(divTitle.style.display==="none"||divTitle.style.display===""){
               divTitle.style.display="block";
               image.style.opacity=0;
               image.style.transition="opacity 1s ease,filter 1s ease";
               image.style.filter="blur(10px)";
               /*image.style.transform="scale(0.1)";*/
            }
            else{
                divTitle.style.display="none";
            image.style.opacity=1;
            image.style.filter="none";
            }
        })
        /*const divTitle=document.createElement("div");
        divTitle.classList.add("titleMovie");*/
        const title=document.createElement("h1");
        title.innerHTML=element.title;
        title.classList.add("titleMovieWritten");
        const description=document.createElement("p");
        description.innerHTML=element.overview;
        description.classList.add("description");

        const container=document.getElementById("containerTv");
        const avanti=document.getElementById("avantiTv");
        let position=0;
        movie.style.transition="transform 1s ease";
        let index=0;
        const indietro=document.getElementById("indietroTv");
        indietro.addEventListener("click",()=>{
            if(index>=0){
                index--;
                //position-=(image.offsetWidth+2)*5;
                position=position-((image.offsetWidth+2)*5);
                //position=Math.max(positionBack,0);
                movie.style.transform=`translateX(-${position}px)`;
            }
        })
        avanti.addEventListener("click",()=>{
            /*position+=100;*/
            //if(position<movie.offsetWidth*2){ 
            if(index<3){
            index++;
            position+=(image.offsetWidth+2)*5;
            movie.style.transform=`translateX(-${position}px)`;
            }
            //}
        })


        let body=document.body;
        //body.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${data.results[0].poster_path})`;
        image.addEventListener("mouseover",()=>{
            //body.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
            body.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${element.backdrop_path})`;
            body.style.backgroundSize="cover";
            body.style.backgroundPosition="center";
        })
       
        /*image.addEventListener("mouseout",()=>{
            body.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path})`;
        })*/

        textContainer.appendChild(title);
        divTitle.appendChild(textContainer);
        /*textContainer.appendChild(description);*/   
        textContainer.appendChild(description);
        //card.appendChild(textContainer);
        card.appendChild(divTitle);
        card.appendChild(image);
        movie.appendChild(card);

    })
}

export const createSearchPerson=(data,attore)=>{
    const movie=document.getElementById("movies");
    const containerAllActor=document.createElement("div");
    containerAllActor.classList.add("allActors");
    while(movie.firstChild){
        movie.removeChild(movie.firstChild);
    }
    
    /*if(data.results.length===0){
        const voidActorMessage=document.createElement("p");
        const voidActor=document.createElement("div");
        voidActor.appendChild(voidActorMessage);
        containerAllActor.appendChild(voidActor);
    }*/

    data.results.forEach(element=>{
        let divContainer=document.createElement("div");
        let divName=document.createElement("div");
        let name=document.createElement("p");
        let divImage=document.createElement("div");
        let image=document.createElement("img");
        image.style.width="300px";
        image.style.height="400px";

        divContainer.classList.add("containerActor");
        divName.classList.add("nameActor");
        name.innerHTML=element.name;
        divName.appendChild(name);
        if(!element.profile_path){
            let noImage=document.createElement("p");
            noImage.innerHTML="Not Image";
            divImage.appendChild(noImage);
        }
        else{
        image.src=`https://image.tmdb.org/t/p/w500${element.profile_path}`;
        divImage.appendChild(image);
        }
        divImage.classList.add("imageActor");
        
        //divImage.style.backgroundImage=`https://image.tmdb.org/t/p/w500${element.profile_path}`;
        name.style.color="white";

        const avanti=document.getElementById("avanti");
        const indietro=document.getElementById("indietro");
        let position=0;
        let index=0;
        indietro.addEventListener("click",()=>{
            if(index>=0){
                index--;
                position=position-(divContainer.offsetWidth*5);
                movie.style.transform=`translateX(-${position}px)`;
            }
        })

        avanti.addEventListener("click",()=>{
            if(index<Math.ceil(data.results.length/5)-1){
                index++;
                position+=divContainer.offsetWidth*5;
                movie.style.transform=`translateX(-${position}px)`;
                }
        })

        divContainer.appendChild(divName);
        divContainer.appendChild(divImage);
        containerAllActor.appendChild(divContainer);

    })

    movie.appendChild(containerAllActor);
    console.log(data);
}



export const createTvView=(data)=>{
    console.log("SERIE TV:");
    console.log(data);/*QUA
    const movie=document.getElementById("tv");
    data.results.forEach(element=>{
        const card=document.createElement("div");
        card.classList.add("film");
        const textContainer=document.createElement("div");
        const image=document.createElement("img");
        image.src=`https://image.tmdb.org/t/p/w500${element.poster_path}`;
        image.classList.add("imageCard");
        const divTitle=document.createElement("div");
        divTitle.classList.add("titleMovie");
        image.addEventListener("click",()=>{
            if(divTitle.style.display==="none"||divTitle.style.display===""){
               divTitle.style.display="block";
               image.style.opacity=0;
               image.style.transition="opacity 1s ease,filter 1s ease";
               image.style.filter="blur(10px)";
               /*image.style.transform="scale(0.1)";*/ /*QUA
             }
            else{
                divTitle.style.display="none";
            image.style.opacity=1;
            image.style.filter="none";
            }
        })
        /*const divTitle=document.createElement("div");
        divTitle.classList.add("titleMovie");*/   /*QUA
        const title=document.createElement("h1");
        title.innerHTML=element.title;
        title.classList.add("titleMovieWritten");
        const description=document.createElement("p");
        description.innerHTML=element.overview;
        description.classList.add("description");

        const container=document.getElementById("container");
        const avanti=document.getElementById("avanti");
        let position=0;
        movie.style.transition="transform 1s ease";
        let index=0;
        const indietro=document.getElementById("indietro");
        let positionBack=0;
        indietro.addEventListener("click",()=>{
            if(index>=0){
                index--;
                //position-=(image.offsetWidth+2)*5;
                position=position-((image.offsetWidth+2)*5);
                //position=Math.max(positionBack,0);
                movie.style.transform=`translateX(-${position}px)`;
            }
        })
        avanti.addEventListener("click",()=>{
            /*position+=100;*/  
            //if(position<movie.offsetWidth*2){
       /*QUA     if(index<3){
            index++;
            position+=(image.offsetWidth+2)*5;
            movie.style.transform=`translateX(-${position}px)`;
            }
            //}
        })


        let body=document.body;
        //body.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${data.results[0].poster_path})`;
        body.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path})`;
        body.style.backgroundPosition="center";
        image.addEventListener("mouseover",()=>{
            //body.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
            body.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${element.backdrop_path})`;
            body.style.backgroundSize="cover";
            body.style.backgroundPosition="center";
        })
       
        image.addEventListener("mouseout",()=>{
            body.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path})`;
        })


        textContainer.appendChild(title);
        divTitle.appendChild(textContainer);
        /*textContainer.appendChild(description);*/     /*QUA     
        textContainer.appendChild(description);
        //card.appendChild(textContainer);
        card.appendChild(divTitle);
        card.appendChild(image);
        movie.appendChild(card);  

    })QUA*/
}



