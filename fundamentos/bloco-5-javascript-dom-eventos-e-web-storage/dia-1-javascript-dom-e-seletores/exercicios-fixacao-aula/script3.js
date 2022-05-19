let title = document.getElementById('header-container');
title.style.color = 'white';
title.style.background = 'green';

let emeTask = document.getElementsByClassName('emergency-tasks');
emeTask[0].style.background = 'pink';

let noTask = document.getElementsByClassName('no-emergency-tasks');
noTask[0].style.background = 'yellow';

let urgImp = document.querySelectorAll('.emergency-tasks h3');
for(index in urgImp){
    urgImp[index].style.background = 'purple';
};

let notUrg = document.querySelectorAll('.no-emergency-tasks h3');
for(index in notUrg){
    notUrg[index].style.background = 'black';
}




