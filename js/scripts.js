jQuery('.skew-accordion').on('mouseover', '.skew-cont', function() {
    var obj = $(this);
    if(!obj.hasClass('skew-open')) {
        $('.skew-open').removeClass('skew-open');
        obj.addClass('skew-open');
    }
});
