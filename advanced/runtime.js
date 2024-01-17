function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

const family = marry({ name: "John" }, { name: "Ann" });
console.log(family);
const arr = Array.from({ length: 100000 }, (_, index) => index);
//console.log(arr);
// current MEMORY USAGE check
console.log(performance.memory);

//********************************* */
/*                                */
//          JS ENGINE
//
// JS engine is not a machine
// firefox -spidermonkey - evolved from very first js engine created by js creator brendan eich
//
//chrome -v8
//microsoft edge - chakra
// safari - javascriptCore
//
// high-level code (written by developer) -->> js engine  -->> low-level code (machine level)

// abstract syntax tree for
const jsEngine = "v8";

/*{
    "type": "Program",
    "body": [
      {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "jsEngine"
            },
            "init": {
              "type": "Literal",
              "value": "v8",
              "raw": "'v8'"
            }
          }
        ],
        "kind": "const"
      }
    ],
    "sourceType": "module"
  } */

//********************************* */
//
//      PROXIES

const handler = {
  get(target, key) {
    return key in target ? target[key] : 37;
  },
};

const p = new Proxy({}, handler);

p.a = 1;
p.b = undefined;
console.log(p.a, p.b); // 1, undefiend
console.log("c" in p, p.c); // false 37

//      ****        //
//

let validator = {
  set(obj, prop, value) {
    if (prop === "age") {
      if (typeof value !== "number" || Number.isNaN(value) || value < 0) {
        console.log("Age must be a positive number");
        // throw new RangeError("Age must be a positive number");
      }
    }
    obj[prop] = value;
    // obj.prop = value
  },
};
let person = new Proxy({}, validator);
person.age = "young"; // "Age must be a positive number"
person.age = -5; // Age must be a positive number
person.age = 17;
console.log(person.age);

//     ************
//

const user = {
  age: 20,
  name: "bob",
};

const prx = new Proxy(user, {
  get(target, key) {
    if (key === "name") {
      return capitalize(target[key]);
    } else {
      return target[key];
    }
  },
});

function capitalize(str) {
  let capt = str.charAt(0).toUpperCase() + str.slice(1);
  return capt;
}
console.log(prx.name);
//     *******     ///
//

const stable = {
  pi: 3.14,
};

const noTouchy = {
  set() {
    console.log("NoTouchy!");
    return true;
  },
};

const guard = new Proxy(stable, noTouchy);
guard.pi = 5; // NoTouchy!
guard.name = "pi"; // NoTouchy!
console.log(stable.pi); // 3.14
console.log(guard.pi); // 3.14
console.log(guard.name); // undefined
//   ********** //
//

const newHandler = {
  set(target, prop, value) {
    if (typeof value !== "string") {
      console.log(
        `Attempt to set ${prop} property with non-string value: ${value} `
      );
    } else {
      console.log(`Setting property ${prop} to ${value}`);
      target[prop] = value;
    }
  },
  get(target, key) {
    if (key in target) {
      console.log(`Requested ${key} property  equals to ${target[key]}`);
      return target[key];
    } else {
      console.log(`Such property doesnt exist on ${target}`);
    }
  },
};

const newPr = new Proxy({}, newHandler);

newPr.name = "John";
console.log(newPr.name);

// If we touch target's key/property by any means, proxy will react with handler

//
const allowedProperties = ["name", "age", "gender"];

const handler2 = {
  set(target, prop, value) {
    if (allowedProperties.includes(prop)) {
      console.log(`Setting value of ${prop} to ${value}`);
      target[prop] = value;
    } else {
      if (!allowedProperties.includes(prop)) {
        console.log(`Cannot change value of ${prop}`);
      }
    }
  },
  get(target, prop) {
    if (allowedProperties.includes(prop)) {
      console.log(` value of ${prop} is ${target[prop]}`);
      return target[prop];
    } else {
      if (!allowedProperties.includes(prop)) {
        console.log(`Cannot access value of ${prop}`);
        return false;
      }
    }
  },
};

const guardedObj = new Proxy({}, handler2);
//
const target = {
  name: "Hossein",
  age: 26,
};

const handler5 = {
  get(target, property) {
    console.log(`Getting property: ${property}`);
    return target[property];
  },
  set(target, property, value) {
    if (typeof value == "number") {
      console.log(`Setting property: ${property} = ${value}`);
      target[property] = value;
    } else {
      console.log(`${property} must be a number`);
      return false;
    }
  },
};
const proxy = new Proxy(target, handler5);
proxy.age = 30;
/* 1. Proxy is an object which wraps original "target' object and monitors, controls and redefines its properties or methods. We can use proxies to handle calls or access to target's properties
2. We create proxy with new keyword and Proxy constructor, passing two arguments - target object and handler object:
const handler ={
get (target, prop){
if (prop ===name){
return target[prop]
}else {
console.log(`this ${prop} is not available`)
return false
}
3. Traps are mainly setters or getters, which "trap" certain properties and control behavior over them.

4. by defining  'get' trap, we can customize how proxy responses when property is accessed. We can return property value or restrict access to property at all
5. 'set' traps control how properties are assigned. We can use validations or other functions before setting/asigning property */
