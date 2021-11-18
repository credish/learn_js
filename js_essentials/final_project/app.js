let modify = document.querySelector('.modify');
let setBtn = document.querySelector('.set');
let elements = document.getElementsByName('cssProperty');

function set() {
    // document.getElementsByName("cssProperty").forEach(function(element)){
    //     let cssProperty = element.getAttribute("id");
    //  });


   
    for (let i = 0, n = elements.length; i < n; i++){
        let cssProperty =  elements[i].getAttribute('id') ;
        let cssValue =  elements[i].value ;
        modify.style[ cssProperty ] = cssValue;
    }
    
};


setBtn.addEventListener('click', set);