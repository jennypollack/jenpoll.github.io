$(function(){
  var theDiv = $('.calculadder');
   theDiv.on('mouseenter',function(){
     $(this).css('background-color', 'red');
    });

   theDiv.on('mouseout',function(){
     $(this).css('background-color', 'purple');
   });

   theDiv.on('click',function(){
     $(this).css('background-color', 'green');
   });
});