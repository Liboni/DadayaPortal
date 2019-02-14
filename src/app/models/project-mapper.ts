import { Mapper } from './mapper';
export let ProjectMapper = {
    id : new Mapper ({ type:'number',display:'Id', visible:false }),
    imageLocation : new Mapper ({type:'image',display:'Image', visible:true}),
    heading :new Mapper ({type:'text',display:'Heading', visible:true, required:true}),   
    message :new Mapper ({type:'textarea',display:'Message', visible:true, required:true}),   
    dateCreated : new Mapper ({type:'date',display:'Date Uploaded', visible:true, required:true}),   
    active :new Mapper ( {type:'checkbox',display:'Active', visible:true})
}