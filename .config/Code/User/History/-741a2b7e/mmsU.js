// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
  function wrapGifts(gifts){
    for(let i=0; i<gifts.length; i++){
      console.log(`wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts
  }
  wrapGifts(gifts);

  const names=["Sumaya", "Yunus", "Suheyla",];
  const event="birthday";
  function writeCards(names,event){
    const arrayMessage=[];
    for(i=0; i<names.length; i++){
      const message=`Thank you, ${names[i]}, for the wonderful birthday gift!`;
      arrayMessage.push(message);
    }
    return arrayMessage;
  }
writeCards(arrayMessage)