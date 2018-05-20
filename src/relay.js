const app = Express()
app.use(Express.static('public'))

const server = Server(app)
const io = SocketIo(server)

export function init () {

  // configure websockets
  io.on('connection', socket => {
    log(`User connected.`)

    socket.on('disconnect', () => {
      log(`User disconnected.`)
    })
  }

  io.on('connect_error', data => {
    log('connect error!', data)
  })

  io.on('connect_timeout', () => {
    log('connect timeout!')
  })

  io.on('error', data => {
    log('error!', data)
  })

  return server;

}
