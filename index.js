
var click=0;
var ele=document.getElementById('btn-id');
ele.addEventListener("click",dothis);

  function dothis(){
    if((click%2)===0){
      document.getElementById('department').style.display="block";
    }else{
      document.getElementById('department').style.display="none";
    }
    click++;
  }