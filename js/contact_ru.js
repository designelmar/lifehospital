


function GEEKFORGEEKS() { 
    var firstname = document.forms["RegForm"]["firstname"]; 
    var lastname = document.forms["RegForm"]["lastname"]; 
    var email = document.forms["RegForm"]["Email"]; 
    var subject = document.forms["RegForm"]["text"]; 
    var message = document.forms["RegForm"]["message"]; 


    if (firstname.value == "") { 
        window.alert("Напиши свое имя!"); 
        firstname.focus();
        return false; 
    } 



    if (lastname.value == "") { 
        window.alert("Напишите вашу фамилию!"); 
        lastname.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        window.alert( "Введите лектронной почты!"); 
        email.focus(); 
        return false; 
    } 

    if (subject.value == "") { 
        window.alert( "Напишите тему!"); 
        subject.focus(); 
        return false; 
    } 

    if (message.value == "") { 
        window.alert("Напишите сообщение!"); 
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