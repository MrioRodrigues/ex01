function carregar() {
    var msg = window.document.getElementById('msg')
    var msgh = window.document.getElementById('msgh')
    var img = window.document.getElementById('imagem')
    var alt = window.document.getElementsByName('alt')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msgh.innerHTML = `Agora são ${hora} horas e ${min} min.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = 'bom dia meu amor'
        img.src = 'imagens/manha.png'
        document.body.style.background = '#DEB894'
    } else if (hora >= 12 && hora < 18) { 
        msg.innerHTML = 'boa tarde meu amor'  
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#D58933'    
    } else {
        msg.innerHTML = 'boa noite meu amor'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#493652'
    }
}  