const likes = document.getElementById('likes');
const disLikes = document.getElementById('dislikes'); 

const initLikes = 0;
const initDisLikes = 0;  
likes.innerText = "👍 " + initLikes;
disLikes.innerText = "👎 " + initDisLikes;
let xor = true;

let cliced = false;
let clicedCount = 0;

let likeCount = 0;
let disLikeCount = 0;

function handelLiks(){
    cliced = xor;
    if (cliced == true){
        likes.innerText = "👍 " + ++likeCount;
        console.log('handelLiks');
        xor = false;
    }

};

function handelDisLikes(){
    cliced = xor;
    if (cliced == true){
        console.log('handelDisLikes');
        disLikes.innerText = "👎 " + ++disLikeCount;
        xor = false;
    }
};

