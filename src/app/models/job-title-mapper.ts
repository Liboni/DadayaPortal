import { Mapper } from './mapper';

export let JobTitleMapper = {
    id : new Mapper ({ type:'number',display:'Id', visible:false }),
    name : new Mapper ({type:'text',display:'Name', visible:true}),
    level :new Mapper ({type:'number',display:'Level', visible:true}),   
    active :new Mapper ( {type:'checkbox',display:'Active', visible:true})
}