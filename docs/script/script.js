function LoadPage(name) {
    window.open('/pdf/'+name+'.pdf', '_self');
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

function searchTable() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("lectures-search-bar");
    filter = input.value.toUpperCase();
    table = document.getElementById("lectures");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}