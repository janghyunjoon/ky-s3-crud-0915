import React,{useState} from 'react'
import api from '../api'
import "./UploadForm.scss"
const UploadForm = () => {
    const [file,setFile]=useState(null)
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState()
  return (
    <form className='form-list'>
        <input type="file" className='file-btn' />
        <input type="text" placeholder='title'/>
        <input type="text" placeholder='description'/>
        <button type='submit' className='upload-btn'>upload</button>
    </form>
  )
}

export default UploadForm