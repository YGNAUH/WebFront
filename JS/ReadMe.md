# This is JavaScript notes
### Day1:
* Remove First and Last Element
* Add First and last Element
* creating array [[],[]];
* function variables without var are defined global, this causes error when running function again;
* function FcnName(){}
* equal == and strict equal ===
* typeof
* notequal != and strict not equal !==
* lables:>=, >, <, <=
* if(){} ... (no need to write else)
* &&
* || or operator
* if(){} else if(){} else{}
* swich(value){ <br>
  case "===": ; break;}
* switch(){<br>
  case 1:<br>
  case 2:<br>
  case 3:<br>
    statement;<br>
    break;}  
* keywork undefined
* the program exists after return
* the swtich function could accept arrays
* the var contains different features <br>
var var = { <br>
  xx:xx,xx:xx,xx:xx };
### Day2:
* object.feature; object[feature]
* delete objecct.feature ; directly write a new feature and it will add
* To convert a switch function, object[feature] could be used as var."val" is not acceptable
* dot could not accept space
* []is used to search the string feature of the object, dot notation. is used to set property.
* empty space is not equal to null
* while(){}
* donot define variable in a loop unless it needs to refresh in every loop;
* array arr[i][j]
* do{}while()
* Recursion: instead of using loop, try to use fcn (n-1) fcn;
* hasOwnProperty();
* Math.random(); [0,1)
* Math.floor() returns to integer
* parseInt(string,index) to give root of string.
* let: which is not global
* const: which is not changable, only change is ok by setting obj[i] = ...;
* Object.freeze(obj) which unables mutation
* function = () =>
* new Date()
* concat() merge two arrays

### Day3:
* spread operator [...arr]
* deconstructing const{prop1:str1,prop2:str2} = obj;
* arrayname.slice(start,end);

### Day 4:
* array: push
* concise object writing: const obj(pr1,pr2,pr3) =>{return {prop1,prop2,prop3};}
* concise fcn: FcnName(){}
* keyword new: instantiate an object
* syntax class to replace constructor function: <br>
constructor fcn: var obj = function(target){this.target = target;} <br>
var newobj = new obj("insertobj")<br>
class syntax:<br>
class obj{<br>
  constructor(input){<br>
    this.prop = input; <br>
  } } <br>
  const newobj = new obj("insertobj");
* keyword this: (input) this.prop = input; set property
* keyword get & set <br>
  get fcn(){ <br>
    return this.prop <br>
  }<br>
  set fcn(updateprop){<br>
    this.prop = updateprop<br>
  }<br>
  obj.fcn will call getter and setter
* share cide among JS files: <script type = "module" src = "filename.js"></script>
* export{a,b}
* import{a,b} from './fn.js'; ./means te current folder
* import * as name from "./fn.js";
* import a from ".js"; notice: a is not in {} and it means import default function and a is the name defined here
