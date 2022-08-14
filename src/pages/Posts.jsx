import { useEffect, useState } from "react";
import api from "../services/api";

const Posts = () => {
    const [posts, setPosts] = useState([])

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



    return (
        <div>
            <h1>Posts</h1>

            {posts.map((post) => {
                return (
                    <div className='posts'>
                        <span>{post.id}</span>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            })}


        </div>
    );
}

export default Posts;