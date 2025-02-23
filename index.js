
for(var i = 0; i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function (){
      var button1 = this.innerHTML;
      makesound(button1);
    });   

 
}
document.addEventListener("keypress",function(event){
        makesound(event.key);
})

function makesound(key){

        switch(key){
                case "w":
                    var audio = new Audio("./sounds/crash.mp3");
                    audio.play();
                    break;
                case "a":
                        var audio = new Audio("./sounds/kick-bass.mp3");
                        audio.play();
                        break;
                case "s":
                        var audio = new Audio("./sounds/snare.mp3");
                        audio.play();
                        break;
                case "d":
                        var audio = new Audio("./sounds/tom-1.mp3");
                        audio.play();
                        break;
                case "j":
                        var audio = new Audio("./sounds/tom-2.mp3");
                        audio.play();
                        break;
                case "k":
                        var audio = new Audio("./sounds/tom-4.mp3");
                        audio.play();
                        break;
                case "l":
                        var audio = new Audio("./sounds/tom-4.mp3");
                        audio.play();
                        break;     
          
                    
        }
                
}   
