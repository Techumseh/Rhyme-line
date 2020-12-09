import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services/generic";


// import ImageDisplay from './ImageDisplay.jsx'

function Artist(props) {
  const handleDelete = async () => {
    const artistURL = `${baseURL}/${props.artist.id}`;
    await axios.delete(artistURL, config);
    props.setToggleFetch((prev) => !prev);
  };
  
  return (
  
    <div>
  
      <img src={props.artist.fields.albumImage}></img>
      <em>
      <strong>
          <p>{props.artist.fields.artistName}</p>
          </strong>
      </em>
      
        <div>{props.artist.fields.artistAlbum}</div>
      
        <div>{props.artist.fields.albumSong}</div>
     
        <div>{props.artist.fields.albumYear}</div>
      
      <a href={props.artist.fields.artistTwitter}>Twitter</a><br>
      </br>
     
      <a href={props.artist.fields.artistFacebook}>FaceBook</a><br>
      </br>


      <Link to={`/edit/${props.artist.id}`}>
        <button>EDIT</button>
      </Link>
      <button onClick={handleDelete}>DELETE</button><br></br>
      <br></br>
      
    </div>
  );
}
export default Artist;