

let addPostbutton=document.querySelector(".addPost");
let logOutBtn = document.querySelector(".log-out");


document.addEventListener("DOMContentLoaded",async function(){

    addPost();
    addCallbackRequest();
    addEmails();

   


});


addPostbutton.addEventListener("click",function(){

    let activeTab = document.querySelector("#v-pills-articles");
    activeTab.classList.remove("show");
    activeTab.classList.remove("active");


    let createPostTab = document.querySelector("#v-pills-createpost");
    createPostTab.classList.add("show");
    createPostTab.classList.add("active");





});


async function addPost(){

    let posts = await getPosts();
    
    
    let articles = document.querySelector(".articles");
    articles.innerHTML="";

    let i = 1;

    posts.forEach((post)=>{

        

        let postHTML = ' <article class="d-flex justify-content-between align-items-center">'+
        '<div class="num w5">'+i+'</div>'+
        '<input type="hidden" class="id" value='+post.id+"/>"+
        '<div class="name w30">'+post.title+'</div>'+
        '<div class="date w30">'+ post.date+'</div>'+
        '<div class="country w20">'+post.country+'</div>'+
        '<div class="edit w10"><button class="btn btn-link btn-edit">Edit</button></div>'+
        '<div class="w5 remove"><button class="btn btn-link btn-remove">X</button></div>'+
        '</article>';

        i++;


        articles.insertAdjacentHTML("beforeend",postHTML);

        


    });
}


async function addCallbackRequest(){

    let reqquests = await getCallbackRequests();
    
    
    let callbackRequest = document.querySelector("#v-pills-callback");
    callbackRequest.innerHTML="";

    let i = 1;

    reqquests.forEach((request)=>{

        

        let requestHTML = ' <article class="d-flex justify-content-between align-items-center ">'+
        '<div class="num w5">'+i+'</div>'+
        '<input type="hidden" class="id" value='+request.id+"/>"+
        '<div class="name w60">'+request.phone+'</div>'+
        '<div class="date w30">'+ request.date+'</div>'+
        '<div class="w5 remove"><button class="btn btn-link btn-remove">X</button></div>'+
        '</article>';

        i++;


        callbackRequest.insertAdjacentHTML("beforeend",requestHTML);

        


    });
}


async function addEmails(){

    let emails = await getEmails();
    
    
    let emailsBlock = document.querySelector("#v-pills-mails");
    emailsBlock.innerHTML="";

    let i = 1;

    emails.forEach((email)=>{

        

        let emailHTML = ' <article class="d-flex justify-content-between align-items-center mailblock">'+
        '<div class="num w5">'+i+'</div>'+
        '<input type="hidden" class="id" value='+email.id+"/>"+
        '<div class="name w30">'+email.name+'</div>'+
        '<div class="date w30">'+ email.email+'</div>'+
        '<div class="date w30">'+ email.date+'</div>'+
        '<div class="w5 remove"><button class="btn btn-link btn-remove">X</button></div>'+
        '<div class="date w100">'+ email.message+'</div>'+
        '</article>';

        i++;


        emailsBlock.insertAdjacentHTML("beforeend",emailHTML);

        


    });
}


logOutBtn.addEventListener('click', function() {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    window.location.href = '/';
});
