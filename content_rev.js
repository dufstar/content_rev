
$(".content-holder").on("scroll", function() {
	if ($(".content-holder").scrollTop() > 88) {
		$(".content-navbar").addClass("content-navbar-fixed");
		$(".content-main").addClass("content-main-fixed");
		$("#nav").prependTo("body");
	} else {
		$(".content-navbar").removeClass("content-navbar-fixed");
		$(".content-main").removeClass("content-main-fixed");
		$("#nav").prependTo(".content-holder");
	}
});

$("#path-background").click(function() {
	$(".content-holder").toggleClass("show-content");
	$(".blue-overlay").toggleClass("show-blue");
	$("#tabs").toggleClass("show-tabs");
})

$(".learn-button").click(function() {
	if ($(this).hasClass("learning")) {
		$(this).text("Learn");
	} else {
		$(this).text("Learning");
	}
	$(this).toggleClass("learning");
});

$(".recommend-button").click(function() {
	$(".recommend-back-blue").toggle();
	$(".recommend-back").toggleClass("recommend-active");
	$(".recommend-icon-white").toggle();
	$(".recommend-icon-blue").toggle();
	$(this).toggleClass("right-side-button-clicked");
	$(".content-holder").toggleClass("no-scroll");
	$("#new-rec").toggleClass("long");
});

$(".subscribe-button").click(function() {
	$(".subscribe-back").toggleClass("recommend-active");
	$(".subscribe-icon-white").toggle();
	$(".subscribe-icon-blue").toggle();
	$(this).toggleClass("right-side-button-clicked");
	$(this).toggleClass("subscribed");
	if ($(this).hasClass("subscribed")) {
		$(".subscribe-button p").text("SUBSCRIBED");
	} else {
		$(".subscribe-button p").text("SUBSCRIBE");
	}
});

$(".content-section").click(function() {
	$(this).toggleClass("viewing-section");
	$(".see-more-gradient").toggle();
});

$(".left-arrow").mouseenter(function() {
	$(".left-tab").css("opacity","1");
});

$(".left-arrow").mouseleave(function() {
	$(".left-tab").css("opacity","0");
});

$(".right-arrow").mouseenter(function() {
	$(".right-tab").css("opacity","1");
});

$(".right-arrow").mouseleave(function() {
	$(".right-tab").css("opacity","0");
});





