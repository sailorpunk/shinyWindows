$(document).ready(function() {
    const copyToClipboard = _ => {
        let temp = $('<input id="huh">');
        $('body').append(temp);
        $('#huh').val('shinywindowz@gmail.com');
        $('#huh').select();
        document.execCommand('copy');
        temp.remove();
        alert('Email address copied to clipboard.')
      }

      $('.emailCopied').click(function() {
        copyToClipboard();
      });
});
