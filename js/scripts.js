$(document).ready(function() {
    $("#mycarousel").carousel( { interval: 5000 } );
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    $("#loginButton").click(function() {
        $("#loginModal").modal('toggle');
    })
    $("#reservationButton").click(function() {
        $("#reservationModal").modal('toggle');
    })
});
// JS script to open tooltip in "Reserve Table" button. Not needed now as it has been replaced with a modal. 
// <script>
//     $(document).ready(function() {
//         $('[data-toggle="tooltip"]').tooltip();
//     });
// </script> 