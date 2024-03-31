const farmAnimals = 'cow horse sheep pig chicken';
const animalSounds = {
    cow: 'moo',
    horse: 'neigh',
    sheep: 'baa',
    pig: 'oink',
    chicken: 'cluck'
}
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// Assertions
console.log(moo);    
console.log(neigh);  
console.log(baa);    
console.log(oink);   
console.log(cluck);  


const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// Assertions
console.log(bessie);  // Output: cow
console.log(dolly);   // Output: sheep
console.log(babe);    // Output: pig
console.log(little);  // Output: chicken

const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Assertions
console.log(blackAndWhite); // Output: cow
console.log(black);          // Output: sheep
console.log(pink);           // Output: pig

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Destructuring to declare variables for each color
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Assertions for traditional rainbow color names
console.log(red);   
console.log(orange);  
console.log(yellow); 
console.log(green);  
console.log(blue);    
console.log(indigo); 
console.log(violet);  

// Destructuring using initials for six rainbow colors
const [r, o, y, g, b, , v] = rainbowColors;

// Assertions for rainbow color initials
console.log(r);  
console.log(o);  
console.log(y);  
console.log(g);  
console.log(b);  
console.log(v);  

// Destructuring to declare Indigo using indg
const [, , , , , indg] = rainbowColors;

// Assertions for Indigo using indg
console.log(indg);  // Output: indigo

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};


// Test case 1
const { muppetName, color, song, job, partner } = muppet;

// Assertions for test case 1
console.log(muppetName); // Output: Miss Piggy
console.log(color);      // Output: pink
console.log(song);       // Output: Never Before, Never Again
console.log(job);        // Output: Cast member of The Muppet Show
console.log(partner);    // Output: Kermit

// Test case 2
const { songs: { song2, song4 }, nested: { job: nestedJob, partner: nestedPartner } } = muppet;

// Assertions for test case 2
console.log(song2);        // Output: Moving Right Along
console.log(song4);        // Output: I Hope That Something Better Comes Along
console.log(nestedJob);    // Output: Host of The Muppet Show
console.log(nestedPartner);// Output: Miss Piggy

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner