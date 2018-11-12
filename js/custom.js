// text limit on product page
$(".details-container p").text(function(index, currentText) {
    var maxLength = $(this).parent().attr('data-maxlength');
    if(currentText.length >= maxLength) {
      return currentText.substr(0, maxLength) + "...";
    } else {
      return currentText
    } 
  });