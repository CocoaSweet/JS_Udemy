/*
 && - false && true - false (o próprio valor)
 || - true || false - true (o próprio valor)

 FALSY

 *false
 0
 '' / "" / ``
 null / undefined
NaN
*/
console.log('Ligia' && 'gui');
console.log('Ligia' && undefined);

function falaOi () {
    return 'Oi';
}

let vaiExecutar;
let vaiExecutar2 = 'sim';

console.log(vaiExecutar && falaOi());
console.log(vaiExecutar2 && falaOi());

console.log(0 || null || '' || true || "abc");

const corUser = null;
const corUser2 = 'rosa';
const corPadrão = corUser || 'branco';
const corPadrão2 = corUser2 || 'branco';

console.log(corPadrão);
console.log(corPadrão2);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
console.log(a || b || d || e);
