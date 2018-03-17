function validate(){//validate function started
  if( document.reg_form.sose.value == ""){// input of sose from registration form is checked if it is null
    alert("Please provide your Social security Number!");//alerts the mssg if value is null
    document.reg_form.sose.focus();
    return false;
  }
  
}
