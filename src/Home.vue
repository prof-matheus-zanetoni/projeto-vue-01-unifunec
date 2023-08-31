<template>
    <div class="card position-absolute top-50 start-50 translate-middle border rounded shadow">
        <div class="card-header text-center">
            <h1>Menu principal do projeto calculadora</h1>
        </div>
        <div class="card-body">
            <div class="row row-cols-1 row-cols-lg-2 g-2">
                <div class="col d-grid gap-2">
                    <router-link to="soma" class="btn btn-success">Soma</router-link>
                    <router-link to="subtracao" class="btn btn-primary">Subtração</router-link>
                    <router-link to="multiplicacao" class="btn btn-secondary">Multiplicação</router-link>
                    <router-link to="divisao" class="btn btn-info">Divisão</router-link>
                    <router-link to="fatorial" class="btn btn-success">Fatorial</router-link>
                    <router-link to="media" class="btn btn-primary">Média</router-link>
                    <router-link to="parImpar" class="btn btn-secondary">Par ou ímpar</router-link>
                </div>
                <div class="col d-grid gap-2">
                    <router-link to="potencia" class="btn btn-info">Potência</router-link>
                    <router-link to="primo" class="btn btn-success">Número primo</router-link>
                    <router-link to="raizCubica" class="btn btn-primary">Raiz cúbica</router-link>
                    <router-link to="raizQuadrada" class="btn btn-secondary">Raiz quadrada</router-link>
                    <router-link to="somaImpares" class="btn btn-info">Soma dos números ímpares</router-link>
                    <router-link to="somaPares" class="btn btn-success">Soma dos números pares</router-link>
                    <router-link to="termial" class="btn btn-primary">Termial</router-link>
                </div>
            </div>
        </div>
        <div class="card-footer text-center">
            Copyright &copy; {{ new Date().getFullYear() }}
        </div>
    </div>
</template>