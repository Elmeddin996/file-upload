const uploadFileIcon =document.querySelector(".upload img")
const showFile = document.querySelector(".showImage")

uploadFileIcon.addEventListener("click", ()=>{
    uploadFileIcon.previousElementSibling.click();
});

uploadFileIcon.previousElementSibling.addEventListener("change", (e)=>{
    const {files} = e.target;

    for (const file of files) {
        const fileReader=new FileReader();

        fileReader.onloadend = (e)=>{
            const {result} = e.target;

            const imageUpload = document.createElement("img")

            imageUpload.setAttribute("src");
            imageUpload.src = result;

showFile.appendChild(imageUpload)

        };
        fileReader.readAsDataURL(file);
    }


})