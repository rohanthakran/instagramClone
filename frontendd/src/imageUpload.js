import React,{useState} from "react";
const ImageUpload = () => {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState(" ");

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload =()=>{
                 
    }
   return( 
    <React.Fragment>
<form>
     <input type="text" placeholder="Enter a caption ..." onChange ={event => setCaption(event.target.value)} value={caption}></input>
    <input type="file" onChange={handleChange} />
    <button onClick={handleUpload}>Upload</button>
</form>
   
      
    </React.Fragment>
    
    )
}
export default ImageUpload;