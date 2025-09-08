const form = document.querySelector('#form')
const username=document.querySelector('#username');
const Email=document.querySelector('#Email');
const Password=document.querySelector('#Password');
const CPassword=document.querySelector('#CPassword');

form.addEventListener('Submit',(e)=>
{
    e.preventDefault();

    if(!ValidateInputs()){
        e.preventDefault();

    };
     

})
function ValidateInputs(){
    const usernameval=username.value.trim()
    const emailVal=Email.Value.trim();
    const Passwordval=Password.Value.trim();
    const CPasswordval=CPassword.Value.trim();
    let success = true

    if(usernameval===''){
        success = false;
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }

    if(emailVal===''){
        Success=false;
        seterror(email,'email is requird')

    }
    else if(!ValidateEmail(emailVal)){
        setsuccess(email,'pleae enter a valid email')
    }
    else{
        setsuccess(email)
    }

    if(passwordval===''){
        success = false;
         SetError(Password,'Password is required')
    }
    else if(Passwordval.length<8){
        seterror(Password,'password must be atleast 8 characters')
    }
    else{
        setsuccess(Password)
    }


    if(cpasswordval === ''){
        seterror(cpassword,'confirm password is required')

    }
    else if(cpasswordval === Password){
        success=false;
        seterror(cppassword,'password does not match')
    }
    else{
         setsuccess(Password)
         
    }
    return success ;

    

    

    

}
function seterror(element,message){
    const inputgroup=element.ParentElment
    const errorElement=inputgroup.querySelector('error')

    errorElement .innerText = message;
    inputgroup.classlist.add('error')
    inputgroup.classlist.remove('success');




}
function setsuccess(element,message){
    const inputgroup=element.ParentElment
    const errorElement=inputgroup.querySelector('.error')

    errorElement .innerText = '';
    inputgroup.classlist.add('error');
    inputgroup.classlist.remove('success');


}
const ValidateEmail=(email) => {
    return String(email)
    .toLowerCase()
    .match( /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
    ;

    

}