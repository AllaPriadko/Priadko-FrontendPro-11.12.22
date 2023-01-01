const peoples = [
  {
    name: 'Alina',
    money: 2700.32,
    cities: 'Lviv, Kyiv, Ternopil',
    children: [
      {
        name: 'Oliver',
        age: 6,
      }
    ]
  },
  {
    name: 'Andrii',
    money: 9301.32,
    cities: 'Paris, Madrid, Rivne',
    children: []
  },
  {
    name: 'George',
    money: '35000',
    cities: 'Stambul',
    children: [
      {
        name: 'Olha',
        age: 8,
      },
      {
        name: 'Olena',
        age: 2,
      }
    ]
  }
];

function changeElements(array) {
    for (let i = 0; i < array.length; i++){
        const peopleName = array[i];
        peopleName.name = peopleName.name.toUpperCase();
        peopleName.cities = peopleName.cities.split(',');

        let moneyNumber = peopleName.money;
        
        if (typeof moneyNumber === "string") {
            moneyNumber = Number(moneyNumber);
            
             if (isNaN(moneyNumber)) {
                console.log('Is NaN');
            }
        }
        moneyNumber = Math.round(moneyNumber);
        // console.log(moneyNumber);
        // console.log(peopleName);

        for (let j = 0; j < peopleName.children.length; j++){
            const children = peopleName.children[j];
            children.name = children.name.toUpperCase();
            // console.log(children.name);
        }
        peopleName.children.push({ name: 'Stepan' });

        let randomAge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
        peopleName.children.push({age: Math.floor(Math.random() * randomAge.length)});
        
        console.log(peopleName);
    }

}
changeElements(peoples);