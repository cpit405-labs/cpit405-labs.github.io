let main = document.getElementById('photos');

// img creation
let photo = document.createElement('img');
photo.src = 'public/imgs/1.jpg';
photo.width = 70;
photo.height = 120;

// attach img to main
main.appendChild(photo);


// btn creation
let dbtn = document.createElement('button');
dbtn.innerText = 'Delete';
dbtn.addEventListener("click", function(){        
    main.removeChild(photo);
    main.removeChild(this); // referint to the button(dbtn)
    main.removeChild(zoomin);
    main.removeChild(zoomout);
});
main.appendChild(dbtn);


// zooms btn creation
let zoomin = document.createElement('button');
zoomin.innerText = '+';
let zoomout = document.createElement('button');
zoomout.innerText = '-';
main.appendChild(zoomin);
main.appendChild(zoomout);

// zoom in
zoomInScale = 1.5;
zoomin.addEventListener("click", function(){
    photo.width *= zoomInScale;
    photo.height *= zoomInScale;
});

// zoom out 
zoomoutScale = 0.5;
zoomout.addEventListener("click", function(){
    photo.width *= zoomoutScale;
    photo.height *= zoomoutScale;
});

// create a new img
let userPhoto = document.createElement('input');
userPhoto.setAttribute('type', 'file' );
userPhoto.setAttribute('accept', 'image/*');
userPhoto.src = userPhoto.value;
userPhoto.width = 70;
userPhoto.height = 120;
main.appendChild(userPhoto);
