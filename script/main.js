// HOME PAGE
// CHOOSE A CLEANING TYPE

btnA = document.getElementById('btn-a');
btnB = document.getElementById('btn-b');
btnC = document.getElementById('btn-c');

btnB.addEventListener('click', function(){
    btnA.style.backgroundColor = '#fff';
    btnA.style.color = '#000'
    btnB.style.backgroundColor = '#04107b'
    btnB.style.color = '#fff'
    btnC.style.backgroundColor = '#fff';
    btnC.style.color = '#000'

})

btnC.addEventListener('click', function(){
    btnA.style.backgroundColor = '#fff';
    btnA.style.color = '#000'
    btnC.style.backgroundColor = '#04107b'
    btnC.style.color = '#fff'
    btnB.style.backgroundColor = '#fff';
    btnB.style.color = '#000'

})

btnA.addEventListener('click', function(){
    btnB.style.backgroundColor = '#fff';
    btnB.style.color = '#000'
    btnA.style.backgroundColor = '#04107b'
    btnA.style.color = '#fff'
    btnC.style.backgroundColor = '#fff';
    btnC.style.color = '#000'

})


// CHOOSE A HOUSE TYPE

flat = document.getElementById('flat');
duplex = document.getElementById('duplex');

duplex.addEventListener('click', function(){
    duplex.style.backgroundColor = '#04107b'
    duplex.style.color = '#fff'
    flat.style.backgroundColor = '#fff';
    flat.style.color = '#000'

})


flat.addEventListener('click', function(){
    flat.style.backgroundColor = '#04107b'
    flat.style.color = '#fff'
    duplex.style.backgroundColor = '#fff';
    duplex.style.color = '#000'

})




// SIGN UP/ SIGN IN HTML
sign1 = document.getElementById('sign1');
sign2 = document.getElementById('sign2');


function signin(){
    sign2.style.display = 'grid';
    sign1.style.display = 'none'
}

function signup(){
    sign1.style.display = 'grid';
    sign2.style.display = 'none'
}



// get and calculate

get = document.getElementById('get');
get1 = document.getElementById('get1');
cal = document.getElementById('cal');

cal.addEventListener('click', function(){
    get1.style.display = 'none'
})
get.addEventListener('click', function(){
    get1.style.display = 'block'
})


// pay

h1 = document.getElementById('h1');
h2 = document.getElementById('h2');
h3 = document.getElementById('h3');
h4 = document.getElementById('h4');
h5 = document.getElementById('h5');

living = document.getElementById('living');
kitchen = document.getElementById('kitchen');
rest = document.getElementById('rest');
bed = document.getElementById('bed');
common = document.getElementById('common');

h2.addEventListener('click', function(){
    h1.style.backgroundColor = 'rgb(246, 246, 255)'
    h2.style.backgroundColor = '#e6e6ff'
    h3.style.backgroundColor = 'rgb(246, 246, 255)'
    h4.style.backgroundColor = 'rgb(246, 246, 255)'
    h5.style.backgroundColor = 'rgb(246, 246, 255)'
    kitchen.style.display = 'block'
    living.style.display = 'none'
    rest.style.display = 'none'
    bed.style.display = 'none'
    common.style.display = 'none'
})

h3.addEventListener('click', function(){
    h1.style.backgroundColor = 'rgb(246, 246, 255)'
    h2.style.backgroundColor = 'rgb(246, 246, 255)'
    h3.style.backgroundColor = '#e6e6ff'
    h4.style.backgroundColor = 'rgb(246, 246, 255)'
    h5.style.backgroundColor = 'rgb(246, 246, 255)'
    kitchen.style.display = 'none'
    living.style.display = 'none'
    rest.style.display = 'block'
    bed.style.display = 'none'
    common.style.display = 'none'
})

h4.addEventListener('click', function(){
    h1.style.backgroundColor = 'rgb(246, 246, 255)'
    h2.style.backgroundColor = 'rgb(246, 246, 255)'
    h3.style.backgroundColor = 'rgb(246, 246, 255)'
    h4.style.backgroundColor = '#e6e6ff'
    h5.style.backgroundColor = 'rgb(246, 246, 255)'
    kitchen.style.display = 'none'
    living.style.display = 'none'
    rest.style.display = 'none'
    bed.style.display = 'block'
    common.style.display = 'none'
})

h5.addEventListener('click', function(){
    h1.style.backgroundColor = 'rgb(246, 246, 255)'
    h2.style.backgroundColor = 'rgb(246, 246, 255)'
    h3.style.backgroundColor = 'rgb(246, 246, 255)'
    h4.style.backgroundColor = 'rgb(246, 246, 255)'
    h5.style.backgroundColor = '#e6e6ff'
    kitchen.style.display = 'none'
    living.style.display = 'none'
    rest.style.display = 'none'
    bed.style.display = 'none'
    common.style.display = 'block'
})
h1.addEventListener('click', function(){
    h1.style.backgroundColor = '#e6e6ff'
    h2.style.backgroundColor = 'rgb(246, 246, 255)'
    h3.style.backgroundColor = 'rgb(246, 246, 255)'
    h4.style.backgroundColor = 'rgb(246, 246, 255)'
    h5.style.backgroundColor = 'rgb(246, 246, 255)'
    kitchen.style.display = 'none'
    living.style.display = 'block'
    rest.style.display = 'none'
    bed.style.display = 'none'
    common.style.display = 'none'
})


// FIXED FORM
noScroll = document.getElementsByClassName('noScroll');
dark = document.getElementById('dark');
fForm = document.getElementById('fForm')

function become(){
    dark.style.display= 'block';
    fForm.style.display = 'grid'
}
function cancel(){
    dark.style.display= 'none';
    fForm.style.display = 'none'
}


// sign

box1= document.getElementById('box1');
box2 = document.getElementById('box2')

 
function second(){
    box1.style.backgroundColor = 'transparent';
    box2.style.backgroundColor = 'rgb(0, 11, 124)'
}
function first(){
    box1.style.backgroundColor = 'rgb(0, 11, 124)';
    box2.style.backgroundColor = 'transparent'
}