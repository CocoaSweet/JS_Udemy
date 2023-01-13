const userPoints = 999;

if (userPoints >= 1000){
    console.log("Usuário VIP");
} else {
    console.log("Usuário normal");
}

const userLevel = userPoints >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(userLevel);

const userColor = null;
const patternColor = userColor || 'Preta';

console.log(patternColor);
