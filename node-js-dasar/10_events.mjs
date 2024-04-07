import {EventEmitter} from "events"

const emmiter = new EventEmitter()
emmiter.addListener("message", (data) => {
    console.log(`hello ${data}`)
})
emmiter.addListener("message", (data) => {
    console.log(`halo ${data}`)
})

emmiter.emit("message", "ayam")