<template>
    <section class="container-principal">
        <form  @submit.prevent="handleSubmit" action="POST">
            <section class="conjunto">
                <label for="email">Email</label>
                <input v-model="email" name="email" type="email" placeholder="e-mail" required>
            </section>
            
            <section class="conjunto">
                <label for="senha">Senha</label>
                <input v-model="senha" name="senha" type="password" placeholder="senha" required>
            </section>

            <button type="submit">Entrar</button>
        </form>
    </section>
</template>

<script>
import { capturarIdDependente } from '../scripts/login'

export default {
    data() {
        return {
            email: '',
            senha: '',
            token: ''
        }
    },
    mounted() {
        
    },
    methods: {
        async handleSubmit(e) {
            await fetch("http://localhost:8081/api/login-dependente", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.email,
                    senha: this.senha
                })
            })
                .then(res => res.json())
                .then(data => this.token = data.token)
                .catch(err => console.log(err))
            sessionStorage.setItem('token', this.token)
            sessionStorage.setItem('email', this.email)
            console.log(this.token)
            console.log(e)
            await capturarIdDependente(e, this.token)
            this.$router.push('/conta');
        }
    }
}

</script>

<style>

.container-principal {
    min-width: 50%;
    max-width: 80%;
    margin: auto;
}

form {
    max-width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.conjunto {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    row-gap: 1rem;
    margin: 10px 0px;
}

.conjunto label {
    align-self: flex-start;
    
}

input {
    display: block;
    margin: auto;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: none;
    border-bottom: 1px #ccc solid;
}

button {
    width: 35%;
    padding: 0.3rem;
    background-color: #355B3E;
    border: none;
    border-radius: 5px;
    color: aliceblue;
    cursor: pointer;
}



</style>