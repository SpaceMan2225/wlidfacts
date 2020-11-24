function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

var a = document.getElementById("email")
var b = document.getElementById("button")
b.addEventListener('click',()=>{
    ValidateEmail(a)
    if (ValidateEmail(a) == false) {
      
    }
})
       