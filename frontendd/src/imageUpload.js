import React,{useState} from "react";
import { storage, db } from "./firebase";
import firebase from "firebase";
const ImageUpload = ({username}) => {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState(" ");

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload =()=>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress Function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress)
            },
            (error) => {
                //Error Function
                console.log(error);
                alert(error.message);
            },
            () => {
                //complete function...
            //get download link here 
                storage.ref("images").child(image.name).getDownloadURL()
                    .then(url => {
                    //post image inside db
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username,
                        });
                        setProgress(0);
                        setCaption("");
                        setImage(null);
                })
                
            }
        )
    }
   return( 
    <React.Fragment>

     <input type="text" placeholder="Enter a caption ..." onChange ={event => setCaption(event.target.value)} value={caption}></input>
    <input type="file" onChange={handleChange} />
    <button onClick={handleUpload}>Upload</button>
   
      
    </React.Fragment>
    
    )
}
export default ImageUpload