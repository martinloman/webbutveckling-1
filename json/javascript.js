let movie = {
  "adult": false,
  "backdrop_path": "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
  "belongs_to_collection": null,
  "budget": 63000000,
  "genres": [{
    "id": 18,
    "name": "Drama"
  }],
  "homepage": "http://www.foxmovies.com/movies/fight-club",
  "id": 550,
  "imdb_id": "tt0137523",
  "original_language": "en",
  "original_title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "popularity": 47.479,
  "poster_path": "/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg",
  "production_companies": [{
      "id": 508,
      "logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
      "name": "Regency Enterprises",
      "origin_country": "US"
    },
    {
      "id": 711,
      "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
      "name": "Fox 2000 Pictures",
      "origin_country": "US"
    },
    {
      "id": 20555,
      "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
      "name": "Taurus Film",
      "origin_country": "DE"
    },
    {
      "id": 54051,
      "logo_path": null,
      "name": "Atman Entertainment",
      "origin_country": ""
    },
    {
      "id": 54052,
      "logo_path": null,
      "name": "Knickerbocker Films",
      "origin_country": "US"
    },
    {
      "id": 25,
      "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      "name": "20th Century Fox",
      "origin_country": "US"
    },
    {
      "id": 4700,
      "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
      "name": "The Linson Company",
      "origin_country": "US"
    }
  ],
  "production_countries": [{
      "iso_3166_1": "DE",
      "name": "Germany"
    },
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1999-10-15",
  "revenue": 100853753,
  "runtime": 139,
  "spoken_languages": [{
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
  }],
  "status": "Released",
  "tagline": "Mischief. Mayhem. Soap.",
  "title": "Fight Club",
  "video": false,
  "vote_average": 8.4,
  "vote_count": 21107
};

// Vi har precis gjort ett anrop till en API d??r vi bad om information om
// en film. Som svar har vi f??tt JSONobjektet movie
// 1. Testa att skriva ut hela JSON-objektet i konsolen:

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------


// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

// Du ser att objektet har flera olika namn med tillh??rande v??rden. Du skulle
// nu vilja h??nvisa till och skriva ut n??gra specifika datav??rden
// 2. Anv??nd punktnotationen f??r att skriva ut "original_title", "vote_average" och "backdrop_path" till konsolen

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------


// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

// movie har nyckeln "production_companies" som h??ller objekt i en lista
// 3. Skapa en variabel "production_companies" som h??ller den array som inneh??ller datan i production_companies

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

// Det f??rsta v??rdet i variabeln "production_companies" ??r ett objekt som har namnet "Regency Enterprises"
// 4. Anv??nd indexering och punktnotationen f??r att ??ndra det f??rsta f??retagets namn till "Regency Enterprises Inc."

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

// Eftersom variablen "production_companies" ??r en lista kan vi anv??nda map() eller forEach() f??r att f?? tag
// p?? varje enskilt element i listan och g??ra n??got med den
// 5. Anv??nd .map() eller .forEach() f??r att skriva ut varje enskilt f??retag
// Testa b??de med en vanlig funktion och en pilfunktion.

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

// Man kan anv??nda Array.filter f??r att filtrera ut saker som man vill ha fr??n en lista
// 6. Anv??nd filter f??r att plocka ut de production companies som har en logo_path.
// Logga den filtrerade listan till consolen

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------


// 7. Skriv ut information om movie i DOMen s?? att det syns i sidan index.html.
// Du kan anv??nda jQuery om du vill.
//
// V??nta p?? att DOMen laddats s?? att du kan manipulera den. Ut??ka markupen i sidan f??r att 
// rymma informationen nedan.
//
// Visa bilden i egenskapen backdrop_path, s??kv??gen m??ste f??reg??s av "https://image.tmdb.org/t/p/w500"
// Visa filmens title, tagline, vote_average, votes
// Visa en lista med production_companies (name och ??ven logo om du vill)

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

// ------------------------------------------------- Din kod h??r --------------------------------------------------------------

//Tre olika s??tt att v??nta p?? att DOMen har laddats. V??lj ett.
window.addEventListener('load', function(event) {

})

window.onload = function() {

}

// Med jQuery
$(function() {

})