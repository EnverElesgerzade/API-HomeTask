let sorted = document.querySelector('#sorted');

fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then((data) => {

    function showProducts() {
        let filteredData;

        if (sorted.value === "asc") {
            filteredData = data.sort((a, b) => a.price - b.price);
        }
        else if (sorted.value === "desc") {
            filteredData = data.sort((a, b) => b.price - a.price);
        }

        document.querySelectorAll(".card").forEach((card) => {
            card.remove();
        });

        filteredData.forEach((item) => {
            let card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <p>$${item.price}</p>
            `;

            document.body.append(card);
        });
    }

    showProducts();

    sorted.addEventListener("change", showProducts);
});