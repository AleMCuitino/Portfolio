import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const url = 'http://localhost:8000/api/proyectos'

const Create = () => {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [linkRepo, setLinkRepo] = useState('');
    const [linkDemo, setLinkDemo] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(url, { 
            title: title, 
            subtitle: subtitle, 
            image: image,
            description: description,
            linkRepo: linkRepo,
            linkDemo: linkDemo, })
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
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Subtítulo </label>
                    <input
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        type="text" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Imagen </label>
                    <input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="text" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Descripción </label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Link Repo </label>
                    <input
                        value={linkRepo}
                        onChange={(e) => setLinkRepo(e.target.value)}
                        type="text" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Link Demo </label>
                    <input
                        value={linkDemo}
                        onChange={(e) => setLinkDemo(e.target.value)}
                        type="text" className='form-control' />
                </div>
                <button type="submit" className='btn btn-success'>Store</button>
            </form>
        </div>
    )
}

export default Create;