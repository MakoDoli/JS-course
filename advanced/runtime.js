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
