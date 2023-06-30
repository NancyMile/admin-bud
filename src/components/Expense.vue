<script setup>
    import { formatAmount, dateFormat } from '../helpers'
    import IconSavings from '../assets/img/icono_ahorro.svg'
    import IconHome from '../assets/img/icono_casa.svg'
    import IconFood from '../assets/img/icono_comida.svg'
    import IconMiscellaneus from '../assets/img/icono_gastos.svg'
    import IconLeisure from '../assets/img/icono_ocio.svg'
    import IconHealth from '../assets/img/icono_salud.svg'
    import IconSuscriptions from '../assets/img/icono_suscripciones.svg'

    const iconsDiccionary = {
        savings : IconSavings,
        food : IconFood,
        home : IconHome,
        miscellaneus : IconMiscellaneus,
        leisure : IconLeisure,
        health : IconHealth,
        subscriptions : IconSuscriptions
    }

    const props = defineProps({
        expense: {
            type: Object,
            required: true
        }
    })

    defineEmits(['select-expense'])
</script>

<template>
    <div class=" expense shadow">
        <div class="container">
            <img
                :src="iconsDiccionary[expense.category]"
                alt="Icon"
                class="icon"
            />
            <div class="details">
                <p class="category">{{ expense.category }}</p>
                <p
                    class="name"
                    @click="$emit('select-expense',expense.id)"
                >
                    {{ expense.name}}</p>
                <p class="date">
                    Date:
                    <span>{{ dateFormat(expense.date) }}</span>
                </p>
            </div>
        </div>
        <p class="amount">{{ formatAmount(expense.amount) }}</p>
    </div>
</template>

<style scoped>
    .expense{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;

    }
    .container{
        display: flex;
        gap: 2rem;

    }
    .icon{
        width: 5rem;
    }
    .details p{
        margin: 0 0 1rem 0;
    }
    .category {
        color: var(--gray);
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 900;
    }
    .name {
        color: var(--dark-gray);
        font-size: 2,4rem;
        font-weight: 700;
        cursor: pointer;

    }
    .date {
        color: var(--dark-gray);
        font-size: 1.6rem;
        font-weight: 900;
    }
    .date span {
        font-weight: 400;
    }
    .amount{
        font-size: 3rem;
        font-weight: 900;
        margin: 0;
    }

</style>