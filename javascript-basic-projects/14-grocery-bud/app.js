// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const groceryInput = document.getElementById("grocery"); //input
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit", addItem);
//clear button
clearBtn.addEventListener('click',clearItems);
//load items
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = groceryInput.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        createListItem(id,value);
        //display alert
        displayAlert(`item added to the list`, "success");
        //show container
        container.classList.add("show-container");
        //add to local storage
        addToLocalStorage(id,value);
        //set back to default
        setBackToDefault();
    } else if(value && editFlag){
        editElement.innerHTML = value; //<p> sera = a la valeur rentree dans l'input
        displayAlert('value changed','success');
        //edit local storage
        editLocalStorage(editID,value);
        setBackToDefault();
    } else {
        displayAlert('please enter value', 'danger');
    }
}

//display alert <p>
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function (){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

//clear all items of the list
function clearItems(){
    const items = document.querySelectorAll(".grocery-item");
    if(items.length > 0){
        items.forEach(item => {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem('list');
}

//delete one item function
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;//on clique sur le btn delete-btn, on va chercher le btn-container parent, puis l'article parent
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();
    //remove from local storage
    removeFromLocalStorage(id);
}

//edit one item function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item (donne l'item ecrit)
    editElement = e.currentTarget.parentElement.previousElementSibling; //btn edit-btn, btn-container parent, <p> sibling qui contient l'item
    //set form value (affiche item dans input qd edite)
    groceryInput.value = editElement.innerHTML
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}

//set back to default (clear input)
function setBackToDefault(){
    groceryInput.value = '';
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit"
}


// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
    const grocery = {id,value};//{id:id,value:value} raccourci
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items));//convertit items en JSON et les ajoute au storage
    //console.log("added to local storage")
}

function removeFromLocalStorage(id){
    let items = getLocalStorage();
    //on retourne un tableau d'items filtre dont les id ne correspondent pas a l'id de l'item supprime
    items = items.filter(item => {
        //if(item.id !==id){ 
            //return item; 
            //}
            return item.id !== id
    });
    localStorage.setItem('list',JSON.stringify(items));
};

function editLocalStorage(id, value){
    let items = getLocalStorage();
    items = items.map(item => {
        if(item.id === id){ // si jai un item dont l'id correspond a l'id que je suis en train de traiter, modifier la valeur de cette item pour la nouvelle valeur rentree
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list',JSON.stringify(items));
};

function getLocalStorage(){
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []; //si j'ai ma liste, renvoie-la en JS, sinon on a un tableau vide
}


// ****** SETUP ITEMS **********
function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(item => {
            createListItem(item.id, item.value)
        }) 
        container.classList.add('show-container');
    }
}

function createListItem(id,value){
    const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        //add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
            </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
            </button>
        </div>`;
        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        //append child
        list.appendChild(element);
}

