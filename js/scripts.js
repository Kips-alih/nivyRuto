$(document).ready(function(){
  $(".design").click(function(){
    $(".design").slideUp("slow");
    $("#hide1").slideToggle("slow");
  });
  $("#hide1").click(function(){
    $("#hide1").fadeOut("slow");
    $(".design").fadeIn("slow");
    });
  
    $(".calendar").click(function(){
      $(".calendar").slideUp("slow");
      $("#hide2").slideToggle("slow");
    });
    $("#hide2").click(function(){
      $("#hide2").fadeOut("slow");
      $(".calendar").fadeIn("slow");
      });

      $(".event").click(function(){
        $(".event").slideUp("slow");
        $("#hide3").slideToggle("slow");
      });
      $("#hide3").click(function(){
        $("#hide3").fadeOut("slow");
        $(".event").fadeIn("slow");
        });
        $(".email").click(function(){
          $(".email").slideUp("slow");
          $("#hide4").slideToggle("slow");
        });
        $("#hide4").click(function(){
          $("#hide4").fadeOut("slow");
          $(".email").fadeIn("slow");
          });
          $(".travel").click(function(){
            $(".travel").slideUp("slow");
            $("#hide5").slideToggle("slow");
          });
          $("#hide5").click(function(){
            $("#hide5").fadeOut("slow");
            $(".travel").fadeIn("slow");
            });
            $(".smedia").click(function(){
              $(".smedia").slideUp("slow");
              $("#hide6").slideToggle("slow");
            });
            $("#hide6").click(function(){
              $("#hide6").fadeOut("slow");
              $(".smedia").fadeIn("slow");
              });
});

$(document).ready(function(){

  $(".work1").hover(function(){
  $(".subtitle1").show("slow");
  });
  $(".work1").mouseleave(function(){
    $(".subtitle1").hide("slow");
  });
  
  $(".work2").hover(function(){
    $(".subtitle2").show("slow");
    });
    $(".work2").mouseleave(function(){
      $(".subtitle2").hide("slow");
    });

  $(".work3").hover(function(){
    $(".subtitle3").show("slow");
    });
    $(".work3").mouseleave(function(){
      $(".subtitle3").hide("slow");
    });

  $(".work4").hover(function(){
    $(".subtitle4").show("slow");
    });
    $(".work4").mouseleave(function(){
      $(".subtitle4").hide("slow");
    });

  $(".work5").hover(function(){
    $(".subtitle5").show("slow");
    });
    $(".work5").mouseleave(function(){
      $(".subtitle5").hide("slow");
    });

  $(".work6").hover(function(){
    $(".subtitle6").show("slow");
    });
    $(".work6").mouseleave(function(){
      $(".subtitle6").hide("slow");
    });

  $(".work7").hover(function(){
    $(".subtitle7").show("slow");
    });
    $(".work7").mouseleave(function(){
      $(".subtitle7").hide("slow");
    });

  $(".work8").hover(function(){
    $(".subtitle8").show("slow");
  });
  $(".work8").mouseleave(function(){
    $(".subtitle8").hide("slow");
  });
});

$(document).ready(function(){
  $("form#contact-us").submit(function(event) {
    event.preventDefault();

    var userName=$("#name").val();
    var email=$("#email").val();
    var comment=$("#comment").val();
    if(userName&&email&&comment){
      alert("Hi "+userName +". We have received your message. Thank you for reaching out to us.");
    
    }
    else{
      alert("All fields required");
    }
    $("form").trigger("reset");
  });
});
