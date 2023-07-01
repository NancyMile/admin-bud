<script setup>
  import { ref, reactive, watch } from 'vue'
  import Budget from './components/Budget.vue'
  import BudgetControl from './components/BudgetControl.vue';
  import Modal from './components/Modal.vue'
  import Expense from './components/Expense.vue'
  import newSpentIcon from './assets/img/nuevo-gasto.svg'
  import { generateId } from './helpers'

  const modal = reactive({
    show: false,
    animate: false
  })
  const budget = ref(0)
  const available = ref(0)
  const budgetSpent = ref(0)

  const spent = reactive({
    name: '',
    amount: '',
    category: '',
    id: null,
    date: Date.now()
  })

  const expenses = ref([])

  watch(expenses,() => {
    const totalExpenses = expenses.value.reduce((total, expense) => expense.amount + total, 0)
    //console.log('total expenses'+totalExpenses)
    budgetSpent.value = totalExpenses
    available.value = budget.value - totalExpenses
  }, {
    deep: true
  })

  watch(modal, () => {
    if (!modal.show) {
      resetStateExpense()
    }
  }, {
    deep: true
  })

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
    //editing
    if (spent.id) {
      //console.log('editing ...')
      const { id } = spent
      const index = expenses.value.findIndex((spent => spent.id === id))
      expenses.value[index] = {...spent}
    } else {
      console.log('saving expense')
      expenses.value.push({
        ...spent,
        id: generateId()
      })
    }

    closeModal()
    //clear object
    resetStateExpense()
  }

  const resetStateExpense = () => {
    //clear object
    Object.assign(spent, {
      name: '',
      amount: '',
      category: '',
      id: null,
      date: Date.now()
    })
  }

  const selectExpense = (id) => {
    //console.log('select expense '+id)
    const editExpense = expenses.value.filter(expense => expense.id === id)[0]
    Object.assign(spent, editExpense)
    displayModal()
  }

  const deleteExpense = () => {
    //console.log('delete expense')
    expenses.value = expenses.value.filter(expenseState => expenseState.id !== spent.id)
    closeModal()
  }

</script>

<template>
  <div
    :class="{fix: modal.show}"
  >
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
          :budgetSpent="budgetSpent"
        />
      </div>
    </header>
    <main v-if="budget > 0">

      <div class="list-expenses contenedor">
        <h2>{{ expenses.length>0 ? 'Expenses': 'No Expenses'}}</h2>
        <Expense
          v-for="expense in expenses"
          :key="expense.id"
          :expense="expense"
          @select-expense="selectExpense"
        />
      </div>



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
        @delete-expense="deleteExpense"
        :id="spent.id"
        :modal="modal"
        :available="available"
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
  .fix{
    overflow: hidden;
    height: 100vh;
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
  .list-expenses{
    margin-top: 10rem;
  }
  .list-expenses h2{
    font-weight: 900;
    color: var(--dark-gray);
  }

</style>