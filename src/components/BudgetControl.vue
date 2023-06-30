<script setup>
    import imagen from '../assets/img/grafico.jpg'
</script>
<template>
    <div class="two-columns">
        <div class="contenedor-grafico">
            <img
                :src="imagen"
            />
        </div>
        <div class="container-budget">
            <button class="reset-app">
                Reset
            </button>
            <p>
                <span>Budget</span>
                $0
            </p>
            <p>
                <span>Available</span>
                $0
            </p>
            <p>
                <span>Spent</span>
                $0
            </p>
        </div>

    </div>
</template>

<style scoped>
    .two-columns {
        display: flex;
        flex-direction: column;
    }
    .two-columns >:first-child {
        margin-bottom: 3rem;
    }

    @media (min-width: 768px){
        .two-columns {
            flex-direction: row;
            gap: 4rem;
            align-items: center;
        }
        .two-columns > :first-child {
            margin-bottom: 0;
        }
    }
    .container-budget {
        width: 100%;
    }
    .container-budget p {
        font-size: 2rem;
        text-align: center;
        color: var(--dark-gray);
    }
    @media (min-width: 768px) {
        .container-budget p {
            font-size: 2rem;
            text-align: left;
        }
    }
    .container-budget span {
        font-weight: 900;
        color: var(--blue);
    }
    .reset-app {
        background-color: #db2777;
        border: none;
        padding: 1rem;
        width: 100%;
        color: var(--white);
        font-weight: 900;
        text-transform: uppercase;
        border-radius: 1rem;
        transition-property: background-color;
        transition-duration: 30ms;
    }
    .reset-app:hover {
        cursor: pointer;
        background-color: #753552;
    }
</style>