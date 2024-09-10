
let content = document.querySelector('#content');
function about(){
    let div = document.createElement('div');
    div.textContent = "About Us:"
    let p = document.createElement('p');
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ullam dolores dolorem rerum. Omnis voluptatum atque nostrum, amet repellat sed debitis, fuga corrupti possimus, beatae consectetur numquam consequuntur ex exercitationem.";
    div.append(p);
    content.append(div);
}


export {about};