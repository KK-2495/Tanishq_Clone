// *****Register**//
function register(event) {
  event.preventDefault();
  var phNum = document.getElementById("userPhNum").value;
  // console.log(phNum);
  var name = document.getElementById("userName").value;
  var password = document.getElementById("userPassword").value;
  var confirmPassword = document.getElementById("userConfirmPassword").value;
  var tanishqProduct = [];

  if (phNum && name && password && confirmPassword) {
    if (password.length >= 8 && confirmPassword.length >= 8) {
      if (password == confirmPassword) {
        var userInfo = {
          tanishqUserPhNum: phNum,
          tanishqUserName: name,
          tanishqUserPass: password,
          tanishqConfirmPass: confirmPassword,
          tanishqProduct,
        };
        // console.log(userInfo);
        var multiUsers = JSON.parse(localStorage.getItem("tanishqUsers")) || [];
        // console.log(multiUsers);
        var flagForEmail = false;

        for (var i = 0; i < multiUsers.length; i++) {
          // console.log(multiUsers[i].tanishqUserPhNum);
          if (multiUsers[i].tanishqUserPhNum == phNum) {
            flagForEmail = true;
          }
        }
        if (!flagForEmail) {
          multiUsers.push(userInfo);

          localStorage.setItem("tanishqUsers", JSON.stringify(multiUsers));
          alert("Registered Successful.");
          document.getElementById("userPhNum").value = "";
          document.getElementById("userName").value = "";
          document.getElementById("userPassword").value = "";
          document.getElementById("userConfirmPassword").value = "";
        } else {
          alert("You're Already Registered on this Number");
          window.location.href = `./Login.html`;
        }
      } else {
        alert("Passwords doesn't Match.");
      }
    } else {
      alert("Passwords should be more than Eight");
    }
  } else {
    alert("All fields are mandatory.");
  }
}

// **********Login funcitn*****//

function login(event) {
  event.preventDefault();
  var phNum = document.getElementById("userPhNum").value;

  var tanishqLogin = JSON.parse(localStorage.getItem("tanishqUsers"));
  // console.log(tanishqLogin);

  var flagForPhNum = false;
  var currentUser;
  for (var i = 0; i < tanishqLogin.length; i++) {
    // console.log(tanishqLogin[i].tanishqUserName);
    if (tanishqLogin[i].tanishqUserPhNum == phNum) {
      flagForPhNum = true;
      currentUser = tanishqLogin[i];
      // console.log(currentUser);
    }
  }
  if (flagForPhNum == true) {
    alert("Logged in Succesfully.");
    localStorage.setItem("tanishqActiveUser", JSON.stringify(currentUser));
    window.location.href = `./HomePage.html`;
  } else {
    alert("Please Register to Login");
  }
}
