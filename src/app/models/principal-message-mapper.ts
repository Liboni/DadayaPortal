import { Mapper } from './mapper';
export let PrincipalMessageMapper = {
    id : new Mapper ({ type:'number',display:'Id', visible:false }),    
    message :new Mapper ({type:'textarea',display:'Message', visible:true, regex:"[A-Za-z]"}),   
    dateCreated : new Mapper ({type:'date',display:'Date Uploaded', visible:true}),   
    active :new Mapper ( {type:'checkbox',display:'Active', visible:true})
}