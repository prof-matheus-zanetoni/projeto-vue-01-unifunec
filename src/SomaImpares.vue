<template>
    <div class="position-absolute top-50 start-50 translate-middle border p-5 rounded shadow">
        <h1 class="text-center">Soma dos números ímpares</h1>
        <form @submit.prevent="calcularSoma()">
            <div class="col">
                <label for="inicio">Início do intervalo</label>
                <input type="number" name="inicio" id="inicio" :disabled="campoDesabilitado" class="form-control" v-model="inicio" />
            </div>
            <div class="col mt-3">
                <label for="fim">Fim do intervalo</label>
                <input type="number" name="fim" id="fim" :disabled="campoDesabilitado" class="form-control" v-model="fim" />
            </div>
            <div class="col text-center mt-3 d-grid gap-2">
                <button type="submit" class="btn btn-success">Calcular</button>
                <button type="button" @click="limparReferencias()" class="btn btn-secondary">Limpar</button>
                <router-link to="/" class="btn btn-warning">Voltar</router-link>
            </div>
        </form>
        <h3 v-if="somaImpares != null" class="mt-3 text-center">A soma dos números ímpares entre {{ inicio }} e {{ fim }} é {{ somaImpares }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const inicio = ref(0)
const fim = ref(0)
const somaImpares = ref(null)
const campoDesabilitado = ref(false)

function calcularSoma() {
    campoDesabilitado.value = true
    for(var contador = inicio.value; contador <= fim.value; contador++) {
        if(contador % 2 !== 0) {
            somaImpares.value += contador
        }
    }
}

function limparReferencias() {
    campoDesabilitado.value = false
    inicio.value = fim.value = 0
    somaImpares.value = null
}
</script>