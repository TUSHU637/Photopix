let AllLi=document.querySelectorAll("li");
let allItem=document.querySelectorAll(".item");

AllLi.forEach((li)=>{
li.addEventListener("click",(e)=>{
    document.querySelector(".active").classList.remove("active");
    li.classList.add("active");
    let clkItem=li.classList[0];
    console.log(clkItem);
    
    allItem.forEach((val)=>{
        if(val.classList[1]==clkItem){
            val.style.display="inline-block";
        }
        else if(clkItem=="all"){
              val.style.display="inline-block";
        }
        else{
            val.style.display="none";
        }
    })
})
})



