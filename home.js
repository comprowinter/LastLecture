function myFunction(appear) {
  document.getElementById(appear).classList.toggle("show");
}
// window.getElementsByClassName("").addEventListener("click", myFunction)

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event, dropdownNum) {
//   if (!event.target.matches('.dropbutton')) {
//     var dropdowns = document.getElementsByClassName(dropdownNum);
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }