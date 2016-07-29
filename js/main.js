$('#interesttitle').click(function () {
    $('#interestslist').slideToggle('slow', function () {
    // Toggles to show and hide list of interests on click
    });
});

$('#share').jsSocials({
    shares: ['twitter', 'facebook', 'linkedin']
});
