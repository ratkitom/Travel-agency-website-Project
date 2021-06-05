

let createForm = document.querySelector(".create-post-form");
let createTitle = document.querySelector("#createTitle");
let createCountry = document.querySelector("#createCountry");
let createImageUrl = document.querySelector("#createImageUrl");
let createImageFile = document.querySelector("#createImageFile");
let addText = document.querySelector("#addText");







createForm.addEventListener("submit", function(e){



    e.preventDefault();

    let formData = new FormData();

    formData.append("title",createTitle.value);
    formData.append("country",createCountry.value);
    formData.append("imgUrl",createImageUrl.value);
    formData.append("text",addText.value);
    formData.append("description",addText.value.substring(0,addText.value.indexOf(".")+1));
    formData.append("imageFile",createImageFile.files[0]);
    



    fetch("http://localhost:3000/posts",{
    method:"POST",
    body:formData
    

    }).then((response)=>response.text()).then((data)=>window.history.go());


});


function disableInput(input1,input2){

    if(input1.value){

        input2.disabled = true;
    }
    else{

        
        input2.disabled=false;
    }


}

createImageUrl.addEventListener("change",function(){disableInput(this,createImageFile)});
createImageFile.addEventListener("change",function(){disableInput(this,createImageUrl)});