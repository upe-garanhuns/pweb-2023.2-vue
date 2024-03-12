<template>
    <section class="container-principal">
        <form  @submit.prevent="handleSubmit" action="POST">
            <section class="conjunto">
                <label for="nome">Nome:</label>
                <input v-model="nome" name="name" type="text" placeholder="nome" required>
            </section>

            <section class="conjunto">
                <label for="sobrenome">Sobrenome:</label>
                <input v-model="sobrenome" name="sobrenome" type="text" placeholder="sobrenome" required>
            </section>

            <section class="conjunto">
                <label for="email">Email</label>
                <input v-model="email" name="email" type="email" placeholder="e-mail" required>
            </section>
            
            <section class="conjunto">
                <label for="senha">Senha</label>
                <input v-model="senha" name="senha" type="password" placeholder="senha" required>
            </section>

            <button type="submit">Cadastrar</button>
        </form>
    </section>
</template>

<script>
import { cadastrarResponsavel, cadastrarDependente } from '../scripts/cadastrar.js'


export default {
    data() {
        return {
            nome: '',
            sobrenome: '',
            email: '',
            senha: '',
            token: '',
            url: window.location.href.toString().split("/").pop()
        }
    },
    mounted() {
        
    },
    methods: {
        async handleSubmit(e) {
            let cadastro
            if (this.url === "cadastro") {
                await cadastrarResponsavel(e)
            } else if (this.url == "home") {
               await cadastrarDependente(e);
            }            
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
    color:aliceblue;
    cursor: pointer;
}



</style>