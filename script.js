var numberoflength = document.querySelectorAll(".drum").length

for(var i = 0; i<numberoflength ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click" , Handleclick)

}   

//detecting button press


function Handleclick(){

    console.log(this.innerHTML)
    // var audio1 = new Audio ("sounds/tom-1.mp3");
    // audio1.play();
    // var audio2 = new Audio ("sounds/tom-2.mp3");
    // audio2.play();
    // var audio3 = new Audio ("sounds/tom-3.mp3");
    // audio3.play();
    // var audio4 = new Audio ("sounds/tom-4.mp3");
    // audio4.play();
    // var audio5 = new Audio ("sounds/crash.mp3");
    // audio5.play();
    // var audio6 = new Audio ("sounds/kick-bass.mp3");
    // audio6.play();
    // var audio7 = new Audio ("sounds/snare.mp3");
    // audio7.play();
    var buttonclicked = this.innerHTML;
    // var buttonInnerHTML = this.innerHTML;
    makesound(buttonclicked);
    buttonanimation(buttonInnerHTML)
    

   
}


//detecting keyboard press

document.addEventListener("keypress" , function(event){
    makesound (event.key)
    buttonanimation(event.key)
})

function makesound(key){

    switch (key) {
        case "w":
            var audio = new Audio ("sounds/tom-1.mp3");
            audio.play();
            
            break;

            case "a":
                var audio = new Audio ("sounds/tom-2.mp3");
                audio.play();
                
                break;

            case "s":
            var audio = new Audio ("sounds/tom-3.mp3");
            audio.play();
            
            break;

            case "d":
            var audio = new Audio ("sounds/tom-4.mp3");
            audio.play();
            
            break;

            case "j":
            var audio = new Audio ("sounds/kick-bass.mp3");
            audio.play();
            
            break;

            case "k":
            var audio = new Audio ("sounds/crash.mp3");
            audio.play();
            
            break;

            case "l":
            var audio = new Audio ("sounds/snare.mp3");
            audio.play();
            
            break;

        
    
        default:
            break;
    }

}


function buttonanimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout( function() {
        activebutton.classList.remove("pressed");
    }, 100)

}




