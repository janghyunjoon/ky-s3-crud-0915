import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import FileList from './components/FileList'
import UploadForm from './components/UploadForm'
function App() {

  const listRef =  useRef(null)
  const reload = ()=>listRef.current?load()

  return (
    <div className='container'>
      <UploadForm/>
      <FileList />
    </div>
  )
}

export default App