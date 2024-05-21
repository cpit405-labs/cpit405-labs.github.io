let main = document.getElementById('photos');

// img creation
let photo = document.createElement('img');
photo.src = 'public/images/1.jpg';

// attach img to main
main.appendChild(photo);


// btn creation
let dbtn = document.createElement('button');
dbtn.innerText = 'Delete';
dbtn.addEventListener("click", function(){        
    main.removeChild(photo);
    this.removeChild(dbtn); // referint to the button(dbtn)
});
main.appendChild(dbtn);
