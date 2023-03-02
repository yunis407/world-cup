// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
const destructivelyAppendCat = name =>{
    name = "Ralph"
    cats.push(name);
}
const  destructivelyPrependCat = name =>{
    const cats =["Milo","Otis","Garfield"];
    name = "Bob"
    cats.unshift(name);
}