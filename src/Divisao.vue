<template>
    <div class="position-absolute top-50 start-50 translate-middle border p-5 rounded">
        <h1 class="text-center">Operação de divisão</h1>
        <form @submit.prevent="dividir()">
            <div class="col">
                <label for="n1">1º Número</label>
                <input type="number" name="n1" id="n1" :disabled="campoDesabilitado" class="form-control" v-model="n1" />
            </div>
            <div class="col mt-3">
                <label for="n2">2º Número</label>
                <input type="number" name="n2" id="n2" :disabled="campoDesabilitado" class="form-control" v-model="n2" />
            </div>
            <div class="col text-center mt-3 d-grid gap-2">
                <button type="submit" class="btn btn-success">Dividir</button>
                <button type="button" @click="limparReferencias()" class="btn btn-secondary">Limpar</button>
                <router-link to="/" class="btn btn-warning">Voltar</router-link>
            </div>
        </form>
        <h3 v-if="divisao != null" class="mt-3 text-center">A divisão entre {{ n1 }} e {{ n2 }} é {{ divisao }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const n1 = ref(0)
const n2 = ref(0)
const divisao = ref(null)
const campoDesabilitado = ref(false)

function dividir() {
    campoDesabilitado.value = true
    if(n2.value == 0) {
        alert("O divisor não pode ser zero!");
    } else {
        divisao.value = n1.value / n2.value
    }
}

function limparReferencias() {
    campoDesabilitado.value = false
    n1.value = n2.value = 0
    divisao.value = null
}
</script>