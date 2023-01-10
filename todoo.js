const bodyElt = document.querySelector("body");
const bouttonElt = document.querySelector("#add-button");
const ulElt = document.querySelector(".container_list_cadre");
const inputElt = document.querySelector("#add-text");
const formElt = document.querySelector (".container_add") ;
const addElement = () =>
{
    const liElt = document.createElement("li");
    const iElt = document.createElement("i");
    if (inputElt.value != "")
    {
        liElt.classList.add("liText");
        ulElt.append(liElt);
        liElt.append(inputElt.value);
    }
    else
    {
        alert ("aucune tache n'est assigné");
    }

    formElt.reset();
}
const annule = (aa) =>
{
    if (aa.key == "enter")
    {
    console.log ("touche");
    }
}
bouttonElt.addEventListener("click",addElement);
bodyElt.addEventListener("keydown",annule);