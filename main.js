// Task 1 - Declaring Objects
let myHouse = {
  stories: 2,
  parking: false,
  bedrooms: 2,
  garden: true,
  energy_efficiency_rating: "D",
};

let myCar = {
  color: "red",
  wheels: 4,
  power_steering: true,
  seats: 2,
  mpg: 20,
};

let myFavouriteFilm = {
  title: "The Dark Knight",
  released: 2008,
  lead_actor: "Christian Bale",
};

// Task 2 - Reading values
let person = {
  name: "Ben",
  likesChocolate: true,
};

/* console.log(person.likesChocolate); // Logs TRUE in console */

if (person.likesChocolate === true) {
  console.log(`${person.name} loves chocolate`);
} else {
  console.log(`${person.name} hates chocolate.`);
}

//Task 3 - Bracket notation

let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

/* console.log(bensPhrases["smallTalk"]); */
desiredPleasantry = "howdly doodley";
console.log(desiredPleasantry);

// Task 4 - Reassinging properties

let me = {
  firstName: "Serge",
  lastName: "Huleani",
  isBootcamper: false,
};

me.isBootcamper = true;
console.log(me.isBootcamper);

let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};

let nestedText = communication.payload.message.text;

if (communication.payload.message.priority == "URGENT") {
  console.log(nestedText);
} else {
  null;
}

// Task 6 - Get experimental

let book = {
  title: "A Game of Thrones",
  author: "George R.R. Martin",
  publication: {
    year: 1996,
    publisher: "Bantam Books",
  },
  details: {
    genre: "Fantasy",
    series: "A Song of Ice and Fire",
    pages: 694,
    language: "English",
  },
  stats: {
    pagesRead: 0,
    favoriteCharacters: ["Jon Snow", "Daenerys Targaryen", "Tyrion Lannister"],
  },
};

function updatePages(entry, newPages) {
  entry.details.pages = newPages;
  return "Number of pageshas been updated to " + newPages;
}

console.log(updatePages(book, 700));
