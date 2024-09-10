
import samosa from "./chaii-samosa.jpg"
import vada from "./Vada-Pav-2-1024x538.jpg"
import dosha from "./indian-1768906_1920_20180322173733.jpg";
import chicken from "./images (3).jpeg"





let content = document.querySelector("#content");
let body = document.querySelector('body');

function menu(){
    let container = document.createElement("div");
    container.setAttribute("class","container");

    container.innerHTML = `
    
                            <h3> <u>Our Dishes:</u> </h3>


                            <div class = "menu-gallery">

                                   <div class =  "dish">
                                   
                                  
                                   <section>
                                   <h5> Samosas </h5>
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid labore nemo odio vel accusamus, vero magnam eligendi ducimus, quae eos alias perspiciatis rerum esse voluptates obcaecati nulla dicta possimus? Molestiae?</p>
                                   </section>


                                   <div class =  "dish">
                                   
                                   <section>
                                   <h5> Dosha </h5>
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid labore nemo odio vel accusamus, vero magnam eligendi ducimus, quae eos alias perspiciatis rerum esse voluptates obcaecati nulla dicta possimus? Molestiae?</p>
                                   </section>


                                   <div class =  "dish">
                                  
                                   <section>
                                   <h5> Chicken </h5>
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid labore nemo odio vel accusamus, vero magnam eligendi ducimus, quae eos alias perspiciatis rerum esse voluptates obcaecati nulla dicta possimus? Molestiae?</p>
                                   </section>




                                   <div class =  "dish">

                                   <section>
                                   <h5> Vada Pav </h5>
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid labore nemo odio vel accusamus, vero magnam eligendi ducimus, quae eos alias perspiciatis rerum esse voluptates obcaecati nulla dicta possimus? Molestiae?</p>
                                   </section>
 

                                   </div>




                            </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    `;

   
  body.style.overflow = 'auto';


    content.append(container);
}

export {menu};