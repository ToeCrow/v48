// Övning 1: Enkel Asynkron Funktion med Callback (Lätt)

// Uppgift:
// Skapa en funktion delayLog som tar en sträng och en tid i millisekunder som argument.
// Funktionen ska använda setTimeout för att logga strängen efter den angivna tiden.
// Använd en callback för att meddela när loggningen är klar.

function delayLog(str, time) {
 setTimeout(() => {
  console.log(str);
 }, time);
}

delayLog("Hello thuesday, FJSX24 and Syncron vs. asyncron code", 4000);

// Mål:
// Förstå hur man använder callbacks med setTimeout.
// Praktisera enkel asynkronitet.
// ------------------------------------------
// Övning 2: Kedja Asynkrona Operationer (Medel)



// Uppgift:
// Använd fetch() för att hämta en användare från https://jsonplaceholder.typicode.com/users/1.
// När användaren har hämtats, använd deras id för att hämta deras inlägg från https://jsonplaceholder.typicode.com/posts?userId=1.
// Använd callbacks inom .then()-kedjan för att hantera resultaten och logga dem i konsolen.
const url = 'https://jsonplaceholder.typicode.com/';

async function fetchUserAndPosts() {
 try {
  const userResponse = await fetch(`${url}users/1`);
   if (!userResponse.ok) {
     throw new Error('Error fetching user');
   }
   const user = await userResponse.json();

   console.log("user: ", user);
   const userId = user.id;

   const postsResponse = await fetch(`${url}posts?userId=${userId}`);
   if (!postsResponse.ok) {
     throw new Error('Error fetching posts');
   }
   const posts = await postsResponse.json();

   console.log(`User: ${user.name}`);
   console.log(`Posts: ${posts.length}`);
 } catch (error) {
   console.error('Something went wrong:', error.message);
 }
}

fetchUserAndPosts();

// Tips:
// Använd separata funktioner för att hämta användaren och inläggen.
// Hantera fel med .catch() och logga lämpliga felmeddelanden.

// ------------------------------------------
// Övning 3: Hantera Fel i Asynkron Kod med fetch() (Svår)

// Uppgift:
// Modifiera övning 2 för att inkludera robust felhantering.
// Simulera ett fel genom att använda en felaktig URL eller genom att kasta ett fel om svarskoden inte är 200.
// Se till att felmeddelanden loggas korrekt och att programmet inte kraschar.

// ------------------------------------------
// Övning 4: Bygga en Enkel Applikation med fetch() (Extra Svår)

// Uppgift:
// Bygg en enkel webbapplikation som:
// Har en knapp "Hämta användare".
// När knappen klickas, hämtar den en slumpmässig användare från https://jsonplaceholder.typicode.com/users.
// Visar användarens namn och e-post på sidan.
// Använd fetch() och hantera asynkroniteten med .then() och callbacks inom dem.

// Mål:
// Applicera kunskaperna i en faktisk applikation.
// Förstå hur asynkronitet påverkar DOM-manipulation.
// ------------------------------------------
