import { Mapper } from './mapper';
export let NoticeMapper = {
    id : new Mapper ({ type:'number',display:'Id', visible:false }),
    imageLocation : new Mapper ({type:'image',display:'Image', visible:true}),
    heading :new Mapper ({type:'text',display:'Heading', visible:true}),   
    message :new Mapper ({type:'textarea',display:'Message', visible:true}),  
    dateCreated : new Mapper ({type:'date',display:'Date Uploaded', visible:false}),   
    active :new Mapper ( {type:'checkbox',display:'Active', visible:true})
}