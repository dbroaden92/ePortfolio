function scroll(element, parent) {
    $(parent)[0].scrollIntoView(false);
    $(parent).animate(
        {scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top},
        {duration: 'slow', easing: 'swing'}
    );
}
