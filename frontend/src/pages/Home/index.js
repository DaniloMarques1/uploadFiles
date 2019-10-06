import React, { useState, useEffect } from 'react';

import './styles.css';

import api from '../../services/api';

import camera from '../../assets/camera.svg'

export default function Home() {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) {
            alert("Selecione uma imagem primeiro")
            return;
        }
        const data = new FormData();
        data.append('image_name', image);
        await api.post('/image', data);
        alert("Image uploaded");
        loadImages();
        setImageName('');
        setImage(null);
    }

    const handleImage = (e) => {
        setImageName(e.target.files[0].name);
        setImage(e.target.files[0]);
    }

    const loadImages = async () => {
        const response = await api.get('/image');
        console.log(response.data);
        setImages(response.data);
    }

    useEffect(()=>{
        loadImages();
    }, [])

    return (
        <> 
            <form onSubmit={handleSubmit} className='uploadForm'>
                <label htmlFor='fileInput'>
                    <img src={camera} alt="Camera"/>
                    <span>{imageName}</span>
                </label>
                <input 
                type='file'
                id='fileInput'  
                onChange={handleImage}
                />
                <button className='btn'>Enviar</button>
            </form>
            <div className='images'>
                {images.length === 0 ? (<h1>No pictures yet</h1>) : ("")}
                <ul>
                    {images.map(image => ((
                        <li key={image._id}> 
                            <a href={image.image_url}>
                                <img src={image.image_url} alt="cool" /> 
                            </a>
                            <span>{image.image_name}</span>
                        </li>
                    )))}
                </ul>
            </div>
        </>
    )
}