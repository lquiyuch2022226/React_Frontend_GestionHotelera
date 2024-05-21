import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import "./showHotel.css";

export const ShowHotel = ({ id }) => {

    const [desc, setDesc] = useState("");
    const [autor, setAutor] = useState("");

    const handleSubmit = () =>{

    }

    return (
        <div className='all_container'>
            <div className='container'>
                <h1 className='title'>
                    <b>{id.nameHotel}</b>
                </h1>
                <div className='post'>
                    <div className='imgContainer'>
                        <img src={id.nameHotel} alt="" className='image' />
                    </div>

                    <div className='textContainer'>
                        <p className='postTitle'>
                            {id.nameHotel}
                        </p>
                        <h1 className='postDesc'>{id.nameHotel}</h1>
                    </div>
                </div>
            </div>

            <div className='container_2'>
                <div className='input_Title'>
                    <h4 className='fooder_title'>Comentarios</h4>
                    <div className='write'>
                        <div className="input-group">
                            <input required="true" type="text" value={autor} className="input" onChange={(e) => setAutor(e.target.value)} />
                            <label className="user-label">Nombre Completo</label>
                        </div>
                        <div className="input-group">
                            <textarea required="true" type="text" value={desc} className="input" onChange={(e) => setDesc(e.target.value)} />
                            <label className="user-label">Escribe un comentario</label>
                        </div>
                    </div>
                    <div className='espacio'>
                        <button className='button' onClick={handleSubmit}>
                            <span>Comentar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};