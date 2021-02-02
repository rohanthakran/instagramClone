import React,{useState,useEffect} from "react";
import "./post.css";
import { db, auth } from "./firebase";
import Avatar from '@material-ui/core/Avatar';

const Post = (porps) => {
    const [comments, setComments] = useState([]);
    const [comment,setComment] = useState("");

  
    useEffect(() => {
        let unsubscribe;
        if (porps.postId) {
          unsubscribe = db
            .collection("posts")
            .doc(porps.postId)
            .collection("comments")
            .onSnapshot((snapshot) => {
              setComments(snapshot.docs.map((doc) => doc.data()));
            });
        }
  
        return () => {
          unsubscribe();
        };
    }, [porps.postId]);
    const postComment = (e) => {
        e.preventDefault();
  
        db.collection("posts").doc(porps.postId).collection("comments").add({
          text: comment,
            username: porps.username
        });
        setComment("");
      };
  
    return (
        <React.Fragment>
            <div className="post">
                <div className="post_header">
                    <Avatar className="post_avatar" alt="Rohan" />
                <h3>{porps.username} </h3>
                    
                
                </div>

               
                {/* header -> avatrt +username*/}
                <img className ="post_image" src= {porps.imageUrl} alt="image2"></img>
                {/*image */}

                <h4 className="post__text"><strong>{porps.username}</strong> {porps.caption}</h4>
                {/*userName +caption */}

                <div className="post__comments">
                {comments.map((comment) => (
                  <p>
                    <b>{comment.username}</b> {comment.text}
                  </p>
                ))}
              </div>

                <form className="post_comment">
                <input
                className="post__input"
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              >
                    </input>

                    <button
                    disabled={!comment}
                    className="post__button"
                    type="submit"
                    onClick={postComment}
                  >
                    Post
                  </button>
                </form>

            </div>
        </React.Fragment>
    )
}
export default Post 