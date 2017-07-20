$(document).ready(function(){
  $('main section').not(':first').addClass('hidden');

  progress.injectProgressBar();
})

var courseRequirements;

var requirementAlertMessage;

var navigationButtons = {
  back : '<div class="col-md-2"><div id="back-btn" class="col text-center ctrl-button">Back</div></div>',
  next : '<div class="col-md-2"><div id="next-btn" class="col text-center ctrl-button">Next</div></div>',
  endOfCourse : '<div class="col-md-2"><div class="col text-center ctrl-button dashboard-btn" id="end-dashboard-btn">Course list</div></div>',
}

$('#next-btn').on('click', function(e){
  navigation.checkingRequirements()
});

$('#back-btn').on('click', function(e){
  navigation.previousPage()
});

$('.dashboard-btn').on('click', function(e){
  window.location.href = "/courses/";
});

var progress = {}

progress.element = '<div class="progress-bar bg-success invisible" role="progressbar" style="width: '+ 100 / ($('main').children('section').length - 1) +'%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>';

progress.injectProgressBar = function() {
  for (var i = 0; i < $('main').children('section').length - 1; i++) {
    $('.progress').append(this.element)
  }
}

progress.updateBar = function() {
  var pageNumber = parseInt($('.active').attr('data-section'))-1;

  $(`.progress div:nth-child(${pageNumber})`).removeClass('invisible')

}

var navigation = {}

navigation.checkingRequirements = function() {
  if (navigation.currentPage().attr('data-requirments') === "true"){
    if (courseRequirements() === true) {
      navigation.nextPage();
      $('.alert.alert-danger').addClass('hidden')
    } else {
      $('.alert.alert-danger').empty()
      $('.alert.alert-danger').html(requirementAlertMessage)
      $('.alert.alert-danger').removeClass('hidden')
    }
  } else {
    navigation.nextPage()
    $('.alert.alert-danger').addClass('hidden')
  }
}

navigation.nextPage = function() {

  $('.selectedAnswer').removeClass('selectedAnswer');

  if (this.currentPageNumber() <= this.numberOfPages){
    // Show next section/page
    var current = this.currentPage(),
        next = this.getNextPage();

    $(this.currentPage()).addClass('hidden');
    // Add active class
    $(this.getNextPage()).addClass('active');
    // Remove hidden class
    $(current).removeClass('active');
    $(next).removeClass('hidden');

    this.controlButtons()

    progress.updateBar()

  }
}

navigation.previousPage = function() {

  if (this.currentPageNumber() > 1){
    // Show next section/page
    var current = this.currentPage(),
        next = this.getPreviousPage();

    $(current).addClass('hidden');
    // Add active class
    $(next).addClass('active');
    // Remove hidden class
    $(current).removeClass('active');
    $(next).removeClass('hidden');

    this.controlButtons()

  }
}

navigation.controlButtons = function(){
  $('footer.controls').empty();
  if (this.isLastPage()){
    injectButtons(navigationButtons.back, navigationButtons.endOfCourse)
    $('#back-btn').on('click', function(e){
      navigation.previousPage()
    });
    $('.dashboard-btn').on('click', function(e){
      window.location.href = "/courses/";
    });
  } else if (this.isFirstPage()) {
    injectButtons(navigationButtons.endOfCourse, navigationButtons.next)
    $('.dashboard-btn').on('click', function(e){
      window.location.href = "/courses/";
    });
    $('#next-btn').on('click', function(e){
      navigation.checkingRequirements()
    });
  } else {
    injectButtons(navigationButtons.back, navigationButtons.next)
    $('#next-btn').on('click', function(e){
      navigation.checkingRequirements()
    });
    $('#back-btn').on('click', function(e){
      navigation.previousPage()
    });
  }

  function injectButtons(firstButton, secondButton) {
    $('footer.controls').append(firstButton.concat(secondButton))
  }
}

navigation.getPreviousPage = function() {
  var sectionList = $('main').children('section')
  for (var i = 0; i < this.numberOfPages; i++) {

    var section = sectionList[i].className,
    expr = /active/;

    if (section.match(expr)) return $(sectionList[i-1]);
  }
}

navigation.currentPage = function() {
  // What is current section
  var sectionList = $('main').children('section')
  for (var i = 0; i < this.numberOfPages; i++) {

    var section = sectionList[i].className,
        expr = /active/;

    if (section.match(expr)) return $(sectionList[i]);
  }
}

navigation.getNextPage = function() {
  var sectionList = $('main').children('section')
  for (var i = 0; i < this.numberOfPages; i++) {

    var section = sectionList[i].className,
    expr = /active/;

    if (section.match(expr)) return $(sectionList[i+1]);
  }
}

navigation.isFirstPage = function (){return (this.currentPageNumber() === 1)}

navigation.isLastPage = function (){return (this.currentPageNumber() === this.numberOfPages)}

navigation.currentPageNumber = function() {
  return parseInt($('.active').attr('data-section'));
}

navigation.numberOfPages = $('main').children('section').length;
