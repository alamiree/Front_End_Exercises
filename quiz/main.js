/* import Settings from './settings.js'

new Settings(); */


/* import {a, b, c} from './mod-two.js';
import calc from './mod-one.js';

console.log(calc(a, b, c)); */

class User{
    constructor(id, username){
        this.i = id;
        this.u = username;
    }
    sayHello(){
        return "Hello Function...";
    }
}

let userOne = new User(1, "Hass");

console.log(userOne.i)
console.log(userOne.u);
console.log(userOne.sayHello());

console.log(User.prototype)