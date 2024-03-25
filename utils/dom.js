//funzione che verifica il titolo sia corretto

export const fixTitle = () => {
    const documento = document.getElementById("header");
    const titleContent=documento.innerHTML;
    if(titleContent==="Movie App"){
        return
    }
    else{
        documento.innerHTML="Movie App";
    }
}

/*export const addParagraph=()=>{
    const title=document.getElementById("header");
    const paragraph= document.createElement("p");
    paragraph.innerHTML="Indiana Jones";
    title.appendChild(paragraph);

}*/