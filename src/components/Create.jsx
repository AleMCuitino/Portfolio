import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const url = 'http://localhost:8000/api/proyectos'

const Create = () => {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(url, { title: title, subtitle: subtitle })
        navigate('/')
    }

    return (
        <div>
            <h3>Create</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'> Título </label>
                    <input
                        value={title}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Subtítulo </label>
                    <input
                        value={subtitle}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text" className='form-control' />
                </div>
                <button type="submit" className='btn btn-success'>Store</button>
            </form>
        </div>
    )
}

export default Create;