var data;

// Decorator function to handle errors

function errorHandlerDecorator(fn) {
    return function (...args) {
        try {
            console.log('Trying function ' + fn?.name);
            fn(...args);
        } catch (error) {
            console.log(error);
        }
    };
}

function parse(str) {
    const obj = JSON.parse(str);
    console.log(obj);
    return obj;
}

// Function to get details from local storage

function getUser() {
    data.user = localStorage.getItem('user');
}

const parseFn = errorHandlerDecorator(parse);
const getUserFn = errorHandlerDecorator(getUser);
export { parseFn, getUserFn };

function logClassMethod(obj, fn) {
    return function () {
        console.log('Execution of ' + fn.name);
        console.time('fn');
        const val = fn.call(obj);
        console.timeEnd('fn');
        return val;
    };
}

// class declaration
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getUser() {
        return `[${this.name}] [${this.age}]`;
    }
}

export { User, logClassMethod };

// Advance decorator

function methodLogger(target, name, descriptor) {
    console.log(`[Class=${target.constructor.name}] [Method=${name}]`);
    let fn = descriptor.value;
    descriptor.value = () => {
        console.log(`${name} function started`);
        return fn();
    };
    return descriptor;
}

// class Human {
//     constructor(name) {
//         this.name = name;
//     }
//     // Decorated class method
//     @methodLogger
//     save(name) {
//         localStorage.setItem('name', name);
//         return 'Successful';
//     }
// }
// export { methodLogger, Human };
