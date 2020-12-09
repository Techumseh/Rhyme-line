import React, { useState } from 'react'
import axios from "axios"
import { baseURL, config } from '../services/generic'

function Form(props) {
  const [inputArtist, setInputArtist] = useState('')
  const [artistAlbum, setArtistAlbum] = useState('')
  const [albumSong, setAlbumSong] = useState('')
  const [albumYear, setAlbumYear] = useState('')
  const [albumImage, setAlbumImage] = useState('')
  const [artistFacebook, setArtistFacebook] = useState('')
  const [artistTwitter, setArtistTwitter ]= useState('')
  const submitHandler = async (e) => {
    e.preventDefault()
    const data = {
      artistName:inputArtist,
      artistAlbum,
      albumSong,
      albumYear,
      albumImage,
      artistFacebook,
      artistTwitter,
    }
    console.log(data)
    const resp = await axios.post(baseURL, { fields: data }, config)
    console.log(resp)
    props.setToggleFetch(prev=> !prev)
  }
  


  return (
    <form className="artist-form" onSubmit={submitHandler}
    >
      <input type="text"
        placeholder="Artist Name"
        value={inputArtist}
        name='text'
        className='artist-input'
        onChange={(e)=>setInputArtist(e.target.value)}
      />
      
      <input type="text"
        placeholder="Artist Album"
        value={artistAlbum}
        name='text'
        className='artist-album'
        onChange={(e) => setArtistAlbum(e.target.value)}
      />
      
      <input type="text"
        placeholder="Album Song"
        value={albumSong}
        name='text'
        className='album-song'
        onChange={(e) => setAlbumSong(e.target.value)}/> 
      
      <input type="text"
        placeholder="Album Year"
        value={albumYear}
        name='text'
        className='album-year'
        onChange={(e) => setAlbumYear(e.target.value)}/> 
      
      <input type="text"
        placeholder="Album Image"
        value={albumImage} name='text'
        className='album-image'
        onChange={(e) => setAlbumImage(e.target.value)}/>
      
      <input type="text"
        placeholder="Artist Twitter"
        value={artistTwitter}
        name='text'
        className='artist-twitter'
        onChange={(e) => setArtistTwitter(e.target.value)}/>
      <input type="text"
        placeholder="Artist Facebook"
        value={artistFacebook}
        name='text'
        className='artist-facebook'
        onChange={(e) => setArtistFacebook(e.target.value)}/>
      
      <button type="submit" className="submit-artist">
      Add Artist Info
      </button>
    </form>
   
  )
}

export default Form
