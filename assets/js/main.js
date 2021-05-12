$(document).ready(function(){
  
  $("a").click(function(event){
    event.preventDefault();

    var enlaces = this.hash;

    $("html").animate({
      scrollTop: $(enlaces).offset().top,
    }, 700);
  });
});