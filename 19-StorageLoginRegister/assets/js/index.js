document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let isLoginedUser = users.find(user => user.isLogged === true);
  
    let userBtn = document.querySelector(".username");
    let login = document.querySelector(".login");
    let register = document.querySelector(".register");
    let logout = document.querySelector(".logout");
    let edit=document.querySelector(".edit")
  
    function updateUserStatus() {
      if (isLoginedUser) {
        userBtn.textContent = isLoginedUser.name; 
        register.classList.add("d-none");
        login.classList.add("d-none");
        logout.classList.remove("d-none");
        edit.classList.remove("d-none")
      } else {
        userBtn.textContent = "Username";
        register.classList.remove("d-none");
        login.classList.remove("d-none");
        logout.classList.add("d-none");
        edit.classList.add("d-block")
      }
    }
  
    let logoutUserFunction = () => {
      if (isLoginedUser) {
        isLoginedUser.isLogged = false;
        localStorage.setItem("users", JSON.stringify(users));
        isLoginedUser = null;
        updateUserStatus();
      }
    };
  
    logout.addEventListener("click", logoutUserFunction);
    updateUserStatus();
  });
  