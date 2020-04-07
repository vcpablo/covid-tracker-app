import io from 'socket.io-client'
import { API_URL } from 'react-native-dotenv'

export default io(API_URL)
