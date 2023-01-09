export default defineEventHandler(async (event) => {
    //handle query params
    //const {name} = getQuery(event)
    //const {age} = await useBody(event)

    const {data} = await $fetch("https://api.currencyapi.com/v3/latest?apikey=HgoN0Vp4rwGA6EA7qRxOHJyWvlgrCgUu2z4s5DYu")

    return {
        data,
        //message: `"hello, ninja" + name ${name} + age: ${age}`,
        
    }
})