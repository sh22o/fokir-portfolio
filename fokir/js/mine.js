 

 $(window).scroll(function(){
  let pTop=$("#About").offset().top; 
  let sTop=$(window).scrollTop(); 


  if (sTop>=pTop){
      $(".menuesnav").removeclass("bg-black"); 
      $(".menuesnav").addClass("bg-primary"); 
  } 
  else{
      $(".menuesnav").removeclass("bg-primary"); 
      $(".menuesnav").addclass("bg-black"); 

  }
 }); 