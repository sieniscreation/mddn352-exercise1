window.addEventListener('resize', function(event){

    var myWidth = document.body.scrollWidth;
    var myHeight = document.body.scrollHeight;
    
    var span = document.getElementById("myHeight");
    span.textContent = myHeight;

    var span2 = document.getElementById("myWidth");
    span2.textContent = myWidth;
    
});

