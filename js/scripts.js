var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
dinosaur = 'triceratops';

console.log(text);
console.log(dinosaur);

dinosaur = dinosaur.toUpperCase();
console.log(dinosaur);

text = text.replace('Velociraptor', dinosaur);
console.log(text);

text = text.substr(0, text.length/2);
console.log(text);