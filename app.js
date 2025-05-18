function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "utkarsh" && password === "12345678") {
        window.location.href = "https://utkarsh2006.pyscriptapps.com/user/latest/";
    } 
    
    else if (username === "bharti" && password === "21122006") {
        window.location.href = "https://utkarsh2006.pyscriptapps.com/bank-xyz/latest/";
      } 
    else if (username === "tanuja" && password === "11032007") {
        window.location.href = "https://utkarsh2006.pyscriptapps.com/tanu/latest/";
    } 
    else if (username === "Swapnali" && password === "18032006") {
        window.location.href = "https://utkarsh2006.pyscriptapps.com/old-dream/latest/";
      } 
    else {
      document.getElementById("error").textContent = "Invalid login credentials!";
    }
  }