document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector("form");
    const destinationResults = document.getElementById("destination-results");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const searchQuery = this.querySelector("#destination").value.toLowerCase();

        
        const destinations = [
            { name: "France", description: `France, renowned for its rich history, cultural heritage, and picturesque landscapes, stands as a timeless emblem of sophistication and allure. Nestled in Western Europe, this captivating country boasts a diverse tapestry of experiences, from the romantic allure of Paris to the sun-kissed shores of the French Riviera. 

            At the heart of France lies its capital city, Paris, a mesmerizing metropolis synonymous with art, fashion, and gastronomy. Here, iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral beckon visitors to immerse themselves in centuries of artistic and architectural splendor. The city's charming boulevards, quaint cafes, and vibrant neighborhoods offer endless opportunities for exploration and indulgence.
            
            Beyond Paris, France's varied landscapes unfurl, inviting travelers to discover its enchanting regions. From the bucolic vineyards of Bordeaux and Burgundy to the sun-drenched lavender fields of Provence, each corner of the country exudes its own distinct charm. The rugged coastlines of Normandy and Brittany beckon with their dramatic cliffs and windswept beaches, while the snow-capped peaks of the French Alps offer thrilling adventures for outdoor enthusiasts.
            
            Cultural diversity thrives in France, reflected in its lively festivals, regional cuisines, and local traditions. From savoring gourmet delicacies in Lyon, the culinary capital, to exploring the medieval villages of the Dordogne Valley, France offers a tapestry of experiences that captivate the senses and ignite the imagination.
            
            In essence, France is a timeless destination that resonates with travelers seeking beauty, elegance, and a profound connection to history and culture. Whether strolling along the Seine River in Paris, sipping fine wine in the vineyards of Champagne, or marveling at the grandeur of the Palace of Versailles, a journey through France is a voyage of discovery, where each moment unfolds like a cherished memory.` },
            { name: "Japan", description: `Japan is a mesmerizing blend of ancient tradition and modern innovation, offering visitors a captivating array of experiences. From the enchanting beauty of cherry blossoms in spring to the dynamic energy of cities like Tokyo and Kyoto, Japan's diverse landscapes and cultural treasures never fail to inspire awe. Whether exploring serene temples, indulging in exquisite cuisine, or immersing oneself in vibrant festivals, a journey through Japan is a journey of discovery and enchantment, where timeless beauty and rich heritage converge to create unforgettable memories.

            `},
            { name: "Iceland", description:` Iceland is a land of unparalleled natural beauty, where rugged landscapes and geothermal wonders converge to create an otherworldly experience. From cascading waterfalls and majestic glaciers to the enchanting dance of the Northern Lights, Iceland's breathtaking scenery captivates the imagination. Rich in Viking heritage and modern charm, its vibrant culture and culinary delights add depth to the journey. Exploring Iceland is an adventure filled with awe-inspiring moments and unforgettable encounters with nature's wonders, making it a destination like no other.



            ` }
          
        ];

      
        destinationResults.innerHTML = "";

        const filteredDestinations = destinations.filter(destination =>
            destination.name.toLowerCase().includes(searchQuery)
        );

      
        if (filteredDestinations.length > 0) {
            filteredDestinations.forEach(destination => {
                const destinationCard = document.createElement("div");
                destinationCard.classList.add("destination-card");
                destinationCard.innerHTML = `
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                    <button class="select-button">Select</button>
                `;
                destinationResults.appendChild(destinationCard);
            });

            const selectButtons = document.querySelectorAll(".select-button");
            selectButtons.forEach(button => {
                button.addEventListener("click", function() {
                    window.location.href = "project-plan.html";
                });
            });
        } else {
            destinationResults.innerHTML = "<p>No results found.</p>";
        }
    });
});

