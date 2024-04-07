import timers from "timers/promises"

// const ayam = await timers.setTimeout(5000, "ayam")
// console.log(ayam)

for await (const startTime of timers.setInterval(1000, new Date())) {
    console.log(`timer at ${startTime}`)
}