function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var alt = window.document.getElementsByName('alt')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#DEB894'
    } else if (hora >= 12 && hora < 18) {   
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#D58933'    
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#493652'
    }
}  