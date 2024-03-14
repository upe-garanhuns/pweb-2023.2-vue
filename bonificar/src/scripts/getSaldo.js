export async function getSaldo() {
    fetch('http://localhost:8080/api/saldo/' + sessionStorage.getItem('id'), {
        method: "GET",
        headers: {
            "Authorization": sessionStorage.getItem('token')
        }
    })
    .then(res => res.json())
    .then(data => {
        return data
    })
    .catch(err => console.log(err))
}