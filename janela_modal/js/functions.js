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
        var el = $('body,.closeBtn');

        el.click(function(){
            $('.bg').fadeOut();
        })
        
        $('.form').click(function(e){
            e.stopImmediatePropagation()
        })
    }

    $('form#form1').submit(function(){
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        
        
    })
});
