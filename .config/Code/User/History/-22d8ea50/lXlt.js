function distanceFromHqInBlocks(B) {
  const h = 42;
  const distance = Math.abs(B - h);
  return distance;
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(y){
  function distanceFromHqInBlocks(y){
    const h = 42;
    const f = 264;
    return(Math.abs((y-h)*f));
  }
  return distanceFromHqInBlocks(y);
}

function distanceTravelledInFeet(start, destination){
  const distance = Math.abs(((destination - start)*264));
  return distance;
}
distanceTravelledInFeet();


function calculatesFarePrice(start, destination){
  const distance = Math.abs((destination-start)*264);
  if(distance <=400){return 0}
  else if(distance>400 && distance<=2000){return((destination-400)*0.02)};
  if(distance=>2000 && distance<2500){return 25;}
  if(distance=>2500){retur'cannot travel that far';}
}
calculatesFarePric();





