<template>
    <div class="position-absolute top-50 start-50 translate-middle border p-5 rounded shadow">
        <h1 class="text-center">Termial</h1>
        <form @submit.prevent="calcularTermial()">
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
        <h3 v-if="termial != null" class="mt-3 text-center">{{ num }}? = {{ termial }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(0)
const termial = ref(null)
const campoDesabilitado = ref(false)

function calcularTermial() {
    campoDesabilitado.value = true
    termial.value = 0
    for(var contador = num.value; contador >= 1; contador--) {
        termial.value += contador
    }
}

function limparReferencias() {
    campoDesabilitado.value = false
    num.value = 0
    termial.value = null
}
</script>