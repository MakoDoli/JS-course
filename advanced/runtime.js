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
// JS engine is not a mcahine
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
