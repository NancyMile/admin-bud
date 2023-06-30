export const formatAmount = (amount) => { 
    return Number(amount).toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const generateId = () => {
    const date = Date.now().toString(32)
    const random = Math.random().toString(32).substring(2); //substring(2) remove 2
    return random + date
}

export const dateFormat = (date) => {
    const newDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return newDate.toLocaleDateString('en-EN', options)
}