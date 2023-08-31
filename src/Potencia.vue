<template>
    <div class="position-absolute top-50 start-50 translate-middle border p-5 rounded shadow">
        <h1 class="text-center">Potência</h1>
        <form @submit.prevent="calcularPotencia()">
            <div class="col">
                <label for="base">Base</label>
                <input type="number" name="base" id="base" :disabled="campoDesabilitado" class="form-control" v-model="base" />
            </div>
            <div class="col">
                <label for="expoente">Expoente</label>
                <input type="number" name="expoente" id="expoente" :disabled="campoDesabilitado" class="form-control" v-model="expoente" />
            </div>
            <div class="col text-center mt-3 d-grid gap-2">
                <button type="submit" class="btn btn-success">Calcular</button>
                <button type="button" @click="limparReferencias()" class="btn btn-secondary">Limpar</button>
                <router-link to="/" class="btn btn-warning">Voltar</router-link>
            </div>
        </form>
        <h3 v-if="potencia != null" class="mt-3 text-center">{{ base }} elevado a {{ expoente }} é {{ potencia }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const base = ref(0)
const expoente = ref(0)
const potencia = ref(null)
const campoDesabilitado = ref(false)

function calcularPotencia() {
    campoDesabilitado.value = true
    potencia.value = base.value ** expoente.value
}

function limparReferencias() {
    campoDesabilitado.value = false
    base.value = expoente.value = 0
    potencia.value = null
}
</script>