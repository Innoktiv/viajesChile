$(document).ready(function(){
  
  //Smooth scroll
  $("a").click(function(event){
    event.preventDefault();

    var enlaces = this.hash;

    $("html").animate({
      scrollTop: $(enlaces).offset().top,
    }, 700);
  });

  // Activa Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

});

