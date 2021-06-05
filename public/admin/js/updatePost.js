
{
    
let articlesBlock = document.querySelector(".articles");
let id;
let updateForm=document.querySelector(".update-post-form");
let titleInp = document.querySelector("#updateTitle");
let textInp = document.querySelector("#updateText");



articlesBlock.addEventListener("click",async function(e){


    if(e.target.classList.contains("btn-edit")){

         id = e.target.parentNode.parentNode.querySelector(".id").value;

         let activeTab = document.querySelector("#v-pills-articles");
         activeTab.classList.remove("show");
         activeTab.classList.remove("active");
     
     
         let updatepost = document.querySelector("#v-pills-updatepost");
         updatepost.classList.add("show");
         updatepost.classList.add("active");

        

         let postInfo = await fetch("http://localhost:3000/posts/"+id)
         .then((resp)=>resp.json())
         .then((data)=>data);

         titleInp.value= postInfo.title;
         textInp.value= postInfo.text;

        

        

        

       

    }



});

updateForm.addEventListener("submit",function(e){

    e.preventDefault();


    fetch("http://localhost:3000/posts/"+id,{
        method:"PUT",
        headers:{

            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:titleInp.value,
            text:textInp.value,
            description:textInp.value.substring(0,textInp.value.indexOf(".")+1)
        })


    }).then((response)=>response.text()).then(()=>window.history.go());



});


}