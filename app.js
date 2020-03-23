var ex1 = 30,
    ex2 = 'DHG18',
    ex3 = 5,
    ex4 = false,
    ex5 = [
      'vår',
      'sommar',
      'höst',
      'vinter'
    ];
    

/*** UPPGIFT 1 ***/
console.log(typeof ex1); 
console.log(typeof ex2); 
console.log(typeof ex3); 
console.log(typeof ex4); 
console.log(typeof ex5); 

console.log( ex1 + ex3); 

/*** UPPGIFT 2 ***/
console.log( "det bordes vara en array"); 
console.log( 4); 
console.log(ex5[0]);




document.getElementById('aniBtn').addEventListener('click', function() {

  const box = document.querySelector('box_1');
  if(box.classList.contains('animateWidth')) {
    box.classList.remove('animatewidth');
  } else {
    box.classList.add('animateWidth');
  }
});

