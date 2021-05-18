function LoadPage(name) {
    window.open('./html/pages/'+name+'.html', '_self');
}

function selectYear(year) {
    var lectures = document.querySelectorAll(".item")

    for (i = 0; i < lectures.length; ++i) {
        if (lectures[i].classList.contains(year)) {
            lectures[i].style.display = "grid";
        }
        else {
            lectures[i].style.display = "none";
        }
    }
}