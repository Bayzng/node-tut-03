const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const dateTime = format(new Date(), 'yyyy-mm-dd\tHH:mm:ss')
console.log(dateTime);



console.log(uuid());