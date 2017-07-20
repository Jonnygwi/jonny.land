var answers = [4,2,1,4];

// Handler
$('#next-btn').on('click', function(e){
  quiz.hasReqs() ? quiz.checkReqs() : quiz.nextPage()
});

$('.full-width-btn').on('click', function(e){
  $('.full-width-btn').removeClass('selectedAnswer');
  $(this).addClass('selectedAnswer');
})

// Nextpage function
var quiz = {};

// Does exercise have requirements
quiz.hasReqs = function(){
  var reqs = $('main :first-child').attr('data-reqs');

  if (reqs == 'true'){
    return true;
  } else {
    return false;
  }
};

quiz.selectedAnswer = function(){
  return $('.selectedAnswer').attr('value');
}
// Check if the requirements have been met
quiz.checkReqs = function(){
  var selectedAnswer = this.selectedAnswer(),
      questionNumber = $('.selectedAnswer').parents('section').attr('data-question');

  if (selectedAnswer == undefined || answers[questionNumber-1] == undefined){
    alert('You must select an answer')
  } else if (selectedAnswer == answers[questionNumber-1]){

    $($('.progress').children()[questionNumber-1]).removeClass('invisible');

    this.nextPage();
  } else {
    alert('requirements not met')
  }
};


quiz.nextPage = function(){
  $('.selectedAnswer').removeClass('selectedAnswer');

  if (this.currentPageNumber() < this.numberOfPages){
    // Show next section/page
    var current = this.currentPage(),
        next = this.getNextPage();

    $(this.currentPage()).addClass('hidden');
    // Add active class
    $(this.getNextPage()).addClass('active');
    // Remove hidden class
    $(current).removeClass('active');
    $(next).removeClass('hidden');
  } else {
    $('.completed-quiz').removeClass('hidden');
  }
};

quiz.currentPage = function(){
  // What is current section
  var sectionList = $('main').children('section')
  for (var i = 0; i < this.numberOfPages; i++) {

    var section = sectionList[i].className,
        expr = /active/;

    if (section.match(expr)) return $(sectionList[i]);
  }
}

quiz.getNextPage = function(){
  // What is next section
  var sectionList = $('main').children('section')
  for (var i = 0; i < this.numberOfPages; i++) {

    var section = sectionList[i].className,
        expr = /active/;

    if (section.match(expr)) return $(sectionList[i+1]);
  }
}

quiz.currentPageNumber = function(){
  return parseInt($('.active').attr('data-section'))
};

quiz.numberOfPages = $('main').children('section').length;
