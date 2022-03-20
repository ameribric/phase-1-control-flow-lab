function scuberGreetingForFeet(scuberRide){
  if (scuberRide <= 400) {
    return 'This one is on me!';
  }
  else if (2000 < scuberRide && scuberRide <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (scuberRide > 2500); { 
    return 'No can do.'
  }

}

function ternaryCheckCity(city){
  console.log('city', city)
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}


function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return('Thank you so much.');
    case 'not as generous':
      return('Thank you.');
    default:
      return('Bye.');

  }
}
