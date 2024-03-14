<template>
    <section>
        <h1>O seu saldo é</h1>
        <h2>{{ saldo }}</h2>
    </section>
</template>

<script>
import { getSaldo } from '../scripts/getSaldo'
 
export default {
    data() {
        return {
            saldo: 0
        }
    },
    async created() {
        this.saldo = await getSaldo();
    },
}

</script>

<style>
section {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

h1 {
    font-size: 4rem;
    color: black;
}

h2 {
    font-size: 2rem;
    color: #387346;
}
</style>