<script setup>
    import { ref } from 'vue';
    import Alert from './Alert.vue'

    const budget = ref(0)
    const error = ref('')

    const emit = defineEmits(['set-budget'])


    const setBudget = () => {
        if (budget.value <= 0) {
           // console.log('Budget invalid')
            error.value = 'Budget invalid'
            setTimeout(() => {
                error.value = ''
            },3000)
        }

        emit('set-budget',budget.value)
    }
</script>

<template>
    <form
        class="budget"
        @submit.prevent="setBudget"
    >
        <Alert v-if="error">
            {{ error }}
        </Alert>
        <div class="campo">
            <label for="new-budget">Budget</label>
            <input
                type="number"
                id="new-budget"
                class="new-budget"
                placeholder="Add budget"
                v-model.number="budget"
            />
        </div>
        <input type="submit" value="Send">

    </form>
</template>

<style scoped>
    .budget {
        width: 100%;
    }
    .campo {
        display: grid;
        gap: 2rem;
    }
    .budget label{
        font-size: 2.2rem;
        text-align: center;
        color: var(--blue);
    }
    .budget input[type="number"]{
        background-color: var(--light-gray);
        border-radius: 1rem;
        padding: 1rem;
        border: none;
        font-size: 2.2rem;
        text-align:center;
    }
    .budget input[type="submit"]{
        background-color: var(--blue);
        border:none;
        padding: 1rem;
        text-align: center;
        font-size: 2rem;
        margin-top: 2rem;
        color: var(--white);
        font-weight: 900;
        width: 100%;
        transition: background-color 300ms ease;
    }
    .budget input[type="submit"]:hover{
        background-color: #1048a4;
        cursor: pointer;
    }
</style>