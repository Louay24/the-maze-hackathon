import { io, Socket } from 'socket.io-client'


class SocketManager{
  private socket: Socket | null
  token: string | null
  private connectedRoomId: string | null
  private connectedWorkSpaceId: string | null

  constructor() {
    this.socket = null
    this.connectedWorkSpaceId = null
    this.connectedRoomId = null
    this.token = localStorage.getItem('access_token')
    this._connectSocket()
  }

  public _connectSocket(): void {
    this.connectedRoomId &&
      console.log('Should Leave from the previous room with ID', this.connectedRoomId)
    const token = localStorage.getItem('access_token')
    console.log(token)
    if (this.socket || !token) return

    const socket = io(import.meta.env.VITE_APP_SOCKET_BASE_URL, {
      extraHeaders: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
    this.socket = socket
    socket.on('connect', () => {
      this.socket = socket
      console.log('connected')
    })

    socket.on('error', (e:any) => {
      console.error('socket error', e)
    })
  }

  public _joinRoom(listId: string): void {
    if (!this.socket) return

    this.socket.emit('joinRoom', listId)
    this.connectedRoomId = listId
    this.socket.on('notifRoom', (update:any) => {
      this.connectedRoomId = listId

      let index = update.indexOf('//')

      if (index !== -1) {
        let type = update.substr(0, index)
        let data = update.substr(index + 2)
        console.log({ type, data })

      } else {
        console.error("No occurrence of '//' found in the string.")
      }
    })
  }

  public _membersManagement(): void {
    if (!this.socket) return
    this.socket.on('userActive', () => {})
  }


  public _getSocket() {
    if (this.socket) return this.socket
    else this._connectSocket()
  }
}

const socketManager = new SocketManager()

export default socketManager
