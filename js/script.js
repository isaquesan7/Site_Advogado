
var textos = ["Criminal", "Eleitoral", "Trabalhista", "Previdenciário"];
var atual = 0;

$('#bannerh3').text(textos[atual++]);
    setInterval(function() {
        $('#bannerh3').fadeOut(function() {
            if (atual >= textos.length) atual = 0;
            $('#bannerh3').text(textos[atual++]).fadeIn();
        });
}, 2000);

function menu(){
        
    let menuMobile = $('.menu-mobile');

    if(menuMobile.hasClass('open')){
        menuMobile.removeClass('open');
        menuMobile.addClass('close');
    }else{
        menuMobile.removeClass('close');
        menuMobile.addClass('open');
    }

}