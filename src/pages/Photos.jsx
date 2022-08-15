import './Photos.css'
import api from '../services/api';
import { useEffect, useState } from 'react';

const Photos = () => {

    const [photos, setPhotos] = useState([])

    const getPhotos = () => {
        api.get("photos")
        .then((response) => setPhotos(response.data.slice(0,20)))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    }

    useEffect(() => {

        getPhotos()

    }, [])


    return ( 
        <div>
            <h1>Photos</h1>
            {photos.map((photo, index) => {
                return(
                    <div key={index} className="photos">
                        <strong>{photo.id}</strong>
                        <h3>
                            {photo.title}
                        </h3>
                        <img src={photo.url} alt="url" />
                        <img src={photo.thumbnailUrl} alt="thumbnailUrl" />


                    </div>
                )
            })}
        </div>
     );
}
 
export default Photos;
