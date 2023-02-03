import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const url = 'http://localhost:8000/api/proyectos/'


const Edit = () => {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [linkRepo, setLinkRepo] = useState('');
    const [linkDemo, setLinkDemo] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${url}${id}`, {
            title: title,
            subtitle: subtitle,
            image: image,
            description: description,
            linkRepo: linkRepo,
            linkDemo: linkDemo,
        })
        navigate('/')
    }

    useEffect(() => {
        const getElementsById = async () => {
            const response = await axios.get(`${url}${id}`)
            setTitle(response.data.title);
            setSubtitle(response.data.subtitle);
            setImage(response.data.image);
            setDescription(response.data.description);
            setLinkRepo(response.data.linkRepo);
            setLinkDemo(response.data.linkDemo);
        }
        getElementsById();
    }, [])

    return (
        <div>
            <h3>Edit</h3>
            <form onSubmit={update}>
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
                <button type="submit" className='btn btn-success'>Edit</button>
            </form>
        </div>
    )
}

export default Edit;