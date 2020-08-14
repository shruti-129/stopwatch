$(document).ready(function () {
  var x,hours,minutes,seconds,c_sec,temp,counter,inputdata,lapdata;
  function Countstart() {
    counter = inputdata;
    x=setInterval(function() {
      counter+=10;
        function padZero(counter) {
          return counter < 10 ? '0' + counter : '' + counter;
        }
        c_sec=padZero(parseInt((counter%1000)/100));
        seconds =parseInt(counter/1000);
        minutes =parseInt(seconds/60, 10);
        seconds =padZero(seconds%60);
        hours =padZero(parseInt(minutes/60, 10));
        minutes =padZero(minutes%60);
        $("#c_sec").html(c_sec);
        $("#sec").html(seconds);
        $("#min").html(minutes);
        $("#hr").html(hours);
        temp=counter;
    }, 10);
  }
  function startTimer(){
    inputdata=0;
    inputdata=inputdata*1000;
    Countstart();
    $('#startbtn').css({pointerEvents:'none'});
    $('#lapbtn,#stopbtn').css({pointerEvents:'auto'});
  }
  function lapTimer(){
    lapdata= +hours+":"+minutes+":"+seconds+":"+c_sec;
    $("ul").append("<li>Lap Time "+lapdata+"</li>");
    console.log(lapdata);
  }
  function resumeTimer(){
    inputdata=temp;
    console.log(inputdata);
    Countstart();
    $('#resumebtn').addClass('dn');
    $('#startbtn').removeClass('dn');
    $('#stopbtn').css({pointerEvents:'auto'});
  }
  function stopTimer(){
    clearTimeout(x);
    $('#startbtn').addClass('dn');
    $('#resumebtn').removeClass('dn');
  }
  function  resetTimer(){
    clearTimeout(x);
    $("#hr,#min,#sec,#c_sec").text("00");
    $("ul").text("");
    $('#startbtn').removeClass('dn').css({pointerEvents:'auto'});
    $('#lapbtn,#stopbtn').css({pointerEvents:'none'});
    $('#resumebtn').addClass('dn');
  }

  $("#startbtn").click(function(){
    startTimer();
    $("#status").html("STOPWATCH IS START");
  });
  $("#lapbtn").click(function () {
    lapTimer();
  });
  $('#resumebtn').click(function () {
    resumeTimer();
    $("#status").html("STOPWATCH IS START");
  });
  $('#stopbtn').click(function () {
    stopTimer();
    $("#status").html("STOPWATCH IS STOP");
  });
  $('#resetbtn').click(function () {
    resetTimer();
    $("#status").html("CLICK START BUTTON");
  });
});


