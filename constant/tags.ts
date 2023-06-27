const TAGS = {
    DockerService: Symbol.for('DockerService'),
}
export default TAGS

type ControllerHelloParamsType = {
    name:string;
    age:number;
}


interface UtilsInterface {
    getType(param:ControllerHelloParamsType):'需要补充的类型';
    getType(param:ControllerHelloParamsType):'需要补充的类型';
    getType(param:ControllerHelloParamsType):'需要补充的类型';
    getType(param:ControllerHelloParamsType):'需要补充的类型';
    getType(param:ControllerHelloParamsType):'需要补充的类型';
    getType(param:ControllerHelloParamsType):'需要补充的类型';
    getType(param:ControllerHelloParamsType):'需要补充的类型';
    getType(param:ControllerHelloParamsType):'需要补充的类型';
    getType(param:ControllerHelloParamsType):'需要补充的类型';
    getType(param:ControllerHelloParamsType):'需要补充的类型';
}


class Util2 implements UtilsInterface{

    getType(param:ControllerHelloParamsType):'需要补充的类型'{
        return '需要补充的类型';
    }
}

class Util implements UtilsInterface{
    getType(param:string):'string';
    getType(param:number):'number';
    getType(param:ControllerHelloParamsType):'name和age';
    getType(param:any):'需要补充的类型';

    getType(param:unknown){
        if(typeof param === 'string'){
            return 'string';
        }else if(typeof param === 'number'){
            return 'number';
        }else if(
            Object.prototype.hasOwnProperty.call(param,'name')&&
            Object.prototype.hasOwnProperty.call(param,'age')
        ) {
            return 'name和age';
        }
        else{
            return '需要补充的类型';
        }
    }
}

const util = new Util();


const typeh = util.getType('hello');

console.log(typeh);

function getType(p:string):'string';
function getType(p:number):'number';
function getType(p:any):unknown;

function getType(p:string|number){
    return typeof p;
}

getType({})