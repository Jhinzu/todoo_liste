const bodyElt = document.querySelector("body");
const bouttonElt = document.querySelector("#add-button");
const ulElt = document.querySelector(".container_list_cadre");
const inputElt = document.querySelector("#add-text");
const formElt = document.querySelector (".container_add") ;
const addElement = () =>
{
    if(inputElt.value.trim() == "") {
        alert('Veuillez saisir une tâche');
    } 
    else
    {
        const divElt = document.createElement("div");
        const liElt = document.createElement("li");
        liElt.classList.add("liText"); /*attribut une classe a li*/
        divElt.classList.add("divteste");
        ulElt.append(liElt); /*dans ul il y a li */
        liElt.append(divElt); /*dans li il y a une div*/
        divElt.append("supp") /*dans la div il y a ....*/  ; 
        liElt.append(inputElt.value); /*dans liste il y a le value*/

        divElt.addEventListener("click", supprElement) ; /*il ne peux pas le trouver si on le mets pas dans la fonction*/
    }

    formElt.reset();
}
const supprElement = (event) =>
{
    event.target.parentNode.remove();
}
bouttonElt.addEventListener("click",addElement);

// le formulaire ne s'envoie pas en appuyant sur entrée
inputElt.addEventListener("keypress", function(pressEnter) {
    if (pressEnter.key === "Enter") {
        pressEnter.preventDefault();
    }
});
