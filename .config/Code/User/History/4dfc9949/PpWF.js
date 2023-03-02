let text;
let speed = document.getElementById("speed").value; //gets value of number input and asssigns it to variable speed;
if (speed <= 70 && speed >= 1) {
  text ="OK";
} //displays OK if speed is 1 to 70;
else if (speed > 70 && speed <= 130) {
  //if speed is above speed limit but below 131;
  let y = speed - 70; //By how much speed has the car exceeded the speed limit;
  let q = y / 5; //Calculating demerit points since its 1 point for every 5kmh exceeded;
  let r = Math.floor(q); //rounds down to the nearest interger since a point is only earned when speed is exceeded 5kmh;
  text = "Points:" + " " + r;
} //prints demerit points if speed limit is exceeded;
else if ((speed - 70) / 5 > 12) {
  text = "License suspended!";
}