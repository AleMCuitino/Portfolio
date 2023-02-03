import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const url = 'http://localhost:8000/api'

const ShowElement = () => {

    const [elementos, setElementos] = useState([]);

    useEffect(() => {
        getAllElements();
    }, [])

    const getAllElements = async () => {
        const response = await axios.get(`${url}/proyectos`);
        setElementos(response.data);
    }

    const deleteElement = async (id) => {
        await axios.delete(`${url}/proyectos/${id}`);
        getAllElements();
    }

    return (
        <React.Fragment>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Link to="/create" className='btn btn-success btn-lg '> Create </Link>

                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Subtítulo</th>
                            <th>Imagen</th>
                            <th>Descripción</th>
                            <th>Link Repositorio</th>
                            <th>Link Demo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            elementos.map((elemento) => (
                                <tr key={elemento.id}>
                                    <td>{elemento.title}</td>
                                    <td>{elemento.subtitle}</td>
                                    <td>{elemento.image}</td>
                                    <td>{elemento.description}</td>
                                    <td>{elemento.linkRepo}</td>
                                    <td>{elemento.linkDemo}</td>
                                    <td>
                                        <Link to={`/edit/${elemento.id}`} className='btn btn-warning'>Edit</Link>
                                        <button onClick={() => deleteElement(elemento.id)} className="btn btn-danger">Delete</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Grid>
        </React.Fragment>
    )
}

export default ShowElement;