var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
animal = animal.toUpperCase();
var mottoCharsAfter = text.replace('Papugi', 'ZIELONE SŁONIE');
var partOfMottoCharsAfter = mottoCharsAfter.slice(0,mottoCharsAfter.length/2);
console.log (partOfMottoCharsAfter);





