import "./styles.css"
// src/index.js

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap's CSS
import 'bootstrap'; // Import Bootstrap's JavaScript
import {home} from "./home.js";
import {menu} from "./menu.js";
import { about } from "./about.js";

let content = document.querySelector("#content")
let navBars = document.querySelectorAll(".btn");
navBars.forEach((btn,index) => {
         btn.addEventListener('click',function (){
                    
            content.innerHTML = ``;
                      
            navBars.forEach((navBtn,i)=>{
                            if(index !== i){
                                navBtn.classList.add('btn-outline-dark');
                                navBtn.classList.remove('btn-dark');
                            } else{
                                navBtn.classList.add('btn-dark');
                                navBtn.classList.remove('btn-outline-dark');


                            }}) 



            if(index === 0){
                
                home();

              }else if(index === 1){
            
                menu();

          }
            else{
             
               about(); 
                
            }
        })

})


home();