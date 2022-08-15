import { useEffect, useState } from "react";
import api from "../services/api";
import './Comments.css'

const Comments = () => {
    const [comments , setComments] = useState([])

  const getComments  = () => {
    api.get("comments")
    .then((response) => setComments(response.data))
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

  }

  useEffect(() => {
    getComments()
  }, [])

    
    return ( 
        <div>
            <h1>Comments</h1>
            {comments.map((comment , index) => {
                return(
                    <div key={index} className="comments">

                        <strong>{comment.id}</strong>
                        <h3>{comment.name}</h3>
                        <span>{comment.email}</span>
                        <p>
                            {comment.body}
                        </p>


                    </div>
                )
            })}
        </div>
    );
}
 
export default Comments;