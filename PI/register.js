function Verify() {
    var userRef = "deeksitha@quinnox.com";
    var passRef = "masterchef";
    
    var user =  document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef || pass == passRef) {
    alert("Succesful Login")
    } else {
    alert("It's seem you are not a trusted user")
    }
  };