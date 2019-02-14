import { Mapper } from './mapper';
export let StaffMapper = {
    id : new Mapper ({ type:'number',display:'Id', visible:false }),
    imageLocation : new Mapper ({type:'image',display:'Image', visible:true}),
    fullName : new Mapper ({type:'text',display:'FullName', visible:true, required:true}),
    email :new Mapper ({type:'text',display:'Email', visible:true, required:true}),   
    phonenumber :new Mapper ({type:'text',display:'Phone number', visible:true, required:true}),   
    jobTitleId :new Mapper ( {type:'select',display:'Job title', visible:true, required:true}),
    active :new Mapper ( {type:'checkbox',display:'Active', visible:true})
}