async function getEmails(){

    return await fetch("http://localhost:3000/emails")
    .then((response)=>response.json())
     .then((data)=>data);
     
 }


 let mailBlock = document.querySelector("#v-pills-mails");


 mailBlock.addEventListener("click",function(e){


    if(e.target.classList.contains("btn-remove")){

        let id = e.target.parentNode.parentNode.querySelector(".id").value;

       

        fetch("http://localhost:3000/emails/"+id,{
    method:"DELETE",
    
    

    }).then((response)=>response.text()).then((data)=>window.history.go());

    }

});






