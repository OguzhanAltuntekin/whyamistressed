const startButton = document.getElementById('startButton');
const buttonContainer = document.getElementById(`buttonContainer`)
const buttonContainer2 = document.getElementById(`buttonContainer2`)
const approvedButton = document.getElementById(`approvedButton`)
const deniedButton = document.getElementById(`deniedButton`)
const resetButton = document.getElementById(`resetButton`)
const turnBackButton = document.getElementById(`turnBackButton`)
const firstH1 = document.getElementById(`firstH1`)


startButton.onclick = function() {
    firstH1.style.display = `none`;
    startButton.style.marginBottom = `15px`;
    startButton.style.backgroundColor = `#b497ff`;
    startButton.style.color=`white`;
    startButton.style.marginTop = `vh`;
    startButton.style.pointerEvents = 'none'; 
    startButton.style.cursor = 'not-allowed'; 
    startButton.style.scale = `1.2`;
    startButton.textContent = "Que1";
    startButton.disabled = true;
    buttonContainer.style.display = `flex`;
    buttonContainer.style.marginTop = `10vh`;
    buttonContainer2.style.display = `block`;
    
    
}


resetButton.onclick = function(){
   if (window.confirm("You are going the start point, are you sure about it?")) {

    window.location.reload();
   }

}

//-first answer yes
approvedButton.onclick = function(){
    startButton.textContent = "1 yes"
    //- -second answer yes
    approvedButton.onclick = function(){
        startButton.textContent = "2 yes"
        //- - -third answer yes
        approvedButton.onclick = function(){
            startButton.textContent =" 3 yes"   
        }
        //- - -third answer no
        deniedButton.onclick = function(){
            startButton.textContent = "2 yes 1 no"
        }

    }
    //- -second answer no
    deniedButton.onclick = function(){
        startButton.textContent = "1 yes 1 no"
    }
}

//-first answer no//
deniedButton.onclick = function(){
    startButton.textContent= "1 no"
    //- -second answer no
    deniedButton.onclick = function(){
        startButton.textContent = "2 no"
        //- - -third answer no 
        deniedButton.onclick = function (){
            startButton.textContent = "3 no"
        }
        //- - -third answer yes
        approvedButton.onclick = function (){
            startButton.textContent = "2 no 1 yes"
        }
        
    }
    //- -second answer yes
    approvedButton.onclick = function(){
        startButton.textContent = "1 no 1 yes"
        //- - -third answer yes
        approvedButton.onclick = function(){
            startButton.textContent =" 1 no 2 yes"
        }
        //- - -third answer no
        deniedButton.onclick = function(){
            startButton.textContent= "2 no 1 yes"
        }
    }
}