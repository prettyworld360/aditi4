 // ##################burger#################
 let burger = document.querySelector('#burger');
 let navcross = document.querySelector('#nav-cross');
 function navshow(){
   document.querySelector('.nav-links').style.display="block";
 };
 
 function navhide(){
   document.querySelector('.nav-links').style.display="none";
 };  
 let fixicn1 = document.getElementById('fixicn1');
 let fixicn2 = document.getElementById('fixicn2');
 var hideicn = document.getElementById('hideicn');
 
 fixicn1.addEventListener('click',function(ele){
   
   hideicn.style.display="block";
   fixicn1.style.display="none";
   fixicn2.style.display="block";
   fixicn2.addEventListener('click',function(){
    hideicn.style.display="none";
    fixicn1.style.display="block";
   fixicn2.style.display="none";
  })
 });
 
 
 