$(document).ready(function(){
  $('.exercise-button').on('click', function(e) {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected')
    } else {
      $(this).addClass('selected')
    }
  })

  $('.colour-palette').on('click', function(e) {
    if ($(this).hasClass('selected-answer')) {
      $(this).removeClass('selected-answer')
    } else {
      $('.colour-palette').removeClass('selected-answer')
      $(this).addClass('selected-answer')
    }
  })
});

var colourCourse = {}

courseRequirements = function() {
  switch (navigation.currentPageNumber()) {
    case 2:
        if ($('section.active .container.words .row .exercise-button.selected').length > 0) {
          return true;
        } else {
          requirementAlertMessage = "Try and click some words that represent the image.";
          return false;
        }
      break;
    case 3:
        if ($('section.active .container.words .row .exercise-button.selected').length > 0) {
          return true;
        } else {
          requirementAlertMessage = "Try and click some words that represent the image.";
          return false;
        }
      break;
    case 4:
        if ($('section.active .container.words .row .exercise-button.selected').length > 0) {
          return true;
        } else {
          requirementAlertMessage = "Try and click some words that represent the image.";
          return false;
        }
      break;
    case 5:
        if ($('section.active .container.words .row .exercise-button.selected').length > 0) {
          return true;
        } else {
          requirementAlertMessage = "Try and click some words that represent the colour palette.";
          return false;
        };
      break;
    case 6:
        if ($('section.active .container.words .row .exercise-button.selected').length > 0) {
          return true;
        } else {
          requirementAlertMessage = "Try and click some words that represent the colour palette.";
          return false;
        };
      break;
    case 7:
        if ($('section.active .container.words .row .exercise-button.selected').length > 0) {
          return true;
        } else {
          requirementAlertMessage = "Try and click some words that represent the colour palette.";
          return false;
        };
      break;
    case 8:
        if ($('.selected-answer').length < 1) {
          requirementAlertMessage = "Tap the colour palette you think represents the image below";
          return false;
        } else if ($('.selected-answer img').attr('data-answer') === $('.active').find('.colour-palette-image div img').attr('data-answer')) {
          return true;
        } else {
          requirementAlertMessage = "Not quite. Try again.";
          return false;
        }
      break;
    case 9:
        if ($('.selected-answer').length < 1) {
          requirementAlertMessage = "Tap the colour palette you think represents the image below";
          return false;
        } else if ($('.selected-answer img').attr('data-answer') === $('.active').find('.colour-palette-image div img').attr('data-answer')) {
          return true;
        } else {
          requirementAlertMessage = "Not quite. Try again.";
          return false;
        }
      break;
    case 10:
        if ($('.selected-answer').length < 1) {
          requirementAlertMessage = "Tap the colour palette you think represents the image below";
          return false;
        } else if ($('.selected-answer img').attr('data-answer') === $('.active').find('.colour-palette-image div img').attr('data-answer')) {
          return true;
        } else {
          requirementAlertMessage = "Not quite. Try again.";
          return false;
        }
      break;

    default:
  }
}
