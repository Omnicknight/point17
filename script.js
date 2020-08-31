// const num = new Number();

// console.log(num);

// const obj = {
//     __list: 'anything',
// };

// Object.defineProperty(obj, 'list', {
//     get: function () {
//         return [];
//     },
//     set: function () {
//         console.log('Hello world');
//     },
// });

// console.log(obj.list, obj);

// obj.list = 5;

// Object.prototype.someNewMethod = function () {
//     console.log(this);
// };

// const obj = {
//     a: 2,
// };

// console.log(obj);

// function Employee() {
//     this.salary = 1000;
// }

// Employee.prototype.method = function () {
//     console.log(this.salary);
// }

// const e = new Employee();

// console.log(e);

// e.method();

function Employee(salary) {
    this.level = 1,
    this.salary = salary;
}

Employee.prototype.upgrade = function () {
    this.salary = this.salary + this.salary * (this.level++ / 10);
};

function Manager() {
    Employee.call(this, 500);
}

function Developer() {
    Employee.call(this, 2000);
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.constructor = Manager;

Developer.prototype = Object.create(Employee.prototype);

Developer.prototype.constructor = Developer;



const e = new Manager();

const r = new Developer();

e.upgrade();
e.upgrade();
e.upgrade();
e.upgrade();
e.upgrade();
e.upgrade();

r.upgrade();

console.log(e, r);