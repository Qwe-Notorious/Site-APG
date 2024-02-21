function Send() {

    var userName = document.getElementById('name').value;
    var discordName = document.getElementById('discord').value;

    var messageBody = "Name: " + userName +
    "<br/> Discord: " + discordName; 
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tedi44633@gmail.com",
        Password : "6BA8118E7D58FB511FD140526D00FFC5BE9E",
        To : 'zertaimp@gmail.com',
        From : "tedi44633@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}


// <!DOCTYPE html>
// <html>
// <head>
//   <title>Форма для отправки данных на почту</title>
//   <script src="https://smtpjs.com/v3/smtp.js"></script>
//   <script type="text/javascript">
//     function sendEmail() {
//       // Получение значений из полей ввода
//       var name = document.getElementById("name").value;
//       var email = document.getElementById("email").value;
//       var message = document.getElementById("message").value;
      
//       // Настройка параметров для отправки почты
//       var emailConfig = {
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         username: "your-email@gmail.com", // Замените на свою почту
//         password: "your-password", // Замените на пароль своей почты
//         to: "company-email@example.com", // Замените на почту компании
//         from: email,
//         subject: "Новое сообщение от " + name,
//         body: "Получено новое сообщение от " + name + ". Email: " + email + ". Сообщение: " + message
//       }
      
//       // Отправка почты
//       Email.send(emailConfig);

//       // Очистка полей ввода после отправки
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//     }
//   </script>
// </head>
// <body>
//   <h1>Форма для отправки данных на почту</h1>
  
//   <label for="name">Имя:</label>
//   <input type="text" id="name" required><br>

//   <label for="email">Email:</label>
//   <input type="email" id="email" required><br>
  
//   <label for="message">Сообщение:</label><br>
//   <textarea id="message" rows="5" required></textarea><br>
  
//   <button onclick="sendEmail()">Отправить</button>
// </body>
// </html>