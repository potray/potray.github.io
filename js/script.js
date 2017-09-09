$(document).ready(function () {

  var navAboutMyself = $("#nav-about-myself")
  var navPlannedProjects = $("#nav-planned-projects")
  var navPastProjects = $("#nav-past-projects")
  var headerAboutMyself = $("#header-about-myself")
  var headerPlannedProjects = $("#header-planned-projects")
  var headerPastProjects = $("#header-past-projects")

  function scrollToDiv (div) {
    console.log('animate!')
    $('html, body').animate({
      scrollTop: div.offset().top
    }, 500)
  }

  navAboutMyself.click(function () {
    scrollToDiv(headerAboutMyself)
  })

  navPlannedProjects.click(function () {
    scrollToDiv(headerPlannedProjects)
  })
})