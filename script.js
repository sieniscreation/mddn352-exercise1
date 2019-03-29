
//triggers the writeDimensions function when  the page resizes

window.addEventListener('resize', function(){
    writeDimensions();
});

//triggers the writeDimensions function when  the page loads

window.addEventListener('load', function() {
    writeDimensions();
});

// gets the document dimensions and sets the text in the spans with id myHeight and myWidth

function writeDimensions(){
    var myWidth = document.body.scrollWidth;
    var myHeight = document.body.scrollHeight;
    
    var span = document.getElementById("myHeight");
    span.textContent = myHeight;

    var span2 = document.getElementById("myWidth");
    span2.textContent = myWidth;
}
