export async function capturarId(e, token) {

    const email = e.target[0].value

    await fetch(`http://localhost:8081/api/responsavel/id/${email}`, {
        method: "GET",
        headers: {
            "Authorization": token
        }
    })
        .then(res => res.json())
        .then(data => sessionStorage.setItem('id', data.id))
        .catch(err => console.log(err))
    sessionStorage.setItem('email', email)
    console.log(e)

}

export async function capturarIdDependente(e, token) {

    const email = e.target[0].value

    await fetch(`http://localhost:8081/api/dependente/id/${email}`, {
        method: "GET",
        headers: {
            "Authorization": token
        }
    })
        .then(res => res.json())
        .then(data => sessionStorage.setItem('id', data.id))
        .catch(err => console.log(err))
    sessionStorage.setItem('email', email)
    console.log(e)

}