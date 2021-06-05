let sendMailForm = document.querySelector(".email-request");

sendMailForm.addEventListener("submit",function(e){


  




  e.preventDefault();

  console.log("dupsko");

  fetch("http://localhost:3000/emails",{

  method:"POST",
  headers:{
  "Content-Type":"application/json"

  },

  body:JSON.stringify({

    email:sendMailForm.querySelector("#email").value,
    message:sendMailForm.querySelector("#message").value,
    name:sendMailForm.querySelector("#name").value,



  })

  }).then((resp)=>resp.text()).then((data)=>console.log(data));


    



});