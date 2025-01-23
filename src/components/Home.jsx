import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

function Home() {
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if(pasteId){
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if(pasteId){
      // Update Paste
      if(paste.title != ""){
        dispatch(updateToPastes(paste));
      } else {
        toast.error("Enter Title");
      }
    } else {
      // Create Paste
      if(paste.title != ""){
        dispatch(addToPastes(paste));
      } else {
        toast.error("Enter Title");
      }
    }

    // After creation or Updation
    setTitle("");
    setValue("");
    setSearchParams({});

    if(paste.title == ""){
      setValue(paste.content);
    }
  }


  return (
    <div className='m-8 w-full h-screen'>
      <div className='w-5/6'>
        <input 
          type="text" 
          placeholder='Enter Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            backgroundImage: "url('https://wallpapercave.com/wp/m8wqdGZ.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className='rounded-lg p-1.5 pl-2.5 mr-10 w-5/6 border-black border-2 lg:w-4/6 sm:w-3/5 mb-4 font-bold text-xl'
        />
        <button
          className='font-semibold text-lg text-black border-2 border-black rounded-xl p-1 bg-sky-400 hover:bg-sky-500 hover:px-2 hover:py-1.5'
          onClick={createPaste}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className='mt-8'>
        <textarea 
          type="text"
          placeholder='Enter content here'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            backgroundImage: "url('https://wallpapercave.com/wp/m8wqdGZ.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className='w-5/6 rounded-lg p-2 pl-2.5 mr-4 mb-52 border-black border-2 min-h-screen'
        />
      </div>
    </div>
  )
}

export default Home
