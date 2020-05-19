import { createClient, print } from 'redis'

const client = createClient()

client.on('error', function (error) {
  console.error(error)
})

client.set('key', '6', print)
client.get('key', print)
