import { useEffect, useState } from "react";
import api from "../services/api";
import './Albums.css'

const Albums = () => {
    const [albums, setAlbums] = useState([])

    const getAlbums = () => {
        api.get("albums")
            .then((response) => setAlbums(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }


    useEffect(() => {
        getAlbums()
    }, [])



    return (
        <div>
            <h1> Albums</h1>
            {albums.map((album , index) => {
                return(
                    <div key={index} className="albums">

                        <strong>{album.id}</strong>
                        <h2>{album.title}</h2>

                    </div>
                )
            })}

        </div>
    );
}

export default Albums;
