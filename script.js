var agora = new Date()
var hora = agora.getHours()
var img = document.getElementById('img')
var msg = document.querySelector('#msg')
var corpo = document.querySelector('.corpo')




if ( 24 > hora && hora < 12) {
        img.style.backgroundImage = 'url(estilos/imagens/manha.jpg)'
        msg.innerHTML = '<p>Agora é de manhã</p>' 
        corpo.style.backgroundImage= 'var(--manha)'
} else if (18 > hora && hora  >= 12) {
        img.style.backgroundImage = 'url(estilos/imagens/tarde.jpg)'
        msg.innerHTML = '<p>Agora é de tarde</p>'
        corpo.style.backgroundImage = 'var(--tarde)'
} else if ( 18 <= hora ) {
        img.style.backgroundImage = 'url(estilos/imagens/noite.jpg)'
        msg.innerHTML = '<p>Agora é de noite</p>'
        corpo.style.backgroundImage = 'var(--noite)'
}