// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
const destructivelyAppendCat = name =>{
    name = "Ralph"
    cats.push(name);
}
const  destructivelyPrependCat = name =>{
    name = "Bob"
    cats.unshift(name);
}

const destructivelyRemoveLastCat = ()=> cats.pop();

const  destructivelyRemoveFirstCat =()=> cats.