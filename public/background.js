import { init } from '../src/relay'

const server = init ();

server.listen(5000, () => {
  console.log('listening on *:5000')
})
