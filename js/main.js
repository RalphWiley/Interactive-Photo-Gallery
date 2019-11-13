

$('.search').on('keyup', $('#search-input'), function(){
    let search = $('#search-input').val().toLowerCase();

    for (let i = 0; i < $('.col').length; i ++){
        let text = $('a').eq(i).attr('data-title').toLowerCase();
        let box = $('.col a');
        

        if (text.indexOf(search) === -1) {

          $(box).eq(i).parent().hide();

        } else {

          $(box).eq(i).parent().show();

        }
    }
    
});