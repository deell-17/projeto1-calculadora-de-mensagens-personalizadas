let nome = "Chizuko"
let idade = 20
let cidade = 'Tokyo'
let proficao='Assasina de aluguel'
let anoAtual = 2025
let anoNascimento = parseInt(idade) - parseInt(anoAtual)

let salario = 5000
let bonus =  1000 
let salarioBonus = parseInt(salario) + parseInt(bonus) 
let salarioAno = parseInt(salarioBonus)   * 12 
let salarioAnoDobro = parseInt(salarioAno) * 2 

alert(` ========= RELATÓRIO DO USUÁRIO =========
Nome: ${nome}
Idade: ${idade}
Ano de nascimento: ${anoNascimento}
Cidade: ${cidade}
Profissão: ${proficao}

Salário base: U$${salario}
Bônus: U$${bonus}
Total mensal: U$${salarioBonus}
Total ano: U$${salarioAno}
Total anual (salário dobrado): U$${salarioAnoDobro}
=========================================` 
)
