$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
    $("#mycarousel").carousel('pause');
    $("#carouselButton").children("span").removeClass('fa-pause');
    $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
    $("#mycarousel").carousel('cycle');
    $("#carouselButton").children("span").removeClass('fa-play');
    $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});    



// Get the modal
var modal = document.getElementById('id01', 'reserveModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}


