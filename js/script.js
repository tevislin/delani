$(document).ready(function() {
    $(".card1").click(function() {
      $(".icon1").toggle();
      $(".c-text").toggle();
    });

    $(".card2").click(function(){
        $(".icon2").toggle();
        $(".c-text2").toggle();
    })

    $(".card3").click(function(){
        $(".icon3").toggle();
        $(".c-text3").toggle();
    })

    $(".p-img1").hover(function(){
        $(".work1").toggle();
    })
    $(".p-img2").hover(function(){
        $(".work2").toggle();
    })
    $(".p-img3").hover(function(){
        $(".work3").toggle();
    })
    $(".p-img4").hover(function(){
        $(".work4").toggle();
    })
    $(".p-img5").hover(function(){
        $(".work5").toggle();
    })
    $(".p-img6").hover(function(){
        $(".work6").toggle();
    })
    $(".p-img7").hover(function(){
        $(".work7").toggle();
    })
    $(".p-img8").hover(function(){
        $(".work8").toggle();
    })
    
  });

  function calc(){
    var name= document.querySelector("#name").value;
    alert(name);
}
