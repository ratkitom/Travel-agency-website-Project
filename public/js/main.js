
let callMeForm = document.querySelector(".call-me-form");





document.addEventListener("DOMContentLoaded",async function(){

    let posts = await getPosts();
    console.log(posts);
    let articles = document.querySelector(".articles");
    articles.innerHTML="";

    posts.forEach((post)=>{

        

        let postHTML = ` <div class="col-4 ">
        <div class="card" >
            <img src="${post.imageUrl}" class="card-img-top" alt="${post.title}">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.description}</p>
              <a href="/sight?id=${post.id}" class="btn btn-primary">Details</a>
            </div>
          </div>



    </div>`

        


        articles.insertAdjacentHTML("beforeend",postHTML);

        


    });


});


callMeForm.addEventListener("submit",function(e){

e.preventDefault();



let phoneInput = document.querySelector(".phoneInput");

fetch("http://localhost:3000/callback-requests",{

method:"POST",
headers:{
"Content-Type":"application/json"

},

body:JSON.stringify({

  phone:phoneInput.value
})

}).then((resp)=>resp.text()).then(()=>alert("We will call you !"));


});




