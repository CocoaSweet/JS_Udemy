let texto = "esse \"texto\"";
let txt2 = "esse \\texto";

console.log(texto[2]);
console.log(txt2.charAt(9));

console.log(texto.concat(' em um lindo dia'));
console.log(texto + ' em um lindo dia');
console.log(`${texto} em um lindo dia`);

console.log(texto.indexOf('texto'));
console.log(txt2.indexOf('e', 2));

console.log(txt2.lastIndexOf('x', 8));

console.log(texto.search(/t/));

console.log(txt2.replace('esse', 'Outro'));
            //0123456789
let ditado = 'O rato roeu a roupa do rei de roma.';

console.log(ditado.slice(30, 32));
console.log(ditado.slice(-3));
console.log(ditado.length);
console.log(ditado.replace(/r/g, '@'));
console.log(ditado.split('r', 2));

console.log(ditado.toUpperCase());
console.log(ditado.toLowerCase());