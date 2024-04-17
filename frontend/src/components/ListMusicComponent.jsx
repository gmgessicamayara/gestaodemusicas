import React, { useEffect, useState } from 'react'
import { listMusic, deleteMusic } from '../services/MusicService'
import { useNavigate } from 'react-router-dom'

export const ListMusicComponent = () => {

    const [musics, setMusics] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllMusics();
    }, [])

    function getAllMusics() {
        listMusic().then((response) => {
            setMusics(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewMusic() {
        navigator('/add-music')
    }

    function updateMusic(id) {
        navigator(`/edit-music/${id}`)
    }

    function removeMusic(id) {
        deleteMusic(id).then((response) => {
            getAllMusics();
        }).catch(error => {
            console.error(error);
        })
    }

    return (

        <div className='container'>
            <h2 className='text-center'>Lista de Músicas</h2>
            <table className='table table-striped table bordered'>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Artista</th>
                        <th>Álbum</th>
                        <th>Gênero</th>
                        <th>Duração</th>
                        <th>Disponibilidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        musics.map(music =>
                            <tr key={music.id}>
                                <td>{music.titulo}</td>
                                <td>{music.artista}</td>
                                <td>{music.album}</td>
                                <td>{music.genero}</td>
                                <td>{music.duracao}</td>
                                <td>{music.disponibilidade}</td>
                                <td>
                                    <button className='btn btn-primary' style={{ color: 'white' }} onClick={() => updateMusic(music.id)}>Editar</button>
                                    <button className='btn btn-danger' onClick={() => removeMusic(music.id)}
                                        style={{ marginLeft: '10px' }}> Excluir</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            <button className='btn btn-primary mb-2' onClick={addNewMusic}>Nova</button>
        </div>
    )
}
