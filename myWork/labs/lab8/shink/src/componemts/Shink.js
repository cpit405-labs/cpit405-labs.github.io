import { useState } from "react";
import "./Shink.css";
const Shink = ()=>{

function handleClick(){
    let codeid;
    if(shortCode.length >1 ){
        codeid=shortCode
    }
    else{
        codeid=Math.random().toString(36).substring(5);
    }
    setShortUrl('https://cpit405.co/'+codeid);
}


let [longurl,setUrl]=useState("");
let [shortCode,setShortCode]=useState("");
let [shorturl,setShortUrl]=useState("");
return(

<div className="form-group">
    <h1>Link shrinker</h1>
    <div className="form-group2">
    <label htmlFor="longUrl">Long URL:</label>
    <input id="longUrl" type="text" onChange={(e) => {
        setUrl(e.target.value);}} value={longurl}/>
    <label htmlFor="shortCode">Enter short code:</label>
    <input id="shortCode" type="text" onChange={(e) => {setShortCode(e.target.value);}} value={shortCode}/>
    </div>
    <button id="btn" onClick={handleClick}>shorten</button>
    <div className="result">
    <div className="form-group3">
    <label htmlFor="shortUrl">Short URL:</label>
    <p id="shortUrl">{shorturl}</p>
    </div>
    </div>
</div>

)
}

export default Shink;