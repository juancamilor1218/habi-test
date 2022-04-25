import DataStep from "../interfaces/IDataStep";

export default class ConcatFieldArrays{
    keys:string[];
    values:any[];
    constructor(keys:string[],values:any[]){
        this.keys = keys;
        this.values = values;
    }

    getArray():DataStep[]{
        let dataSteps:DataStep[] = []
        for(let i=0;i<this.keys.length;i++){
            let data:DataStep = { title:this.keys[i] , value:this.values[i]}
            dataSteps.push(data);
        }
        return dataSteps;
    }
}