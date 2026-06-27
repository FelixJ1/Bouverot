import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.css'
import { EditModeProvider } from './context/EditModeContext'

export default function App() {
  return (
    <EditModeProvider>
      <RouterProvider router={router} />
    </EditModeProvider>
  )
}