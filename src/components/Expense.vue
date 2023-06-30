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
        suscriptions : IconSuscriptions
    }

    const props = defineProps({
        expense: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class=" expense shadow">
        <div class="contenido">
            <img
                :src="iconsDiccionary[expense.category]"
                alt="Icon"
                class="Icon"
            />

            <div class="details">
                <p class="category">{{ expense.category }}</p>
            </div>
        </div>
        <p class="amount">{{ formatAmount(expense.amount) }}</p>
        <p class="name">{{ expense.name}}</p>

        <p class="date">{{ dateFormat(expense.date) }}</p>
    </div>
</template>

<style scoped>
</style>