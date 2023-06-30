<script setup>
    import { formatAmount, dateFormat } from '../helpers'

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