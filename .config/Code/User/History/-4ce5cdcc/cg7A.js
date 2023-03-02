// write your code here
document.addEventListener("DOMContentLoaded",()=>{
    // write your code
    
    
    function fetchMeal() {
      fetch(" http://localhost:3000/ramens")
        .then((response) => response.json())
        .then((data) => appendData(data));
    }
    fetchMeal();
    
    function addMeal(data) {
    
      let name = document.querySelector(".name");
      let restaurant = document.querySelector(".restaurant");
      let image = document.getElementById("image");
      let rating = document.querySelector("#rating-display");
      let comment = document.querySelector("#comment-display");
    
      image.src = `${data.image}`;
      name.textContent = `${data.name}`;
      restaurant.textContent = `${data.restaurant}`;
      rating.textContent = `${data.rating}`;
      comment.textContent = `${data.comment}`
    }
    
    
    function appendData(data) {
      data.forEach((element) => {
        let menu = document.querySelector("#ramen-menu");
        let mealCards = document.createElement("li");
        mealCards.innerHTML = `
            <img src="${element.image}">
            `;
        mealCards.addEventListener("click", () => {
          addMeal(element);
        });
        menu.appendChild(mealCards);
      });
    }
    
    function handleSubmission(){
    
    let newName = document.querySelector("#new-name").value;
    let newImage = document.querySelector("#new-image").value;
    let newRestaurant = document.querySelector("#new-restaurant").value;
    let newRating = document.querySelector("#new-rating").value;
    let newComment = document.querySelector("#new-comment").value;
    
    if (newName!== "" || newImage !== "" || newRestaurant !== "" || newRating!== "" || newComment!== "") {
    let newMeal = {
        name: newName,
          restaurant:newRestaurant, 
          image: newImage,
          rating:newRating,
          comment: newComment,
    }
    postSubmission(newMeal);
    fetchMeal();
    }
    
    }
    
    function postSubmission(newMeal) {
        fetch("http://localhost:3000/ramens", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMeal),
        })
          .then((resp) => resp.json())
          .then((result) => console.log(result));
    }
    
    
    
    
    
    
    document.getElementById("submit").addEventListener("click",(e) =>{
    
        handleSubmission()})
    
