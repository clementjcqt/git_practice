// Set arrays wit adjectives, nouns and suffixes
let adjs = ["Grand", "Petit", "Funky", "Rapide", "Mystique", "Légendaire", "Brillant", "Étrange", "Marrant", "Rêveur"];
let nouns = ["Dragon", "Renard", "Tigre", "Étoile", "Ombre", "Pirate", "Mage", "Chevalier", "Phénix", "Vagabond"];
let suffixes = ["du Désert", "des Bois", "Volant", "Céleste", "de l'Ouest", "Nocturne", "du Chaos", "Rieur", "Flamboyant", "Silencieux"];

const getRandomName = () => {
    let adj = adjs[Math.floor(Math.random()*adjs.length)];
    let noun = nouns[Math.floor(Math.random()*nouns.length)];
    let suffix = suffixes[Math.floor(Math.random()*suffixes.length)]
    let randomName = adj + ' ' + noun + ' ' + suffix;
    return randomName;
}


//Test of the fucntion getRandomName
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());


