const mainWrapper = document.querySelector('.mainWrapper');
const warning = document.getElementById('warning');


const headingWrapper = document.createElement('div');
headingWrapper.className = 'headingWrapper';
mainWrapper.appendChild(headingWrapper);

const mainCardContainer = document.querySelector('.mainCardContainer');

const form = document.getElementById('popUp');
form.style.display = 'none';

function openForm(){
  form.style.display = 'block';
}

function closeForm(){
  form.style.display = 'none';
  warning.textContent = '';
}


  let myLibrary = [];


  function Book(title,author,pages) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  addBookToLibrary.prototype = Object.create(Book.prototype);

  function addBookToLibrary() {
    // do stuff here

    const nonFiction = new Book('The Subtle Art Of Not Giving a Fuck','Mark Mansion',224);
    myLibrary.push(nonFiction);

}


  addBookToLibrary();
  defaultBook();//show the default value at first initialization.

  makeBookArray.prototype = Object.create(Book.prototype);
  function makeBookArray(){

    this.title = form.elements['title'].value;
    this.author = form.elements['author'].value;
    this.pages = form.elements['pages'].value;

    if(this.title != '' && this.author != '' && this.pages > 0){

    const book = new Book(this.title,this.author,this.pages);
    myLibrary.push(book);
    form.reset();
    warning.textContent = '';

    createBook();
    
    }else if(typeof((this.pages) != 'number' || this.pages <=0) && this.pages === ''){
      
      warning.textContent = 'Enter Valid PageNumber';

    }else{
      warning.textContent = 'Please Enter all data.';
    }
  }

  function defaultBook(){

    let defaultCount = 0;
    if(defaultCount == 0){
    const topdiv =document.createElement('div');
    topdiv.className = 'topDiv';
    mainCardContainer.appendChild(topdiv);
    

    for(let key of Object.keys(myLibrary[myLibrary.length-1])){

      const div = document.createElement('div');
      
      topdiv.appendChild(div);

      div.textContent = myLibrary[myLibrary.length-1][key];
    }
    statusButton(topdiv);
    deleteButton(topdiv,myLibrary.length-1);
    defaultCount = 1;

    topdiv.firstChild.style.cssText = ('color:aqua; font-weight : bold;');
  }

}

  function createBook(){

      const topdiv =document.createElement('div');
      topdiv.className = 'topDiv';
      mainCardContainer.appendChild(topdiv);
      

      for(let key of Object.keys(myLibrary[myLibrary.length-1])){

        const div = document.createElement('div');
        div.style.cssText = ('margin-bottom : 10px');
        topdiv.appendChild(div);

        div.textContent = myLibrary[myLibrary.length-1][key];
      }
      statusButton(topdiv);
      deleteButton(topdiv,myLibrary.length-1);

      topdiv.firstChild.style.cssText = ('color:aqua; font-weight : bold;');
  }

  function statusButton(parent){
    const statusButton = document.createElement('button');
    statusButton.className = 'statusButton';
    statusButton.textContent = 'Not Read';
    statusButton.style.cssText = ('background-color:red; border-radius:5px;');
    parent.appendChild(statusButton);
    count = 0;

    statusButton.addEventListener('click',() => {
      if(count == 0){
        statusButton.textContent = 'Read';
        statusButton.style.cssText = ('background-color:rgb(45, 92, 59); border-radius:5px;');
        count++;
      }else{
        statusButton.textContent = 'Not Read';
        statusButton.style.cssText = ('background-color:red; border-radius:5px;');
        count--;
      }
    })
  }

  function deleteButton(parent,element){

    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.textContent = 'Delete';
    deleteButton.style.cssText = ('border-radius:5px;')
    parent.appendChild(deleteButton);

  deleteButton.addEventListener('click',() => {
    myLibrary.splice(myLibrary[element],1);
    parent.remove();
  })

  }
