$(document).ready(function() {
    const copyToClipboard = _ => {
        let temp = $('<input>');
        $('body').append(temp);
        temp.value = 'shinywindowz@gmail.com';
        temp.select();
        console.log(temp);
        document.execCommand('copy');
        temp.remove();
        alert('Email address copied to clipboard.')
      }

      $('.emailCopied').click(function() {
        copyToClipboard();
      });
});