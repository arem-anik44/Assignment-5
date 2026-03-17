document.getElementById("signin-btn").addEventListener("click",()=>{
    const username = document.getElementById("username-input").value;
    
    const password = document.getElementById("pass-input").value;
    

    if(username === 'admin' & password==='password'){
        window.location.assign("./home.html");
    }
    else{
        if(username !== 'admin' & password !=='password'){
            alert("Invalid username and password");
        }
        else if(username!== 'admin'){
            alert("Invalid User");
        }
        else{
            alert("Invalid password");
        }
    }
})