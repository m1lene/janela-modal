$(function(){
    abrirJanela();
    verificarCliqueFechar();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopImmediatePropagation();
            $('.bg').fadeIn();
        });
    }

    function verificarCliqueFechar(){
        var el = $('body');

        el.click(function(){
            $('.bg').fadeOut();
        })

    } 
    
});