import React, {useState} from 'react'

function Form() {
  const [inputArtist, setInputArtist] = useState('')
  const [artistAlbum, setArtistAlbum] = useState('')
  const [albumSong, setAlbumSong] = useState('')
  const [albumYear, setAlbumYear] = useState('')
  // const [albumYear, setAlbumYear] = useState('')
  const [albumImage, setAlbumImage] = useState('')
  const [artistFacebook, setArtistFacebook] = useState('')
  const [artistTwitter, setArtistTwitter ]= useState('')
    
  return (
    <form className="artist-form">
      <input type="text"
        placeholder="Artist Name"
        value={inputArtist}
        name='text'
        classname='artist-input' />
      
      <input type="text"
        placeholder="Artist Album"
        value={artistAlbum}
        name='text'
        classname='artist-album' />
      
      <input type="text"
        placeholder="Album Song"
        value={albumSong}
        name='text'
        classname='album-song' /> 
      
      <input type="text"
        placeholder="Album Year"
        value={albumYear}
        name='text'
        classname='album-year' /> 
      
      <input type="text"
        placeholder="Album Image"
        value={albumImage} name='text'
        classname='album-image' />
      
      <input type="text"
        placeholder="Artist Twitter"
        value={artistTwitter}
        name='text'
        classname='artist-twitter' />
      <input type="text"
        placeholder="Artist Facebook"
        value={artistFacebook}
        name='text'
        classname='artist-facebook' />
      
      <button className="submit-artist">
      Add Artist Info
      </button>
    </form>
   
  )
}

export default Form
