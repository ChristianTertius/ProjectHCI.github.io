function regis() {
  let name = document.getElementById("inputName").value;
  let email = document.getElementById("inputEmail").value;
  let phone = document.getElementById("inputNumber").value;
  let country = document.getElementById("inputCountry").value;
  let verif = document.getElementById("verif").checked;
  // alt + shift + panah atas/bawah untuk copy
  console.log("name", name);
  console.log("email", email);
  console.log("phone", phone);
  console.log("email", country);
  console.log("verif", verif);

  // document.getElementById('errName').innerText="";

  if (name.length < 5 || name.length > 50) {
    alert("Name's length must between 5 and 50");
  } else if (!email.endsWith("@gmail.com")) {
    alert("Email must ends with @gmail.com");
  } else if (!phonenum(phone)) {
    alert("Phone number must have 11-12 digit");
  } else if (!countries(country)) {
    alert("Your Country must Indonesia, Singapore, or Malaysia");
  } else if (verif == "") {
    alert("You must agree the terms and conditions by click the checkbox");
  } else {
    alert("success");
  }

  event.preventDefault();
}

// function alphanum(str) {
//   let num = 0;
//   for (let i = 0; i < str.length; i++) {
//     if ("A" <= str[i] && str[i] <= "Z") {
//       char++;
//     } else if ("a" <= str[i] && str[i] <= "z") {
//       char++;
//     } else if ("0" <= str[i] && str[i] <= "9") {
//       num++;
//     } else {
//       return false;
//     }
//   }
//   if (num != 0 && char != 0) {
//     return true;
//   }
//   return false;
// }

function phonenum(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if ("0" <= str[i] && str[i] <= "9") {
      num++;
    } else {
      return false;
    }
  }
  if (num == 11 || num == 12) {
    return true;
  }
  return false;
}

function countries(str) {
  if (str == "Indonesia" || str == "Singapore" || str == "Malaysia") {
    return true;
  } else {
    return false;
  }
}

document.getElementById("btnRegister").addEventListener("click", regis);
