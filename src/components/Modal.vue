<script setup>
    import { ref } from 'vue'
    import closeModal from '../assets/img/cerrar.svg'
    import Alert from './Alert.vue'

    const error = ref('')

    const emit = defineEmits(['close-modal','saving-expense' ,'update:name','update:amount','update:category'])

    const props = defineProps({
        modal: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        amount: {
            type: [String, Number],
            required: true
        },
        category: {
            type: String,
            required: true
        }
    })

    const addExpense = () => {
        //console.log('adding spent')
        //validate fields
        const { name, amount, category } = props
        if ([name, amount, category].includes('')) {
            //console.log('Please fill everything')
            error.value = 'Please fill everything'
            setTimeout(() => {
                error.value=''
            },3000)
            return
        }
        //validate amount > 0s
        if (amount <= 0) {
            error.value = "Invalid amount"
            setTimeout(() => {
                error.value=''
            },3000)
            return
        }

        //console.log('Saving expense')
        emit('saving-expense')

    }

</script>

<template>
    <div class="modal">
        <div class="close-modal">
            <img
                :src="closeModal"
                @click="$emit('close-modal')"
            />
        </div>
        <div class=" contenedor container-form"
            :class="[modal.animate ? 'animate': 'close']"
        >
            <form
                @submit.prevent="addExpense"
                class="new-spent"
            >
                <legend>
                    Adding Spent
                </legend>

                <Alert v-if="error">
                    {{ error }}
                </Alert>

                <div class="field">
                    <label for="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="spent"
                        :value="name"
                        @input="$emit('update:name',$event.target.value)"
                    />
                </div>
                <div class="field">
                    <label for="amount">
                        Amount
                    </label>
                    <input
                        type="number"
                        name="ammount"
                        placeholder="amount"
                        :value="amount"
                        @input="$emit('update:amount',+$event.target.value)"
                    />
                </div>
                <div class="field">
                    <label for="category">
                        Category
                    </label>
                    <select
                        name="category"
                        id="category"
                        :value="category"
                        @input="$emit('update:category',$event.target.value)"
                    >
                        <option value="">-- Select --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="miscellaneus">Miscellaneus</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Add Spent"
                />
            </form>

        </div>
    </div>

</template>

<style scoped>
    .modal {
        position: absolute;
        background-color: rgb(0 0 0/0.9);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .close-modal {
        position: absolute;
        right: 3rem;
        top: 3rem
    }
    .close-modal img {
        width:  3rem;
        cursor: pointer;
    }
    .container-form {
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: ease-in;
        opacity: 0;
    }
    .container-form.animate {
        opacity: 1;
    }
    .container-form.close {
        opacity: 0;
    }
    .new-spent {
        margin: 10rem auto 0 auto;
        display: grid;
        gap: 2rem;
    }
    .new-spent legend{
        text-align: center;
        color: var(--white);
        font-size: 3rem;
        font-weight: 700;
    }
    .field {
        display: grid;
        gap: 2rem;
    }
    .new-spent input,
    .new-spent select{
        background-color: var(--light-gray);
        border-radius: 1rem;
        padding: 1rem;
        border: none;
        font-size: 2.2rem;
    }
    .new-spent label {
        color: var(--white);
        font-size: 3rem;
    }
    .new-spent input[type="submit"]{
        background-color: var(--blue);
        color: var(--white);
        font-weight: 700;
        cursor: pointer;
    }

</style>