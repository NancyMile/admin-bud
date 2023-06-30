<script setup>
  import { ref, reactive } from 'vue'
  import Budget from './components/Budget.vue'
  import BudgetControl from './components/BudgetControl.vue';
  import Modal from './components/Modal.vue'
  import newSpentIcon from './assets/img/nuevo-gasto.svg'
  import { generateId } from './helpers'

  const modal = reactive({
    show: false,
    animate: false
  })
  const budget = ref(0)
  const available = ref(0)

  const spent = reactive({
    name: '',
    amount: '',
    category: '',
    id: null,
    date: Date.now()
  })

  const expenses = ref([])

  const setBudget = (amount) => {
    budget.value = amount
    available.value = amount
  }

  const displayModal = () => {
    modal.show = true
    setTimeout(() => {
      modal.animate = true
    },300)
  }

  const closeModal = () => {
    modal.animate = false
    setTimeout(() => {
      modal.show = false
    },300)
  }

  const savingExpense = () => {
    //console.log('saving expense')
    expenses.value.push({
      ...spent,
      id: generateId(),
    })

    closeModal()
    //clear object
    Object.assign(spent, {
      name: '',
      amount: '',
      category: '',
      id: null,
      date: Date.now()
    })
  }

</script>

<template>
  <div>
    <header>
      <h1>Admin Expenses</h1>
      <div class="contenedor-header contenedor shadow">
        <Budget
          v-if="budget === 0"
          @set-budget="setBudget"
        />
        <BudgetControl
          v-else
          :budget="budget"
          :available="available"
        />
      </div>
    </header>
    <main v-if="budget > 0">
      <div class="set-spent">
        <img
          :src="newSpentIcon"
          alt="New spent"
          @click="displayModal"
        />
      </div>

      <Modal
        v-if="modal.show"
        @close-modal="closeModal"
        @saving-expense="savingExpense"
        :modal="modal"
        v-model:name="spent.name"
        v-model:amount="spent.amount"
        v-model:category="spent.category"
      />

    </main>
    <Filter/>
  </div>
</template>

<style>
  :root{
    --blue: #3b82f6;
    --white: #fff;
    --light-gray: #f5f5f5;
    --gray: #94a3b8;
    --dark-gray: #64748b;
    --black: #000;
  }
  html{
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after{
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    font-family: "Lato", sans-serif;
    background-color: var(--light-gray);
  }
  h1{
    font-size: 4rem;
  }
  h2{
    font-size: 3rem;
  }
  header{
    background-color: var(--blue);
  }
  header h1{
    padding: 3rem 0;
    margin: 0;
    color: var(--white);
    text-align: center;
  }

  .contenedor {
    width: 90%;
    max-width: 80rem;
    margin: 0 auto;
  }
  .contenedor-header {
    margin-top: -5rem;
    transform: translateY(5rem);
    padding: 5rem;
  }
  .shadow {
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    background-color: var(--white);
    border-radius: 1.2rem;
    padding: 5rem;
  }
  .set-spent {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
  }
  .set-spent img {
    width: 5rem;
    cursor: pointer;
  }

</style>