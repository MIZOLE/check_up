let user = document.getElementById('name');

let password = document.getElementById('password');

//create an empty array
let all_bikes = [];

let userN = document.getElementById('userename');
let pass = document.getElementById('password');
let form = document.getElementById('form');

form.addEventListener("click", (e) => {
    let messeges = []
    if (user.value === '' || userN.value == null) {
        console.log("eneter a valida username")
    }

   else if (pass.value === '' || pass.value < 6) {
        console.log("enter a vallid password")   }

   else {
    return window.location("home.html")
   }
})



// let loadBikes = async () => {
//     try {
//         const res = await fetch('https://motorcycle-specs-database.p.rapidapi.com/make');
//         all_bikes = await res.json()
//         displayCharacters(all_bikes);

//     } catch (err) {
//         console.error(err);
//     }
// };

// let displayCharacters = (MakeAllof) => {
//     let htmlString = MakeAllof
//     .map((ArticleGetByYearMakeModel) => {
//         return  `
//         <li class="character">
//             <h2>${ArticleGetByYearMakeModel.make}</h2>
//             <p>House: ${ArticleGetByYearMakeModel.model}</p>
//             <img src="${ArticleGetByYearMakeModel.year}"></img>
//         </li>
//     `;
//     })
//     .join('');
//     byCicleList.innerHTML = htmlString;
// };

var name_of_user = document.getElementById('name');
var surname = document.getElementById('surname')


form.addEventListener('submit', (e) => {
    //make the form to not submit empty folder
    let messeges = []
    if (name_of_user.value === '' || name_of_user.value == null) {
        messeges.push("Name is required")
    }

    if (surname === '' || surname == null) {
        messeges.push("surname")
    }

    if (messeges.length > 0) {
        e.preventDefault()
        errorElement.innerText = messeges.join(', ')
    }

})
