
$(document).ready(function(e){

// LOCATIONS expand function START
  $('.item').click(function (e){
    if($(this).next('.item-data').css('display') != 'block'){
      $('.active').slideUp('fast').removeClass('active');
      $(this).next('.item-data').addClass('active').slideDown('slow');
    } else {
      $('.active').slideUp('slow').removeClass('active');
    }
  });
// LOCATIONS expand function END


});
