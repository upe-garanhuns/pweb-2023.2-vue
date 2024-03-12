<template>
    <main class="container-principal">
        <section class="secao-botoes">
            <button @click="cadastroDependente" class="botao-cadastrar">Cadastrar Dependente</button>
            <button @click="cadastroAtividade" class="botao-cadastrar">Cadastrar Atividade</button>
        </section>
        <Cards :lista="dependentes"></Cards>
    </main>
</template>

<script>
import Cards from '../components/Cards.vue'

export default {
    components: {
        Cards
    },
    data() {
        return {
            id: '',
            nome: '',
            saldo: 0,
            dependentes: []
        }
    },
    computed: {
        calcularSaldo() {
            return 'R$' + (this.saldo / 100)
        }
    },
    async created() {
        this.dependentes = await fetch('http://localhost:8081/api/dependentes/' + sessionStorage.getItem('id'), {
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
    },
    methods: {
        cadastroDependente() {
            this.$router.push('/cadastro-dependente');
        },
        cadastroAtividade() {
            this.$router.push('/cadastro-atividade');
        }
    }

}


</script>

<style>

.cards {
    right: 400px;
    position:relative;
}

.container-principal {
    width: 100%;
    margin: auto;
}

.secao-botoes{
    display: flex;
    margin: auto;
    justify-content: center;
    column-gap: 20px;
}


.botao-cadastrar {
    max-width: 30%;
    padding: 10px;
    color: white;
    background-color: #355B3E;
    border-radius: 5px;
    border-bottom: none;
    border-right: none;
    border-top: black 1px solid;
    border-left: black 1px solid;
    cursor: pointer;
}

.botao-cadastrar:hover {
    background-color: #568160;
}

.botao-cadastrar:active {
    background-color: #568160;
    border-top: none;
    border-left: none;
    border-bottom: black 1px solid;
    border-right: black 1px solid;
}

.conjunto {
    width: 100%;
}

form {
    margin: 0px 0px;
    max-width: 100%;
    width: 70%;
    align-self: flex-start;
    align-items: flex-start;
}

.container-principal.cadastro {
    align-self: flex-start;
}

</style>./CadastroResponsavel.vue