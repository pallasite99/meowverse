document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const catImagesContainer = document.getElementById("cat-images");
    const breedsListContainer = document.getElementById("breeds-list");
    const page = window.location.pathname;

    if (page.includes("index.html")) {
        fetch("https://api.thecatapi.com/v1/images/search?limit=5")
            .then(response => response.json())
            .then(data => {
                data.forEach(cat => {
                    const img = document.createElement("img");
                    img.src = cat.url;
                    img.alt = "Random Cat";
                    catImagesContainer.appendChild(img);
                });
            });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const breedsListContainer = document.getElementById("breeds-list");

    fetch("https://api.thecatapi.com/v1/breeds")
        .then(response => response.json())
        .then(data => {
            data.slice(0, 10).forEach(breed => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                const descCell = document.createElement("td");
                
                nameCell.textContent = breed.name;
                descCell.textContent = breed.description;
                
                row.appendChild(nameCell);
                row.appendChild(descCell);
                breedsListContainer.appendChild(row);
            });
        });
});
