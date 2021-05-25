
const text = " Patience is not simply the ability to wait - it's how we behave while we're waiting...!";

let index = 0;


function writeText()    {
    document.body.innerText = text.slice(0, index);

    index++;



    if(index > text.length) {
        index =0 ;

    }
}


setInterval(writeText, 100);


