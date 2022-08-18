import { useEffect, useState } from "react";
import api from "../services/api";
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const getPosts = () => {
        api.get("posts")
            .then((response) => setPosts(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }

    useEffect(() => {
        getPosts()

       

    }, [])

    const handleCreate = () => {
        const request = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        api.post("posts" , request)
        .then((response) =>  getPosts())
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }








    return (
        <div>
            <h1>Posts</h1>
            <button onClick={handleCreate}>Add</button>



            {posts.map((post, index) => {
                return (
                    <div key={index} className='posts'>
                        <strong>{post.id}</strong>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        
                       
                    </div>
                )
            })}


        </div>
    );
}

export default Posts;