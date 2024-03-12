<template>
    <section class="container-principal">
        <form  @submit.prevent="handleSubmit" action="POST">
            <section class="conjunto">
                <label for="atividade">Atividade:</label>
                <input v-model="atividade" name="atividade" type="text" placeholder="atividade" required>
            </section>

            <section class="conjunto">
                <label for="status">Status:</label>
                <select name="status" id="cars">
                    <option value="CRIADA">Criada</option>
                    <option value="REALIZADA">Realizada</option>
                    <option value="NÃO REALIZADA">Não realizada</option>
                  </select>
            </section>

            <section class="conjunto">
                <label for="valor">Valor:</label>
                <input v-model="valor" name="valor" type="number" required>
            </section>
            
            <section class="conjunto">
                <label for="frequencia">Frequência:</label>
                <select name="frequencia">
                    <option value="DIÁRIA">Diária</option>
                    <option value="SEMANAL">Semanal</option>
                    <option value="QUINZENAL">Quinzenal</option>
                    <option value="MENSAL">Mensal</option>
                  </select>
            </section>

            <section class="conjunto">
                <label for="id">ID do dependente:</label>
                <input v-model="idDependente" name="id" type="text" placeholder="ID" required>
            </section>

            <button @click="irTelaHome" type="submit">Cadastrar</button>
        </form>
    </section>
</template>

<script>
import { cadastrarAtividade } from '../scripts/cadastrar.js'


export default {
    data() {
        return {
            atividade: '',
            status: '',
            frequencia: '',
            token: '',
            valor: 3,
            idDependente: '',
            url: window.location.href.toString().split("/").pop()
        }
    },
    mounted() {
        
    },
    methods: {
        async handleSubmit(e) {
            await cadastrarAtividade(e);        
        },
        irTelaHome() {
            this.$router.push('/home')
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