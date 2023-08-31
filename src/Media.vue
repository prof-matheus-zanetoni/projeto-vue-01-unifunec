<template>
    <div class="position-absolute top-50 start-50 translate-middle border p-5 rounded shadow">
        <h1 class="text-center">Média aritmética</h1>
        <form @submit.prevent="calcularMedia()">
            <div class="col">
                <label for="n1">1º Número</label>
                <input type="number" name="n1" id="n1" :disabled="campoDesabilitado" class="form-control" v-model="n1" />
            </div>
            <div class="col mt-3">
                <label for="n2">2º Número</label>
                <input type="number" name="n2" id="n2" :disabled="campoDesabilitado" class="form-control" v-model="n2" />
            </div>
            <div class="col mt-3">
                <label for="n3">3º Número</label>
                <input type="number" name="n3" id="n3" :disabled="campoDesabilitado" class="form-control" v-model="n3" />
            </div>
            <div class="col mt-3">
                <label for="n4">4º Número</label>
                <input type="number" name="n4" id="n4" :disabled="campoDesabilitado" class="form-control" v-model="n4" />
            </div>
            <div class="col text-center mt-3 d-grid gap-2">
                <button type="submit" class="btn btn-success">Calcular</button>
                <button type="button" @click="limparReferencias()" class="btn btn-secondary">Limpar</button>
                <router-link to="/" class="btn btn-warning">Voltar</router-link>
            </div>
        </form>
        <h3 v-if="media != null" class="mt-3 text-center">A média é {{ media }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const n1 = ref(0)
const n2 = ref(0)
const n3 = ref(0)
const n4 = ref(0)
const media = ref(null)
const campoDesabilitado = ref(false)

function calcularMedia() {
    campoDesabilitado.value = true
    media.value = (n1.value + n2.value + n3.value + n4.value) / 4
}

function limparReferencias() {
    campoDesabilitado.value = false
    n1.value = n2.value = n3.value = n4.value = 0
    media.value = null
}
</script>