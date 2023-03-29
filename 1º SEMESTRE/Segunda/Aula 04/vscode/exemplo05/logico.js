//&& - E
console.log("Operador E")
console.log("V E V = " + (true && true))
console.log("V E F = " + (true && false))
console.log("F E V = " + (false && true))
console.log("F E F = " + (false && false))

/*
Regra do E - somente terei resposta verdadeira se as duas proposições forem verdadeiros
*/

// || - OU
console.log("Operador OU")
console.log("V OU V = " + (true || true))
console.log("V OU F = " + (true || false))
console.log("F OU V = " + (false || true))
console.log("F OU F = " + (false || false))

/*
Regra do OU - somente terei resposta falsa se as duas preposições forem falsos
*/

// ! - not
console.log("Operador NOT")
console.log("! V = " + (true))
console.log("! F = " + (false))