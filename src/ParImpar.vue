<template>
    <div class="position-absolute top-50 start-50 translate-middle border p-5 rounded shadow">
        <h1 class="text-center">Par ou ímpar</h1>
        <form @submit.prevent="calcularParImpar()">
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
        <h3 v-if="parImpar != null" class="mt-3 text-center">O número {{ num }} é {{ parImpar }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(0)
const parImpar = ref(null)
const campoDesabilitado = ref(false)

function calcularParImpar() {
    campoDesabilitado.value = true
    parImpar.value = num.value % 2 === 0 ? "par" : "ímpar"
}

function limparReferencias() {
    campoDesabilitado.value = false
    num.value = 0
    parImpar.value = null
}
</script>