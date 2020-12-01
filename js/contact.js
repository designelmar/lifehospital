


function GEEKFORGEEKS() { 
    var firstname = document.forms["RegForm"]["firstname"]; 
    var lastname = document.forms["RegForm"]["lastname"]; 
    var email = document.forms["RegForm"]["Email"]; 
    var subject = document.forms["RegForm"]["text"]; 
    var message = document.forms["RegForm"]["message"]; 


    if (firstname.value == "") { 
        window.alert("Adınızı yazın!"); 
        firstname.focus();
        return false; 
    } 



    if (lastname.value == "") { 
        window.alert("Soyadınızı yazın!"); 
        lastname.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        window.alert( "E-mail ünvanınızı yazın!"); 
        email.focus(); 
        return false; 
    } 

    if (subject.value == "") { 
        window.alert( "Mövzu yazın!"); 
        subject.focus(); 
        return false; 
    } 

    if (message.value == "") { 
        window.alert("Mesaj yazın!"); 
        message.focus(); 
        return false; 
    } 


    return true; 
} 








/*

function GEEKFORGEEKS() { 
    var firstname = document.forms["RegForm"]["firstname"]; 
    var lastname = document.forms["RegForm"]["lastname"]; 
    var email = document.forms["RegForm"]["Email"]; 
    var subject = document.forms["RegForm"]["text"]; 
    var message = document.forms["RegForm"]["message"]; 

    

    if (firstname.value == "") { 
        window.alert("First name."); 
        firstname.focus(); 
        return false; 
    } 

    if (lastname.value == "") { 
        window.alert("Last Name"); 
        lastname.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        window.alert( 
          "Please address."); 
        email.focus(); 
        return false; 
    } 

    if (subject.value == "") { 
        window.alert( 
          "Please subject"); 
        subject.focus(); 
        return false; 
    } 

    if (message.value == "") { 
        window.alert("Plaese Text"); 
        message.focus(); 
        return false; 
    } 


    return true; 
} 
} */