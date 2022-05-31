 //Change background color;

let buttonBackgroundColor = document.getElementById('background');

function changeBackground(){
    let container = document.getElementById('body');
        if(container.style.backgroundColor == 'rgb(65, 63, 66)'){
            container.style.backgroundColor = 'white';
            container.style.color = 'rgb(65, 63, 66)';
        }
        else{
            container.style.backgroundColor = 'rgb(65, 63, 66)';
            container.style.color = 'white';
        }   
}

changeBackground();

buttonBackgroundColor.addEventListener('click', changeBackground);

//Change font-size;

let buttonFontSize = document.getElementById('fontSize');

function changeSize(){
    let container = document.getElementById('body');
    if(container.style.fontSize == '23px'){
        container.style.fontSize = '18px'
    }
    else{
        container.style.fontSize = '23px'
    }

}
changeSize();

buttonFontSize.addEventListener('click', changeSize);

//Change height-line;

let buttonHeight = document.getElementById('heightLine');

function changeHeightLine(){
    let container = document.getElementById('body');
    if(container.style.lineHeight == '65px'){
        container.style.lineHeight = '35px'
    }
    else{
        container.style.lineHeight = '65px'
    }
}

changeHeightLine();

buttonHeight.addEventListener('click', changeHeightLine);


//Change font-family;

let buttonFamily = document.getElementById('fontFamily');

function changeFontFamily(){
    let container = document.getElementById('body');
    if(container.style.fontFamily == 'Helvetica, sans-serif'){
        container.style.fontFamily = 'Garamond, serif';
    }
    else{
        container.style.fontFamily = 'Helvetica, sans-serif';
    }
}

changeFontFamily();

buttonFamily.addEventListener('click', changeFontFamily)
