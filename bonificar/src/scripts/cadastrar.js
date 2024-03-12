export async function cadastrarResponsavel(e) {
    await fetch("http://localhost:8081/api/cadastro", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: e.target[0].value,
            sobrenome: e.target[1].value,
            email: e.target[2].value,
            senha: e.target[3].value
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    console.log(e)
}

export async function cadastrarDependente(e) {
    const token = sessionStorage.getItem('token')
    await fetch("http://localhost:8081/api/cadastro-dependente", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            nome: e.target[0].value,
            sobrenome: e.target[1].value,
            email: e.target[2].value,
            senha: e.target[3].value,
            saldoEmCentavos: e.target[4].value,
            fkResponsavel: sessionStorage.getItem('id')
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    console.log(e)
}

export async function cadastrarAtividade(e) {
    const token = sessionStorage.getItem('token')
    await fetch("http://localhost:8081/api/atividade", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            atividade: e.target[0].value,
            status: e.target[1].value,
            valorEmCentavos: e.target[2].value,
            frequencia: e.target[3].value,
            fkDependente: e.target[4].value,
            fkResponsavel: sessionStorage.getItem('id')
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    console.log(e)
}