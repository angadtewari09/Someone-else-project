 window.onscroll = function() {
   /*Scroll to home about gallery and contact section of the webpage*/
   /*Section 1*/
  document.getElementById('home').addEventListener('click' , function(event) {
      event.preventDefault();
      document.getElementById('sectionhome').scrollIntoView();
  });
  /*Section 2*/
  document.getElementById('projects').addEventListener('click' , function(event) {
    event.preventDefault();
    document.getElementById('aboutme').scrollIntoView();
});
/*Section 3*/
document.getElementById('skills').addEventListener('click' , function(event) {
  event.preventDefault();
  document.getElementById('gallery').scrollIntoView();
});
/*section 4*/
document.getElementById('contact').addEventListener('click' , function(event) {
  event.preventDefault();
  document.getElementById('contacts').scrollIntoView();
});
  } 