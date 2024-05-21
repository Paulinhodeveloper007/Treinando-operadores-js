var tanqueDoCarro = 40
        var distanciaPecorridaEmGasolina = 480.000
        var consumoDegasolina = distanciaPecorridaEmGasolina/tanqueDoCarro
        var distanciaPecorridaEmAlcool = 300.000
        var consumoDoAlcool = distanciaPecorridaEmAlcool/tanqueDoCarro
        var quantidadedegasolina = window.prompt("digite a quantidade de gasolina")
        var quantidadedealcool = window.prompt("digite a quantidade de alcool")
        var preçodagasolina = quantidadedegasolina*2.90
        var preçodoalcool = quantidadedealcool*2.40
        alert("o consumo de gasolina com o tanque cheio é "+consumoDegasolina)
        alert("o consumo de alcool é com o tanque cheio é  "+consumoDoAlcool)
        alert("o preço da gasolina por litro é "+preçodagasolina)
        alert("o preço do alcool por litro é "+preçodoalcool)
