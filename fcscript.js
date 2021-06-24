function custom_mode() {
    var advanced__settings = document.getElementById("dimension-input");
    if (advanced__settings.style.visibility == "visible") {
        advanced__settings.style.visibility = "hidden";
    }
    else {
        advanced__settings.style.visibility = "visible";
    }
}

function custom_size() {
    var box_width = document.getElementById("width");
    var box_height = document.getElementById("height");
    generator.style.width = box_width.value + 'px';
    generator.style.height = box_height.value + 'px';

    var sh = (parseInt(box_height.value) + 14) + 'px';
    $(".left,.right").css("width", sh);
    var sw = (parseInt(box_width.value) + 14) + 'px';
    $(".top,.bottom").css("width", sw);
}