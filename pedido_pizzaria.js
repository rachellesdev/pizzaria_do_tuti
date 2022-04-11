function pedir(){

    var txts = document.getElementById('sabor')
    var sab = String(txts.value)
    var txtp = document.getElementById('pag')
    var pagm = String(txtp.value)
    var res = document.getElementById('res')
    

    if(sab == 'Marguerita' || sab == 'marguerita' && pagm == 'Dinheiro' || pagm == 'dinheiro'){
        res.innerHTML = `Sua pizza de <strong>${sab}</strong> está sendo produzida! E você ganhou refri grátis!`
    }
    else if(sab == 'Marguerita' || sab == 'marguerita'){
        res.innerHTML = `Sua pizza de <strong>${sab}</strong> está sendo produzida!`
    }
    else if(sab == '4 queijos' && pagm == 'Dinheiro' || pagm == 'dinheiro'){
        res.innerHTML = `Sua pizza de <strong>${sab}</strong> está sendo produzida! E você ganhou refri grátis!`
    }
    else if(sab == '4 queijos'){
        res.innerHTML = `Sua pizza de <strong>${sab}</strong> está sendo produzida!`
    }
    else if(sab == 'Calabresa' || sab == 'calabresa' && pagm == 'Dinheiro' || pagm == 'dinheiro'){
        res.innerHTML = `Sua pizza de <strong>${sab}</strong> está sendo produzida! E você ganhou refri grátis!`
    }
    else if(sab == 'Calabresa' || sab == 'calabresa'){
        res.innerHTML = `Sua pizza de <strong>${sab}</strong> está sendo produzida!`
    }
    else{
        res.innerHTML = `Não temos esse sabor!`
    }       

}