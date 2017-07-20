$(document).ready(function(){
  $('.image-section div div img').on('click', function(e) {
    poem.selectImage($(this).attr('src'), this)
  })
});

var poem = {}

poem.images = []

poem.selectImage = function(imageSrc, selectedImage) {

  var that = selectedImage

  if ($('.selected-image').length === 3 && this.images.indexOf(imageSrc) > -1){
    this.removeImage(imageSrc, selectedImage)
    $(selectedImage).removeClass('selected-image')
  } else if ($('.selected-image').length === 3 && !this.images.indexOf(imageSrc) > -1) {
    console.log('you cant add anymore images')

  } else {
    $(selectedImage).addClass('selected-image');

    if (this.images.indexOf(imageSrc) > -1) {
      this.removeImage(imageSrc, selectedImage)
      $(selectedImage).removeClass('selected-image')
    } else {
      this.addImage(imageSrc, selectedImage)
      $(selectedImage).addClass('selected-image')
    }
  }
}

poem.injectImages = function() {
  $('.chosen-images .row').empty()
  for (var i = 0; i < poem.images.length; i++) {
    $('.chosen-images .row').append('<div class="col-4"><img src="'+poem.images[i]+'" style="width:inherit;"></div>')
  }
}

poem.addImage = function(imageLocation, that) {

  var index = this.images.indexOf(imageLocation);

  if (index > -1) {
    this.images.splice(index, 1);
  } else {
    this.images.push(imageLocation)
  }

  if (poem.images.length === 3){
    this.injectImages()
  }
}

courseRequirements = function() {
  if (poem.images.length === 3){
    return true
  } else {
    return false
  }
}

requirementAlertMessage = "Don't forget to choose three images before continuing to the next page";

poem.removeImage = function(imageLocation) {
  var index = poem.images.indexOf(imageLocation);

  if (index > -1) {
    poem.images.splice(index, 1);
  }
}
