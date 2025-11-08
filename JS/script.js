welcomemessage()

// welcome message
function welcomemessage() {

    let Name = prompt('Please enter your name: ');
    document.getElementById("welcome-speech").innerHTML = 'Hello ' + Name + ', Welcome to Mahakam Beans!';
    

    if (Name !='null'){
    console.log ('Hello ' + Name + ', Welcome to Mahakam Beans!')
    }
}

// validate form
function validateForm() {
      
      const Name = document.getElementById("Name").value.trim();
      const Dateofbirth = document.getElementById("Dateofbirth").value.trim();
      const Gender = document.getElementById("Gender").value.trim();
      const messagebox = document.getElementById("messagebox").value.trim();

      if (Name === "") {
        alert("Please enter your name.");
        return false;
      }

      if (Dateofbirth === "") {
        alert("Please enter your date of birth.");
        return false;
      }

      if (Gender === "") {
        alert("Please enter your gender.");
        return false;
      }

      if (messagebox === "") {
        alert("Please enter your message.");
        return false;
      }

      alert('Thanl you, ' + Name + '! your message has been submitted.');
      return true;
    }

