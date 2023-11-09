
var currentScroll = 0;
function autoScroll(elementId, interval) {
    var element = document.getElementById(elementId);
    var scrollWidth = element.scrollWidth;
    console.log(scrollWidth);  
    auto = setInterval(function() {
      if (currentScroll < scrollWidth) {
        console.log(currentScroll);
        currentScroll ++; 
        element.scrollLeft = currentScroll;
      } else {
        currentScroll = 0;
        element.scrollLeft = currentScroll;
      }
    }, interval);
  }
autoScroll("imageListScroll", 30);
function over() {
  clearInterval(auto);
}