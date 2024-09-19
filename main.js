$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');

        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        if ($('ul li:not(.placeholder)').length > 0) {
            $('.placeholder').hide();
        }

        $('#nome-tarefa').val('');
    });

    if ($('ul li:not(.placeholder)').length > 0) {
        $('.placeholder').hide();
    } else {
        $('.placeholder').show();
    }

    $('ul').on('click', 'li', function() {
        $(this).find('p').toggleClass('strike-through');
    })
});