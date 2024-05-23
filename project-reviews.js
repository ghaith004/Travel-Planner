document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const reviewsContainer = document.querySelector(".reviews");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

     
        const userName = this.querySelector('input[name="userName"]').value;
        const rating = this.querySelector('input[name="rating"]').value;
        const reviewContent = this.querySelector('input[name="reviewContent"]').value;

       
        const newReview = document.createElement("div");
        newReview.classList.add("review");

      
        const userParagraph = document.createElement("p");
        userParagraph.textContent = "User Name: " + userName;
        newReview.appendChild(userParagraph);

        const ratingParagraph = document.createElement("p");
        ratingParagraph.textContent = "Rating: " + rating;
        newReview.appendChild(ratingParagraph);

        const reviewParagraph = document.createElement("p");
        reviewParagraph.textContent = "Review: " + reviewContent;
        newReview.appendChild(reviewParagraph);

        
        reviewsContainer.appendChild(newReview);

      
        this.reset();
    });
});
