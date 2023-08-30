let inputs =document.getElementById('inputbox'); // for input 
let buttons = document.querySelectorAll('button'); // for button

let Strin = "";

let arr = Array.from(buttons); // for selecting buttons 

// for press any button what thing can be done
arr.forEach(button => {
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML == '='){
            Strin = eval(Strin);
            inputs.value = Strin; 
        }
        else if(e.target.innerHTML == 'C'){
            Strin = "";
            inputs.value = Strin; 
        }
        else if(e.target.innerHTML == 'DEL'){
            Strin = Strin.substring(0,Strin.length-1);
            inputs.value = Strin;
        }
        else{
            Strin += e.target.innerHTML;
            inputs.value = Strin;
        }
        
        
    })
})