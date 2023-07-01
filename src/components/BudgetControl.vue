<script setup>
    import CircleProgress from 'vue3-circle-progress-bar'
    import "vue3-circle-progress-bar/dist/circle-progress-bar.css"
    import { formatAmount } from '../helpers'
const props = defineProps({
    budget: {
        type: Number,
        required: true
    },
    available: {
        type: Number,
        required: true
    },
    budgetSpent: {
        type: Number,
        required: true
    }
})

    defineEmits(['reset-app'])

</script>
<template>
    <div class="two-columns">
        <div class="contenedor-grafico">
            <CircleProgress
                :percent="20"
                :size="250"
                :border-width="30"
                :border-bg-width="30"
                 fill-color="#3b82f6"
                 empty-color="#e1e1e1"
            />
        </div>
        <div class="container-budget">
            <button
                type="button"
                class="reset-app"
                @click="$emit('reset-app')"
            >
                Reset
            </button>
            <p>
                <span>Budget</span>
                {{ formatAmount(budget) }}
            </p>
            <p>
                <span>Available</span>
                {{ formatAmount(available) }}
            </p>
            <p>
                <span>Spent</span>
                {{ formatAmount(budgetSpent)}}
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