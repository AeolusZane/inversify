import { fluentProvide } from "inversify-binding-decorators";

const providerThrowable = (identifier:symbol,name:string)=>{
    return fluentProvide(identifier).whenTargetNamed(name).done();
}
export {
    providerThrowable
}