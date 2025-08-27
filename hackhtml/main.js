/*
====================================================
Random Adventure Game Simulation (Commented Out)
====================================================

// List of characters in our adventure game
const characters = [
    { name: "Luna", health: 100, attack: 15, defense: 5 },
    { name: "Orion", health: 120, attack: 10, defense: 10 },
    { name: "Zara", health: 80, attack: 20, defense: 3 }
];

// List of possible monsters
const monsters = [
    { name: "Goblin", health: 50, attack: 8, defense: 2 },
    { name: "Troll", health: 80, attack: 12, defense: 5 },
    { name: "Dragon", health: 150, attack: 20, defense: 10 }
];

// Utility function to generate a random number within a range
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to simulate an attack
function attack(attacker, defender) {
    const damage = Math.max(attacker.attack - defender.defense, 0);
    defender.health -= damage;
    console.log(`${attacker.name} attacks ${defender.name} for ${damage} damage!`);
}

// Main game loop simulation
function startGame() {
    let player = characters[randomInt(0, characters.length - 1)];
    let monster = monsters[randomInt(0, monsters.length - 1)];
    
    console.log(`Player ${player.name} encounters a ${monster.name}!`);
    
    while(player.health > 0 && monster.health > 0) {
        attack(player, monster);
        if(monster.health <= 0) {
            console.log(`${monster.name} has been defeated!`);
            break;
        }
        attack(monster, player);
        if(player.health <= 0) {
            console.log(`${player.name} has fallen... Game Over.`);
            break;
        }
    }
}

// Start the game simulation
startGame();

*/
