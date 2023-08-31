<template>
    <div class="position-absolute top-50 start-50 translate-middle border p-5 rounded shadow">
        <h1 class="text-center">Raíz quadrada</h1>
        <form @submit.prevent="calcularRaiz()">
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
        <h3 v-if="raizQuadrada != null" class="mt-3 text-center">A raiz quadrada de {{ num }} é {{ raizQuadrada }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(0)
const raizQuadrada = ref(null)
const campoDesabilitado = ref(false)

function calcularRaiz() {
    if(num.value < 0) {
        alert("Não existe raiz quadrada real de número negativo")
    } else {
        campoDesabilitado.value = true
        raizQuadrada.value = Math.sqrt(num.value)
    }
}

function limparReferencias() {
    campoDesabilitado.value = false
    num.value = 0
    raizQuadrada.value = null
}
</script>