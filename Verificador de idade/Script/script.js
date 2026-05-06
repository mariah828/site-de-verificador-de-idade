    function enviar() {
        var img = document.getElementById('imagem')
        var detec = document.getElementById('detec')
        var data = new Date()
        var ano2 = data.getFullYear()
        var ano3 = document.getElementById('ano')
        var test = document.querySelector('input[name="test"]:checked') // Desse modo, apenas um radio pode ser selecionado por vez
        var mas = document.getElementById('mas')
        var fem = document.getElementById('fem')
        var ano1 = Number(ano3.value)
        var idade = (ano2 - ano1) 

        if (fem.checked) { // NÃO ESQUECE DO CHECKED PELO AMOR DE DEUS!
            if (idade >= 13 && idade <= 21) {
                detec.innerHTML = (`Detectamos adolescente com ${idade} anos de idade`)
                img.src = 'girl.jpg'
            } else if (idade >= 22 && idade <= 64) {
                detec.innerHTML = (`Detectamos mulher com ${idade} anos de idade`)
                img.src = 'woman.jpg'
            } else if (idade >= 65 && idade <= 129) {
                detec.innerHTML = (`Detectamos idosa com ${idade} anos de idade`)
                img.src = 'idosa2.jpg'
            } else if (idade <= 12 && idade >= 0){
                detec.innerHTML = (`Detectamos criança com ${idade} anos de idade`)
                img.src = 'menina.jpg'
            } else {
                detec.innerHTML = (`Insira um ano válida`)
                img.src = 'default.jpg'
            }
    }    else if (mas.checked) {
            if (idade >= 13 && idade <= 21) {
                detec.innerHTML = (`Detectamos adolescente com ${idade} anos de idade`)
                img.src = 'boy.jpg'
            } else if (idade >= 22 && idade <= 64) {
                detec.innerHTML = (`Detectamos homem com ${idade} anos de idade`)
                img.src = 'men.jpg'
            } else if (idade >= 65 && idade <= 129) {
                detec.innerHTML = (`Detectamos idoso com ${idade} anos de idade`)
                img.src = 'idoso.jpg'
            } else if (idade <= 12 && idade >= 0){
                detec.innerHTML = (`Detectamos criança com ${idade} anos de idade`)
                img.src = 'menino.jpg'
            } else {
                detec.innerHTML = (`Insira um ano válida`)
                img.src = 'default.jpg'
            }
        }
    }
