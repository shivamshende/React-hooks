import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './useState_useEffect.jsx'
import Memo from './useMemo.jsx'
import Callback from '../callback/parent.jsx'
import UseRef from './useRef.jsx'
import Implement_hook from '../custom hook/Implement_hook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Memo />
    <Callback />
    <UseRef />
    <Implement_hook />
  </React.StrictMode>
)
