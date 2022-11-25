
document.querySelector("#login_form a").addEventListener('mouseover', function(){
login_color()});

document.querySelector("#login_form a").addEventListener('mouseout', function(){
    document.querySelectorAll('#login_form a span').forEach(tk => tk.style.width = "")
    document.querySelector(".login_title").style.color = "";
    document.querySelector(".login_title").style.textShadow = "";
    document.querySelector('#login_form a').style.backgroundColor = "";
    document.querySelector('#login_form a').style.boxShadow = "";
})                                                              
document.querySelector("#login_form a").addEventListener('click', function(){
    if (document.querySelector("#inp1").matches(':invalid')){
        document.querySelector('#inp1').animate([
             { transform: 'translate(1px, 1px) rotate(0deg)'},
             { transform: 'translate(-1px, -2px) rotate(-1deg)'},
             { transform: 'translate(-3px, 0px) rotate(1deg)'},
             { transform: 'translate(3px, 2px) rotate(0deg)'},
             { transform: 'translate(1px, -1px) rotate(1deg)'},
             { transform: 'translate(-1px, 2px) rotate(-1deg)'},
             { transform: 'translate(-3px, 1px) rotate(0deg)'},
             { transform: 'translate(3px, 1px) rotate(-1deg)'},
             { transform: 'translate(-1px, -1px) rotate(1deg)'},
             { transform: 'translate(1px, 2px) rotate(0deg)'},
             { transform: 'translate(1px, -2px) rotate(-1deg)'},
          ], {
            duration: 600,
            iterations: 1,
          });}
    if (document.querySelector("#inp2").matches(':invalid')){
        document.querySelector('#inp2').animate([
            { transform: 'translate(1px, 1px) rotate(0deg)'},
            { transform: 'translate(-1px, -2px) rotate(-1deg)'},
            { transform: 'translate(-3px, 0px) rotate(1deg)'},
            { transform: 'translate(3px, 2px) rotate(0deg)'},
            { transform: 'translate(1px, -1px) rotate(1deg)'},
            { transform: 'translate(-1px, 2px) rotate(-1deg)'},
            { transform: 'translate(-3px, 1px) rotate(0deg)'},
            { transform: 'translate(3px, 1px) rotate(-1deg)'},
            { transform: 'translate(-1px, -1px) rotate(1deg)'},
            { transform: 'translate(1px, 2px) rotate(0deg)'},
            { transform: 'translate(1px, -2px) rotate(-1deg)'},
         ], {
           duration: 600,
           iterations: 1,
         });

    }
})

document.querySelector("#login_form a").addEventListener('mousedown', function(){
    if (document.querySelector("#inp1").matches(':invalid')
    && document.querySelector("#inp2").matches(":invalid")){
        document.querySelector('#login_form a').style.boxShadow = "0 0 4px red,\
                                                                   0 0 16px red,\
                                                                   0 0 32px red,\
                                                                   0 0 64px red";
        }
}) 
document.querySelector("#login_form a").addEventListener('mouseup', function(){
    if (document.querySelector("#inp1").matches(':invalid')
    && document.querySelector("#inp2").matches(":invalid")){
        document.querySelector('#login_form a').style.boxShadow = "0 0 3px red,\
                                                                   0 0 9px red,\
                                                                   0 0 18px red,\
                                                                   0 0 36px red";
        }
}) 

function login_color() {
    if (document.querySelector("#inp1").matches(':valid')
    && document.querySelector("#inp2").matches(":valid")) {
        document.querySelector(".login_title").style.color = 'blueviolet';
        document.querySelector(".login_title").style.textShadow = "0 0 4px blueviolet,\
                                                                  0 0 16px blueviolet,\
                                                                  0 0 32px blueviolet,\
                                                                  0 0 64px blueviolet";
    }
        
    else{document.querySelectorAll('#login_form a span').forEach(tk => tk.style.width = "0");
         document.querySelector('#login_form a').style.backgroundColor = "red";
         document.querySelector('#login_form a').style.boxShadow = "0 0 3px red,\
                                                                    0 0 9px red,\
                                                                    0 0 18px red,\
                                                                    0 0 36px red";}}
 
