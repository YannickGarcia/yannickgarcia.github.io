
$(document).ready(function(){
var departVal;
var returnVal;
var newTotalPrice;

    $(".normalFares .depart").click(function(){
      $(".depart").removeClass("selected");
      $(this).toggleClass("selected");

      if ($( ".normalFares .depart" ).hasClass("selected")) {
        var departVal = parseFloat($(".way-fare.selected.depart .prix").text(), 10);
      }else{
        var departVal = 0;
      };

        if ($( ".normalFares .return" ).hasClass("selected")) {
        var returnVal = parseFloat($(".way-fare.selected.return .prix").text(), 10);
      }else{
        var returnVal = 0;
      };

      console.log(returnVal + departVal);
      var newTotalPrice = (returnVal + departVal).toFixed(2);
      $( ".totalPriceNumber" ).text( newTotalPrice );
    });


    $(".normalFares .return").click(function(){
      $(".return").removeClass("selected");
      $(this).toggleClass("selected");

      if ($( ".normalFares .depart" ).hasClass("selected")) {
        var departVal = parseFloat($(".way-fare.selected.depart .prix").text(), 10);
      }else{
        var departVal = 0;
      };

      if ($( ".return" ).hasClass("selected")) {
        var returnVal = parseFloat($(".way-fare.selected.return .prix").text(), 10);
      }else{
        var returnVal = 0;
      };
      console.log(returnVal + departVal);
      var newTotalPrice = (returnVal + departVal).toFixed(2);
      $( ".totalPriceNumber" ).text( newTotalPrice );
    });


    $(".openReturnFares .return").click(function(){
      $(".return").removeClass("selected");
      $(this).toggleClass("selected");
      var returnVal = parseFloat($(".way-fare.selected.return .prix").text(), 10);
      var newTotalPrice = (returnVal).toFixed(2);
      $( ".totalPriceNumber" ).text( newTotalPrice );
    });

    $("#depart1").click(function(){
      $("#selectedDepart").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7");
      $("#selectedDepart").addClass("goTo1");
      $("#selectedDepart").removeClass("hidden");
      $("#selectedReturn").removeClass("goTo8 goTo9 goTo10 goTo11");
      $( ".openReturnFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#depart2").click(function(){
      $("#selectedDepart").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7");
      $("#selectedDepart").addClass("goTo2");
      $("#selectedDepart").removeClass("hidden");
      $("#selectedReturn").removeClass("goTo8 goTo9 goTo10 goTo11");
      $( ".openReturnFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#depart3").click(function(){
      $("#selectedDepart").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7");
      $("#selectedDepart").addClass("goTo3");
      $("#selectedDepart").removeClass("hidden");
      $("#selectedReturn").removeClass("goTo8 goTo9 goTo10 goTo11");
      $( ".openReturnFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#depart4").click(function(){
      $("#selectedDepart").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7");
      $("#selectedDepart").addClass("goTo4");
      $("#selectedDepart").removeClass("hidden");
      $("#selectedReturn").removeClass("goTo8 goTo9 goTo10 goTo11");
      $( ".openReturnFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#depart5").click(function(){
      $("#selectedDepart").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7");
      $( ".openReturnFares .way-fare.selected" ).removeClass("selected");
      $("#selectedDepart").addClass("goTo5");
      $("#return7").removeClass("disabled");
      $("#selectedDepart").removeClass("hidden");
      $("#selectedReturn").removeClass("goTo8 goTo9 goTo10 goTo11");
      $( ".openReturnFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#depart6").click(function(){
      $("#selectedDepart").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7");
      $(".openReturnFares").removeClass("or-selected");
      $("#selectedDepart").addClass("goTo6");
      $("#selectedDepart").removeClass("hidden");
      $("#selectedReturn").removeClass("goTo8 goTo9 goTo10 goTo11");
      $( ".openReturnFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#depart7").click(function(){
      $("#selectedDepart").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7");
      $(".openReturnFares").removeClass("or-selected");
      $("#selectedDepart").addClass("goTo7");
      $("#selectedDepart").removeClass("hidden");
      $("#selectedReturn").removeClass("goTo8 goTo9 goTo10 goTo11");
      $( ".openReturnFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');



    });
    $(".normalFares .depart").click(function(){
        if (!$( ".return" ).hasClass("selected")) {
          $("#selectedReturn").addClass("hidden");
        };
        $("#selectedDepart").removeClass("hidden");;
      });

    $("#return1").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo1");
      $("#selectedDepart").removeClass("hidden");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#return2").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo2");
      $("#selectedDepart").removeClass("hidden");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#return3").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo3");
      $("#selectedDepart").removeClass("hidden");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#return4").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo4");
      $("#selectedDepart").removeClass("hidden");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#return5").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo5");
      $("#selectedDepart").removeClass("hidden");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#return6").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo6");
      $("#selectedDepart").removeClass("hidden");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });
    $("#return7").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo7");
      $("#selectedDepart").removeClass("hidden");
      $(".openReturnFares").removeClass("or-selected");
      $( ".showOpenReturn a" ).removeClass('alpha50');
    });




      $(".normalFares .return").click(function(){
          if (!$( ".depart" ).hasClass("selected")) {
            $("#selectedDepart").addClass("hidden");
          };
          $("#selectedReturn").removeClass("hidden");;
        });

    $("#return8").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo8");
      $("#selectedDepart").addClass("hidden");
      $( ".normalFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").addClass("or-selected");
      $( ".showOpenReturn a" ).addClass('alpha50');
    });
    $("#return9").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo9");
      $("#selectedDepart").addClass("hidden");
      $( ".normalFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").addClass("or-selected");
      $( ".showOpenReturn a" ).addClass('alpha50');
    });
    $("#return10").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo10");
      $("#selectedDepart").addClass("hidden");
      $( ".normalFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").addClass("or-selected");
      $( ".showOpenReturn a" ).addClass('alpha50');
    });
    $("#return11").click(function(){
      $("#selectedReturn").removeClass("goTo1 goTo2 goTo3 goTo4 goTo5 goTo6 goTo7 goTo8 goTo9 goTo10 goTo11");
      $("#selectedReturn").addClass("goTo11");
      $("#selectedDepart").addClass("hidden");
      $( ".normalFares .way-fare.selected" ).removeClass("selected");
      $(".openReturnFares").addClass("or-selected");
      $( ".showOpenReturn a" ).addClass('alpha50');
    });


    $(".disabled").mouseenter(function(){
      if ($(this).hasClass('disabled')) {
        $(".combine").addClass("show");
      };
    });

    $(".disabled").mouseleave(function(){
      $(".combine").removeClass("show");
    });

    $( ".showOpenReturn a" ).click(function() {
      if(!$(".openReturnFares").hasClass('or-selected')){
        $( ".openReturnFares" ).slideToggle( '400', 'swing', function() {
          // Animation complete
        });
      };

    });



});
