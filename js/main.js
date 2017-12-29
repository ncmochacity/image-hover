$(function(){
  var duration=500;
  var exampleList = $(".examples li");
  var ul = $(".examples");
  $(".overlay").on('mouseover',function(){
    $(this).stop(true).animate({
      opacity:'1',
    },duration,'easeOutSine');
  });
  $(".overlay").on('mouseout',function(){
    $(this).stop(true).animate({
      opacity:'0',
    },duration,'easeOutSine');
  });
  $(".filter").click(function(){
    exampleList.filter(":even").css('backgroundColor','red').css('color','white');
  });
  $(".find").click(function(){
    ul.find(".find-me").css('backgroundColor','blue').css('color','white');
  });
});
