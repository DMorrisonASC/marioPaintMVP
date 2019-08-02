function setup() {
    createCanvas(500, 500);

}

function mouseDragged() {
    background(255);
    let randomWidth = random(1, 100);
    let randomHeight = random(1, 100);
    fill(0);
    rect(mouseX, mouseY, randomWidth, randomHeight); 
    console.log("width "  + randomWidth);
    console.log("height "+ randomHeight)
           
      

}


// function mouseDragged() {
//   value = value + 5;
//   if (value > 255) {
//     value = 0;
    
//   }
// }