import React, { useEffect, useState } from 'react'
import { createMusic, getMusic, updateMusic } from '../services/MusicService';
import { useNavigate, useParams } from 'react-router-dom';

export const MusicComponent = () => {

    const [titulo, setTitulo] = useState('');
    const [artista, setArtista] = useState('');
    const [album, setAlbum] = useState('');
    const [genero, setGenero] = useState('');
    const [duracao, setDuracao] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');

    const [errors, setErrors] = useState({
        titulo: '',
        artista: '',
        album: '',
    })

    const { id } = useParams();

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getMusic(id).then((response) => {
                setTitulo(response.data.titulo);
                setArtista(response.data.artista);
                setAlbum(response.data.album);
                setGenero(response.data.genero);
                setDuracao(response.data.duracao);
                setDisponibilidade(response.data.disponibilidade)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [id])

    function saveOrUpdateMusic(e) {
        e.preventDefault();

        const music = { titulo, artista, album, genero, duracao, disponibilidade }
        if (validateForm()) {

            if (id) {
                updateMusic(id, music).then(() => {
                    navigator('/musics')
                }).catch(error => {
                    console.log(error)
                })
            } else {
                createMusic(music).then(() => {
                    navigator('/musics')
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Editar Música</h2>
        } else {
            return <h2 className='text-center'>Adicionar Música</h2>
        }
    }
 
    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors }

        if (titulo.trim()) {
            errorsCopy.titulo = '';
        } else {
            errorsCopy.titulo = 'O título é obrigatório'
            valid = false;
        }

        if (artista.trim()) {
            errorsCopy.artista = '';
        } else {
            errorsCopy.artista = 'O nome do(a) artista é obrigatório'
            valid = false;
        }

        if (album.trim()) {
            errorsCopy.album = '';
        } else {
            errorsCopy.album = 'O álbum é obrigatório'
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;

    }

    return (
        <div className='container'>
            <br /><br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body' style={{height:'500px;'}}>
                        <div >
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Título</label>
                                    <input className={`form-control ${errors.titulo ? 'is-invalid' : ''} `}
                                        type="text" placeholder='Digite o nome da música'
                                        name='titulo' value={titulo} onChange={(e) => { setTitulo(e.target.value) }}>
                                    </input>
                                    {errors.titulo && <div className='invalid-feedback'> {errors.titulo} </div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Artista</label>
                                    <input className={`form-control ${errors.artista ? 'is-invalid' : ''} `} type="text" placeholder='Digite o nome do(a) artista'
                                        name='artista' value={artista} onChange={(e) => { setArtista(e.target.value) }} >
                                    </input>
                                    {errors.artista && <div className='invalid-feedback'> {errors.artista} </div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Álbum</label>
                                    <input className={`form-control ${errors.album ? 'is-invalid' : ''} `} type="text" placeholder='Digite o nome do álbum'
                                        name='album' value={album} onChange={(e) => { setAlbum(e.target.value) }}>
                                    </input>
                                    {errors.album && <div className='invalid-feedback'> {errors.album} </div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Gênero</label>
                                    <input className='form-control' type="text" placeholder='Digite o nome do gênero'
                                        name='genero' value={genero} onChange={(e) => { setGenero(e.target.value) }} />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Duração</label>
                                    <input className='form-control' type="text" placeholder='Digite a duração da música'
                                        name='duracao' value={duracao} onChange={(e) => { setDuracao(e.target.value) }} />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Disponibilidade</label>
                                    <input className='form-control' type="text" placeholder='Está disponível?'
                                        name='disponibilidade' value={disponibilidade} onChange={(e) => { setDisponibilidade(e.target.value) }} />
                                </div>

                                <button className='btn btn-success' onClick={saveOrUpdateMusic}>Salvar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
