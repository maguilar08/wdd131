
//------------------ Ham Button----------------------------------------//
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.hov');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
/*-----------------Display Cards---------------------------------------*/
const temples = [
    {
        templeName: "Cerro Rico",
        location: "Potosi",
        about: "Silver mountain in Potosí.",
    
        imageUrl:
        "https://i.ibb.co/G4bqK18x/cerro-Rico-PNG.webp"
      },
      {
        templeName: "Casa de la Moneda",
        location: "Potosi-Villa Imperial",
        about: "Historic coin mint in Potosí.",
    
        imageUrl:
        "https://i.ibb.co/DP9mcdjn/casa-De-La-Moneda.webp"
      },
      {
        templeName: "Salar de Uyuni",
        location: "Potosi-Uyuni",
        about: "World's largest salt flat.",
    
        imageUrl:
        "https://i.ibb.co/Kcbk5qgK/salar-Uyuni.webp"
      }
];

createTempleCard(temples);

function createTempleCard(filteredTemples){
    document.querySelector(".gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let about = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        about.innerHTML = `<span class="label">About:</span> ${temple.about}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(about);
        card.appendChild(img);

        document.querySelector(".gallery").appendChild(card);
    });
}
    

