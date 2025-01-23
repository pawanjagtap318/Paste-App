import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

function ViewPaste() {
  const allPastes = useSelector((state) => state.paste.pastes);
  const {id} = useParams();
  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log(id);

  return (
    <div className='m-8 w-full h-screen'>
      <div className='w-5/6 flex'>
        <input 
          type="text" 
          placeholder='Enter Title'
          value={paste.title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            backgroundImage: "url('https://wallpapercave.com/wp/m8wqdGZ.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className='rounded-lg p-1.5 pl-2.5 mr-10 border-black border-2 w-fit font-bold text-xl'
          disabled
        />
        <button 
          className='w-10 p-2 mr-2 border-2 border-black bg-white rounded-lg hover:bg-sky-200'
          onClick={() => {
            navigator.clipboard.writeText(paste.content);
            toast.success("Content Copied Successfully.")
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"/></svg>
        </button>
        <button 
          className='w-10 p-2 ml-2 border-2 border-black bg-white rounded-lg hover:bg-blue-300'
        >
          <NavLink
            to={`/?pasteId=${paste?._id}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/></svg>
          </NavLink>
        </button>
      </div>
      <div className='mt-8'>
        <textarea 
          type="text"
          placeholder='Enter content here'
          value={paste.content}
          onChange={(e) => setValue(e.target.value)}
          style={{
            backgroundImage: "url('https://wallpapercave.com/wp/m8wqdGZ.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className='w-5/6 rounded-lg p-2 pl-2.5 mr-4 border-black border-2 min-h-screen mb-52'
          disabled
        />
      </div>
    </div>
  )
}

export default ViewPaste
