import cook from "./kook.png";
let content = document.querySelector("#content");
let body = document.querySelector('body');

function home(){
    let desDiv = document.createElement("div");
     desDiv.innerHTML = 
           `<h2>Delicious </h2>
            <h3>food</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid labore nemo odio vel accusamus, vero magnam eligendi ducimus, quae eos alias perspiciatis rerum esse voluptates obcaecati nulla dicta possimus? Molestiae?</p>
            `;
            
    
    
         desDiv.setAttribute("class","home-description");

       let imgDiv = document.createElement("div");
       imgDiv.setAttribute("class","home-img");
       let img = document.createElement("img");
       img.setAttribute("class","cook");
       img.src = cook;
       imgDiv.append(img); 
       content.append(desDiv,imgDiv);
       body.style.overflow = 'hidden';

}


export {home};
