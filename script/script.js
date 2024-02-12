//Functions
$(window).on("load", () => {
    preloader();
    $('[data-scroll-down]').bind('click', () => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('[data-section-type="services"]').offset().top - 75
        }, 1000);
    });
    $('[data-contact="phone"]').bind('click', () => {
        window.location.href = `tel: ${phoneNumber}`;
    });
});
//Preloader
function preloader () {
    const preloader_element = $('[data-element="preloader"]');
    preloader_element.addClass("preloader_hidding");
    preloader_element.on("transitionend", () => {
        preloader_element.addClass("preloader_almost_hidden");
        $("body").css("overflow", "auto");
        preloader_element.on("transitionend", () => {
            preloader_element.addClass("hidden_element");
            preloader_element.remove();
            $(".horizontal_line").addClass("horizontal_line--active");
        });
    });
}