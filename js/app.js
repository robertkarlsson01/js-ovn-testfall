


/*** UPPGIFT 3 - TA BORT DENNA KOMMENTAR DÅ DU BÖRJAR ****

//tillägger en eventListener på elementet med id:n aniBtn
document.getElementById('aniBtn').addEventListener('click', function() {
 //sparar det animerade elementet i en variabel
  const box = document.querySelector('#box_1');
 //kollar om animateWidth finns i elmentet
  if(box.classList.contains('animateWidth')) {
    //om, så raderar vi den
    box.classList.remove('animateWidth');
  } else {
    //Tillägger klassen animateWidth till elementet med classList
    box.classList.add('animateWidth');
  }
});

 **** END UPPGIFT 3 -  TA BORT****/
