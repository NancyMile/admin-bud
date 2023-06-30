<script setup>
    import closeModal from '../assets/img/cerrar.svg'

    const  emit = defineEmits(['close-modal'])

</script>

<template>
    <div class="modal">
        <div class="close-modal">
            <img
                :src="closeModal"
                @click="$emit('close-modal')"
            />
        </div>
        <div class=" contenedor">
            <form>
                <legend>
                    Adding Spent
                </legend>
                <div class="field">
                    <label for="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="spent"
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
                    />
                </div>
                <div class="field">
                    <label for="category">
                        Category
                    </label>
                    <select
                        name="category"
                        id="category"
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

</style>