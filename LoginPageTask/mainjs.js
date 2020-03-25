function validateform(){  
var password = document.getElementsByName('pass').value;
var confpassword = document.getElementsByName('confpass').value;
    
    
if (password.length<6 && confpassword.length<6){  
  alert("password length should be at-least 6");  
  return false;  
}else if(password==null){  
    alert("enter password ");
        if(password==confpassword)
            
        {
            return true;
        }  
  }  
} 
