// function hidesidbar() {
//   var x = document.getElementById("sidebar__namep");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

function hidesidbar() {
  document.querySelectorAll(".sidebar__namep").forEach(function (hiddsidebar) {
    //  element.className += " sidebarremove";
//query multiple ids
    hiddsidebar.className += " sidebarremove";
  });
}

function hidesaerchbar() {
  var hiddeformhid = document.getElementById("hidde_mobile");

  var hiddesearch = document.getElementById("searchtop");
  var searchhide = document.getElementById("searchhide");
  var topform = document.getElementById("topform");
  var closearrow = document.getElementById("closearrow");

  hiddeformhid.classList.add("topform__hidden");
  hiddesearch.classList.add("searchtop_form_holder");
  //
  searchhide.classList.add("searchhideopen");
  closearrow.classList.add("closearrows");

  searchhide.classList.remove("searchhide");
  topform.classList.remove("topform_idden");
}

function hide_forms_from() {
  var hiddeformhid = document.getElementById("hidde_mobile");

  var hiddesearch = document.getElementById("searchtop");
  var searchhide = document.getElementById("searchhide");
  var topform = document.getElementById("topform");
  var closearrow = document.getElementById("closearrow");

  hiddeformhid.classList.remove("topform__hidden");
  hiddesearch.classList.remove("searchtop_form_holder");
  //remove

  closearrow.classList.add("closearrow");
  closearrow.classList.remove("closearrows");
  searchhide.classList.add("searchhideopen");
  //   searchhide.classList.add("searchhide");

  searchhide.classList.add("searchhide");
  topform.classList.add("topform_idden");
}
