import { Mapper } from './mapper';
export let StaffMapper = {
    id : new Mapper ({ type:'number',display:'Id', visible:false }),
    imageLocation : new Mapper ({type:'image',display:'Image', visible:true}),
    fullName : new Mapper ({type:'text',display:'FullName', visible:true}),
    email :new Mapper ({type:'text',display:'Email', visible:true}),   
    phonenumber :new Mapper ({type:'text',display:'Phone number', visible:true}),   
    jobTitleId :new Mapper ( {type:'select',display:'Job title', visible:true}),
    active :new Mapper ( {type:'checkbox',display:'Active', visible:true})
}