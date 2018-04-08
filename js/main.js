
// $(".team-card").mouseover(function() {
//     var a = $(this);
//     $(this).find(".team-member-details .social-links-member a").visible();
//     $(this).find(".team-member-details").css({
//         top: "-65px",
//         transition: "top 500ms"
//     });
// });

// $(".team-card").mouseout(function() {
//     var a = $(this);
//     $(this).find(".team-member-details .social-links-member a").invisible();
//     $(this).find(".team-member-details").css({
//         top: "-20px",
//         transition: "top 500ms"
//     });
// });

$(function() {
    $( "li.menu" ).click(function() {
        $("li.menu").removeClass('selected');
        $(this).addClass( "selected" );
    });

    $(".team-member").on("mouseover", function() {
        $(this).find(".team-member-social").css({
                display:'flex',
                top:"-65px",
                transition: "top 500ms"
            });
    }).on("mouseleave", function() {
           $(this).find(".team-member-social").css({
                display:'none',
                top:"-50px",
                transition: "top 500ms"
            });
    });

});