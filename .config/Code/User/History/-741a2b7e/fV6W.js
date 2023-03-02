// Code your solutions in this file
function writeCards(names,event){
    const arrayMessage=[];
    for(let i=0; i<names.length; i++){
      const message=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      arrayMessage.push(message);
    }
    return arrayMessage;
  }
  const names=["Sumaya", "Yunus", "Suheyla"];
  const event="birthday";
  