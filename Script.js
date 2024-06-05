

document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('contactForm');
    form.addEventListener('submit',function (e){
        e.preventDefault();
        if(validateForm())
            {
                alert('Form Submitted Succesfully');
                form.reset();

            }
            else{
                alert('Please fill all Forms')
            }
    });
    function validateForm()
    {
        const fields=document.querySelectorAll('input[required], textarea');
        for(let i=0;i<fields.length;i++)
            {
                if(!fields[i].value.trim())
                    {
                        return false;
                    }
                   
            }
            return true;
    }
})
document.addEventListener('DOMContentLoaded',function(radiobutton){
    let radiobuttons=document.querySelectorAll('input, textarea');
    radiobuttons.forEach(function(radiobutton){
        radiobutton.addEventListener('change',function(){
            radiobuttons.forEach(function(rb)
        {
            if(rb!==radiobutton)
                {
                    rb.checked=false;
                }
        })
        })
    })

})