<template>
    <div class="card position-absolute top-50 start-50
    translate-middle border rounded">
        <div class="card-header">
            <h1>Menu principal do projeto calculadora</h1>
        </div>
        <div class="card-body d-grid gap-2">
            <router-link to="soma" class="btn btn-success">
                Soma
            </router-link>
            <router-link to="subtracao" class="btn btn-primary">
                Subtração
            </router-link>
            <router-link to="multiplicacao" class="btn btn-secondary">
                Multiplicação
            </router-link>
            <router-link to="divisao" class="btn btn-info">
                Divisão
            </router-link>
        </div>
    </div>
</template>