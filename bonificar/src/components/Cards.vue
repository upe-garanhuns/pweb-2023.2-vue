<template>
    <section v-for="dependente in lista" :key="dependente.id" class="dependente-container">
        <section class="dependente-id">{{ dependente.email }}</section>
        <section class="dependente-dados">
            <p class="dependente-nome">{{ dependente.nome }}</p>
            <p class="dependente-saldo">{{ calcularSaldo(dependente.saldoEmCentavos) }}</p>
        </section>
    </section>
</template>

<script>

export default {
    inheritAttrs:false,
    props: ['lista'],
    data() {
        return {
        }
    },
    methods: {
        calcularSaldo(saldo) {
            return 'R$' + (saldo / 100)
        }
    }
}


</script>

<style>

.dependente-container {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 16px;
    width: 250px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 100px;
    
  }
  
  .dependente-id {
    background-color: #355B3E;
    color: #fff;
    padding: 4px;
    text-align: center;
    border-radius: 2px;
  }
  
  .dependente-dados {
    padding-left: 4px;
    margin-top: 0px;
  }
  
  .dependente-nome {
    font-weight: bold;
    height: 20px;
  }
  
  .dependente-saldo {
    font-weight: lighter;
    height: 20px;
  }

</style>