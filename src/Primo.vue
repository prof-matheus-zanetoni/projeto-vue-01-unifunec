<template>
    <div class="position-absolute top-50 start-50 translate-middle border p-5 rounded shadow">
        <h1 class="text-center">Número primo</h1>
        <form @submit.prevent="calcularPrimo()">
            <div class="col">
                <label for="num">Número</label>
                <input type="number" name="num" id="num" :disabled="campoDesabilitado" class="form-control" v-model="num" />
            </div>
            <div class="col text-center mt-3 d-grid gap-2">
                <button type="submit" class="btn btn-success">Calcular</button>
                <button type="button" @click="limparReferencias()" class="btn btn-secondary">Limpar</button>
                <router-link to="/" class="btn btn-warning">Voltar</router-link>
            </div>
        </form>
        <div class="col" v-if="primo != null">
            <h3 v-if="primo" class="mt-3 text-center">O número {{ num }} não é primo</h3>
            <h3 v-else class="mt-3 text-center">O número {{ num }} é primo</h3>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(0)
const primo = ref(null)
const campoDesabilitado = ref(false)

function calcularPrimo() {
    var qtdDivisores = 0
    if(num.value === 1) {
        alert("O número não pode ser 1")
    } else {
        campoDesabilitado.value = true
        for(var contador = 1; contador <= num.value; contador++) {
            if(num.value % contador === 0) {
                qtdDivisores++
            }
        }
        primo.value = qtdDivisores > 2
    }
}

function limparReferencias() {
    campoDesabilitado.value = false
    num.value = 0
    primo.value = null
}
</script>