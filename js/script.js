
        let log = document.getElementById('log')
        let resultado
        let maquina
        let resultMaquina

        document.getElementById('send').addEventListener('click', () => {

            logicaMaquina()

        })

        function esperar(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }

        function logicaMaquina() {
            maquina = Math.floor((Math.random() * 3) + 1)

            if (maquina === 1) {
                resultMaquina = "pedra"
            } else if (maquina === 2) {
                resultMaquina = "papel"
            } else {
                resultMaquina = "tesoura"
            }

            logicaPlayer(resultMaquina)
        }
        function logicaPlayer(resultMaquina) {
            let selected = document.querySelector('input[name="select"]:checked')

            if (!selected) {
                alert("selecione uma opção")
                return
            }

            let escolhaPlayer = selected.id
            let resultado = ""

            if (escolhaPlayer === resultMaquina) {
                resultado = "e"
            } else if (
                (escolhaPlayer === "pedra" && resultMaquina === "tesoura") ||
                (escolhaPlayer === "papel" && resultMaquina === "pedra") ||
                (escolhaPlayer === "tesoura" && resultMaquina === "papel")
            ) {
                resultado = "w"
            } else {
                resultado = "l"
            }

            resultFinal(resultado, resultMaquina)
        }


        async function resultFinal(resultado, resultMaquina) {
            log.innerHTML = `a maquina jogou ${resultMaquina}`

            log.innerHTML = "pedra..."
            await esperar(500)
            log.innerHTML = "papel..."
            await esperar(500)
            log.innerHTML = "tesoooura..."
            await esperar(500)
            log.innerHTML = `a maquina jogou ${resultMaquina}`
            await esperar(100)

            if (resultado == "l") {
                alert('perdeu')
            } else if (resultado == "w") {
                alert('ganhou')
            } else {
                alert('empate')
            }
        }
