export class NavBar {
  constructor() {

  }
  attached(){

    $('.toggle-nav').on('click', function(e) {
      e.preventDefault();
      $('.content').toggleClass('isOpen');
    });
  }
}
