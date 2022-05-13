  function validation()
  {
    let Name = document.getElementById("Name").value;
    let Phone = document.getElementById("Phone").value;
    let Email = document.getElementById("Email").value;
    let Msg = document.getElementById("Msg").value;
    let regex_name = /^[a-zA-Z ]{2,30}$/;
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let emailid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regex_name.test(Name))
    {
      alert("inavlid name");
    }
    else if(!phoneno.test(Phone))
    {
      alert("Inavlid Phone number")
    }
    else if(!emailid.test(Email))
    {
      alert("Invalid Email");
    }
    else if(Msg.length == 0)
    {
      window.alert("Please type message");
    }
    else{
      alert("Submitted Successfully")
    }

  } 
    
