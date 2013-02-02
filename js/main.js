$('.card').hover(
  function(){
    var me = this;
    $('.card').each( function() {
      if(this != me) {
        $(this).addClass('unfocused');
      }
    });
  },
  function(){
    var me = this;
    $('.card').each( function() {
      if(this != me) {
        $(this).removeClass('unfocused');
      }
    });
  }
);
