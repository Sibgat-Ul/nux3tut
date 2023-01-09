export default defineEventHandler(async(event) => {
    const {code} = event.context.params

    const url = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=HgoN0Vp4rwGA6EA7qRxOHJyWvlgrCgUu2z4s5DYu`

    const {data} = await $fetch(url)

    return data
})