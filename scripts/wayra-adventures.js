//------------------ Ham Button----------------------------------------//
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.hov');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
//--------------------Local Storage-------------------------------------//

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.


//--------------------Get Date and Time-------------------------------------//

// Function to format date and time
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${month}/${day}/${year}, ${hours}:${minutes}:${seconds}`;
}

// Get the last modification date of the document
const lastModified = new Date(document.lastModified);

// Format the date and time
const formattedDate = formatDate(lastModified);

// Display the formatted date and time in the paragraph with id "last-modified"
document.getElementById('last-modified').innerText = `Last modification: ${formattedDate}`;

const year = new Date().getFullYear();

document.getElementById('currentyear').textContent = year;


//----------------------------------Cochabamba----------------------------------------------//

const temples = [
    {
      templeName: "Cristo de la Concordia",
      location: "Cochabamba-Cercado",
      about: "The largest statue of Christ",
      imageUrl:
      "https://i.ibb.co/35HP3G9x/cristo-Concordia.png"
    },
    {
      templeName: "Agroflori",
      location: "Cochabamba-Quillacollo",
      about: "Bird sanctuary",
      imageUrl:
      "https://i.ibb.co/1tJw75bc/agroflori.png"
    },
    {
      templeName: "Incallajta",
      location: "Cochhabamba-Pocona",
      about: "A massive Inca ruin in Bolivia.",
      imageUrl:
      "https://i.ibb.co/8LNpm7rf/Incallajta.png"
    },
    {
      templeName: "Mesetas de Iphillas",
      location: "Cochabamba",
      about: "Stunning Bolivian highlands.",
      
      imageUrl:
      "https://i.ibb.co/PvrtGtk6/iphilla-Mesetas.png"
    },
    {
      templeName: "Laguna Alalay",
      location: "Cochabamba-Cercado",
      dedicated: "Cochabamba's urban oasis.",
      imageUrl:
      "https://i.ibb.co/DfMmg8jx/laguna-Alalay.png"
    },
    {
      templeName: "Corani",
      location: "Cochabamba-Corani",
      about: "Peaceful Mountain Dam",
      
      imageUrl:
      "https://i.ibb.co/XffXzp43/laguna-Corani.png"
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
    



