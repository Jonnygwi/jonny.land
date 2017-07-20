$(function(){

  if (navigator.userAgent.match(/iPad/i) != null) {
    $('.signup-button').on('click', function(e){
      window.location.assign('/courses');
    });
  } else {
    $('.signup-button').on('click', function(e){
      window.location.assign('/unavailable.html')
    })
  }

});
