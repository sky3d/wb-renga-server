import * as Hapi from '@hapi/hapi'
import { Server, Request, ResponseToolkit } from 'hapi'


const init = async () => {
    const server: Server = Hapi.server({
        port: 3000,
        host: 'localhost',
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, h: ResponseToolkit, err?: Error) => {
            return { text: 'Renga server', version: 'v1.0' }
        }
    })

    await server.start()
    console.log(`Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.error(err)
    process.exit()
})

init()
