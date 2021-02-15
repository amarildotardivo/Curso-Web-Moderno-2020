const schedule = require('node-schedule')

// parametros de schedule job (segs min hora dia mes dia-da-semana) em string
const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 1', function (){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // dia da semana de 0 - 6
regra.hour = 18
//regra.minute = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})