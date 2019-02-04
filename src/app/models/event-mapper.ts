import { Mapper } from './mapper';

export let EventMapper = {
    id : new Mapper ({ type:'number',display:'Id', visible:false }),
    imageLocation : new Mapper ({type:'image',display:'Image', visible:true}),
    heading :new Mapper ({type:'text',display:'Heading', visible:true}),   
    message :new Mapper ({type:'textarea',display:'Message', visible:true}),
    from :new Mapper ( {type:'date',display:'From Date', visible:true}),
    to : new Mapper ({type:'date',display:'To Date', visible:true}),    
    dateCreated : new Mapper ({type:'date',display:'Date Uploaded', visible:true}),   
    active :new Mapper ( {type:'checkbox',display:'Active', visible:true})
}