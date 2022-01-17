jQuery(document).ready(function ($) {
    $('#edit').hide();
    $('#oneText').focus();

    if (localStorage.getItem('oneTextHtml') && localStorage.getItem('oneTextHtml') != '') {
        $('#oneTextContainer').html(localStorage.getItem('oneTextHtml'));
        $('#oneText').val(localStorage.getItem('oneTextMarkdown')).hide();
        $('#edit').show();
    }

    let converter = new showdown.Converter();

    $(document).on('keyup', '#oneText', function (e) {
        if (e.key === 'Enter') {
            if ($(this).val() !== '') {
                const html = converter.makeHtml($(this).val());

                $('#oneTextContainer').html(html);
                localStorage.setItem('oneTextMarkdown', $(this).val())
                localStorage.setItem('oneTextHtml', html);

                showHtml();
            }
        } else if (e.key === 'Escape') {
            if (localStorage.getItem('oneTextHtml') && localStorage.getItem('oneTextHtml') != '') {
                showHtml();
            }
        }
    });

    $('#edit').click(function () {
        $('#oneTextContainer').hide();
        $('#oneText').show().focus();
        $(this).hide();
    });

    function showHtml() {
        $('#oneTextContainer').show();
        $('#oneText').hide();
        $('#edit').show();
    }
});