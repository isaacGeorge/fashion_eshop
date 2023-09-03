import io from 'socket.io-client'
import { feathers } from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import authentication from '@feathersjs/authentication-client'

const socket = io(import.meta.env.PUBLIC_BACKEND_URL)
const client = feathers()


client.configure(socketio(socket))
client.configure(authentication({
    // storageKey: "jwt"
}))

// const messageService = client.service('messages')
//
// messageService.on('created', (message: Message) =>
//     console.log('Created a message', message)
// )
//
// // Use the messages service from the server
// messageService.create({
//     text: 'Message from client'
// })

export default client
