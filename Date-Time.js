const today = new Date();
const date = new Date('2062-11-19');
console.log(today);
console.log(date);

//console.log(today.getDay());
console.log(date.getMonth());

const specificDate = new Date(2091,0,2);
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString());

//unix epoc

