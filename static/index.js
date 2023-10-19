window.onbeforeunload = function() {
    return "Would you really like to close your browser?";
}

function clickAnywhere() {
    // Get the document object.
    var doc = document;
  
    // Add a click event listener to the document.
    doc.addEventListener("click", function(event) {
      // Do something when the document is clicked.
      console.log("You clicked anywhere on the page!");
    });
  }