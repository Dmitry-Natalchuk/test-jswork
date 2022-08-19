//Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
 //В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

/* class Account {
    constructor({login ,email}) {
        this.login = login;
        this.email = email;
    }
     getInfo() {
        console.log(this.login,this.email)
     }
} */

/* Account.prototype.getInfo = function() {
console.log(this.login,this.email)
} */


/* 
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); */ // Login: Poly, Email: poly@mail.com


//Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

//Добавь методы класса:

//getItems() - возвращает массив текущих товаров
//addItem(item) - получает новый товар и добавляет его к текущим
//removeItem(item) - получет товар и, если он есть, удаляет его из текущих

/* class Storage {
    constructor(items){
        this.items = items
    }
    getItems(){
        return this.items
    }
    addItem(item){
        return this.items.push(item)
    }
    removeItem(item) {
        let index = this.items.indexOf(item);
        if (index > -1) {
        return this.items.splice(index, 1);
    
    }
}
}




const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); */ // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

/* Исправь ошибки которые будут в консоли, чтобы скрипт заработал. */
/* 
const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

   return this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory
 */
/* console.log(inventory.items); // ['Knife', 'Medkit'] */
const arr = [
    [23, 11, ['hello', 'world', 'Vasya']],
    'some str',
    [777, 'word', ['Привет', ['как сюда добраться'], ['John', [{ name: 'Vasya', age: 18 }, ['finish']]]]],
  ];
  /* [
    23,
    11,
    'hello',
    'world',
    'Vasya',
    'some str',
    777,
    'word',
    'Привет',
    'как сюда добраться',
    'John',
    { name: 'Vasya', age: 18 },
    'finish'
  ] */
/*  class Counter {
    constructor(selector, initialValue, step) {
      this.container = document.querySelector(selector);
      this.increment = this.container.querySelector('.increment');
      this.decrement = this.container.querySelector('.decrement');
      this.spanValue = this.container.querySelector('.value');
      this.value = initialValue;
      this.step = step;
  
      this.addListeners.call(this);
    }
  
    addListeners() {
      this.increment.addEventListener('click', this.handleIncrement);
      this.decrement.addEventListener('click', this.handleDecrement);
      this.spanValue.textContent = this.value;
    }
  
    handleIncrement = () => {
      this.value += this.step;
      this.spanValue.textContent = this.value;
    };
  
    handleDecrement = () => {
      this.value -= this.step;
      this.spanValue.textContent = this.value;
    };
  }
  
  new Counter('.counter', 50, 5);
  new Counter('.counter2', 100, 10);
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <ul class="list"></ul>
      <div class="counter">
        <button class="increment">+</button>
        <span class="value">0</span>
        <button class="decrement">-</button>
      </div>
      <div class="counter2">
        <button class="increment">+</button>
        <span class="value">0</span>
        <button class="decrement">-</button>
      </div>
      <script src="./index.js"></script>
      <script src="./funcTypes.js"></script>
    </body>
  </html>
   */



