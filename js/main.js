const progress = $('#progress');
const getInfo = $('#getInfo');

//прогресс бар
window.addEventListener('scroll', progressBar);

function progressBar(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScroll / windowHeight * 100;

    progress.css('width', percent + '%');
}

//popo hover
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

// валидация формы
bootstrapValidate('#inputName', 'max:10:Your name must not be longer than 10 characters');
bootstrapValidate('#inputEmail', 'email:Enter a valid email address');

const handler = e => {
    const value = e.value;
    e.value = value.replace(/[A-Za-zA-Яа-яЁё]/g, '');
}

/// запрет на копирование и просмотр кода страницы 
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
})

/// простой пользователя
let timer;
let t;

window.onblur = () => {
    timer = setInterval(() => {
        window.location.href = 'logout.html';
    }, 50000);
}

window.onfocus = () => {
    clearTimeout(timer);
}

/// получить info о браузере
getInfo.bind('click', function (e) {
    e.preventDefault();
    this.textContent = navigator.sayswho;
})

navigator.sayswho= (function(){
    let ua = navigator.userAgent, tem, 
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }

    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }

    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    
    return M.join(' ');
})();

// якорный переход
$("a.scroll-to").bind("click", function(e){
    e.preventDefault();
    let anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 1000);
}); 