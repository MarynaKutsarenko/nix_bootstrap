const progress = $('#progress');


window.addEventListener('scroll', progressBar);

function progressBar(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScroll / windowHeight * 100;

    progress.css('width', percent + '%');
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

bootstrapValidate('#inputName', 'max:10:Your name must not be longer than 10 characters');
bootstrapValidate('#inputEmail', 'email:Enter a valid email address');

const handler = e => {
    const value = e.value;
    e.value = value.replace(/[A-Za-zA-Яа-яЁё]/g, '');
}