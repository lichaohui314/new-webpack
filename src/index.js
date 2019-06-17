// require('./a.css');
// import { a } from "./a";
// // decorators 装饰器  stage2
// @log
// class Aniaml {
//     constructor() {
//         this.a = "动物"
//     }
// }
// function log(Aniaml) {

// }
// let akai = new Aniaml();
// console.log(akai.a);


require('./a.css');
import { a } from './a'
// decorators 装饰器 stage2
@log
class A { }
function log(target) {
    return function (target) {
        console.log(target)
    }
}