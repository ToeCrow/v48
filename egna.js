// Nivå 1: Hämta och logga användare
// Beskrivning:
// Hämta en lista med alla användare från API:et https://jsonplaceholder.typicode.com/users och logga namnen på dessa användare i konsolen.
// Uppgift:
// 1. Hämta en lista med alla användare från API:et.
// 2. Logga namnen på varje användare i konsolen.
// Använd en .then()-kedja för att hantera resultatet.

// fetch('https://jsonplaceholder.typicode.com/users')
//  .then(response => {
//   if (!response.ok) {
//    throw new Error(`: ${response.status}`);
//   }
//   return response.json();
//  })
//  .then(data => {
  
//   data.forEach(user => {
//    console.log(user.name);
//   })
//  })
//  .catch(error => {
//   console.error('ett fel inträffade: ', error.message);
//  });




// Nivå 2: Hämta användare och kontrollera inlägg
// Beskrivning:
// Hämta användaren med id 2 från https://jsonplaceholder.typicode.com/users/2. Därefter, använd användarens id för att hämta deras inlägg från https://jsonplaceholder.typicode.com/posts?userId=2. Logga alla titlar från inläggen.
// Uppgift:
// 1. Hämta användaren med id 2.
// 2. Använd deras id för att hämta inlägg.
// 3. Logga titeln på varje inlägg i konsolen.
// Använd fetch() och .then() för att hantera resultaten.

const url = 'https://jsonplaceholder.typicode.com/';
async function fetchUserAndPosts() {
 try {
  const userResponse = await fetch(`${url}users/2`);
   if (!userResponse.ok) {
    throw new Error('Error fetching user');
   }
   const user = await userResponse.json();

   const userId = user.id;

   const postsResponse = await fetch(`${url}posts?userId=${userId}`);
    if (!postsResponse.ok) {
     throw new Error('error fething posts');
    }

    const posts = await postsResponse.json();
    console.log(posts);
    posts.forEach(post => {
     console.log(post.title)
    })
 } catch (error) {
  console.error('something went wrong:', error.message)
 }
}

fetchUserAndPosts();


// Nivå 3: Kombinera data från två API:er
// Beskrivning:
// Använd API:et på https://jsonplaceholder.typicode.com/posts/1. Hämta information om ett inlägg och använd userId-fältet i svaret för att hämta information om användaren som skapade inlägget från https://jsonplaceholder.typicode.com/users/:userId. Logga både inläggets titel och användarens namn.
// Uppgift:
// 1. Hämta inlägg med id 1 från API:et.
// 2. Använd userId från inlägget för att hämta användaren som skapade det.
// 3. Logga titeln på inlägget och användarens namn i konsolen.


// Nivå 4: Skapa och visa kommentarer
// Beskrivning:
// Hämta inlägg med id 1 från https://jsonplaceholder.typicode.com/posts/1. Lägg sedan till en ny kommentar till inlägget via POST-metoden på https://jsonplaceholder.typicode.com/comments. Kommentaren ska innehålla name, email och body. Efter att kommentaren har skapats, hämta alla kommentarer för inlägget från https://jsonplaceholder.typicode.com/comments?postId=1 och logga dem.
// Uppgift:
// 1. Hämta ett inlägg med id 1.
// 2. Skapa en ny kommentar med POST-metoden (ange name, email och body).
// 3. Hämta alla kommentarer för inlägget och logga dem.


