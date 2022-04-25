import DataStep from "./IDataStep";

export default interface IStep{
    currentStep:number;
    nameStep:string;
    data:DataStep[];    
    lastStep:boolean;
    url:string;
    status:boolean;
}

