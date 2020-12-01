function GEEKFORGEEKS() { 
    var name = document.forms["RegForm"]["firstname"]; 
    var name = document.forms["RegForm"]["lastname"]; 
    var email = document.forms["RegForm"]["Email"]; 
    var name = document.forms["RegForm"]["text"]; 
    var name = document.forms["RegForm"]["message"]; 

    

    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

    if (name.value == "") { 
        window.alert("Please enter your address."); 
        name.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        window.alert( 
          "Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (name.value == "") { 
        window.alert( 
          "Please enter your telephone number."); 
        name.focus(); 
        return false; 
    } 

    if (name.value == "") { 
        window.alert("Please enter your password"); 
        name.focus(); 
        return false; 
    } 


    return true; 
} 