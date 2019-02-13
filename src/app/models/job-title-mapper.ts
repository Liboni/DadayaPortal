import { Mapper } from './mapper';

export let JobTitleMapper = {
    id : new Mapper ({ type:'number',display:'Id', visible:false }),
    name : new Mapper ({type:'text',display:'Name', visible:true,required:true, regex:"^.{3,}$"}),
    level :new Mapper ({type:'number',display:'Level', visible:true, required:true,regex:"^[1-9][0-9]*$"}),   
    active :new Mapper ( {type:'checkbox',display:'Active', visible:true})
}