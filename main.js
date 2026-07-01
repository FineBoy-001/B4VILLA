const scrollRevealOption = {
    distance: "60px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 1000,
});