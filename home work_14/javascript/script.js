//После реализации основного функционала проекта “Регистрации и Авторизации с помощью localstorage”
//реализовать валидацию инпутов (Имя, Эмейл, Телефон, Пароль) с помощью JS.

//Имя {
//Минимум 2 символа
//Максимум 24 символа
//Только буквы
//}

//Эмейл {
//Наличие символа@
//Минимум 7 символов 
//}

//Телефон {
//Первый символ +
//Максимум 12 чисел
//Минимум 8 чисел
//Только числа
//}

//Пароль {
//Минимум 5 символов
//максимум 26 символов
//}

const form = document.getElementById("registerForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  
  if (name.length < 2 || name.length > 24 || !/^[A-Za-z]+$/.test(name)) {
    errors.push("The name must contain only letters and be between 2 and 24 characters");
  }

  
  if (email.length < 7 || !email.includes("@")) {
    errors.push("The e-mail must contain the '@' symbol and be at least 7 characters long");
  }

 
  if (!/^\+\d{8,12}$/.test(phone)) {
    errors.push("The phone number must begin with '+' and be between 8 and 12 digits");
  }


  if (password.length < 5 || password.length > 26) {
    errors.push("The password must be between 5 and 26 characters");
  }

  
  if (errors.length > 0) {
    errorMessage.innerHTML = errors.map(err => `<p style="color:red;">${err}</p>`).join("");
  } else {
    errorMessage.innerHTML = `<p style="color:green;"> All fields are filled in correctly!</p>`;
   
  }
});
