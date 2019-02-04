export class Mapper {
    constructor(data: Partial<Mapper>){
        Object.assign(this, data);
    }
    type:String;
    visible:Boolean;
    display:String;
    source:any;
    regex:String
}
