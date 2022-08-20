import React, { useEffect, useState } from "react";
import "../../css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/user-200.png";
import { fas, faCamera } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import UploadImg from "../profil/UploadImg";
library.add(fas, far, faCamera);



export const NewReply = () => {
    const [message, setMessage] = useState('');
    const [updateForm, setUpdateForm] = useState(false); 
    const [pushImg, setPushImg] = useState(false);
    const userData = useSelector((state) => state.userReducer);
    
  return (
  
    <div className="home-actuality-new-reply">
        <div className="home-card-container" > 
            <div className="home-card-description-reply">
                    <div className="image-profil-container-home">
                        <div className="image-profil-form-home-reply">
                            <img className="user-name-image" src={userData.image === null || userData.image === 'undefined' ? logo : userData.image}  alt="userimage"/>
                        </div>
                    </div>
                <form >
                    <div className="new-post-text-and-picture"> 
                        <textarea name="message" id="message" placeholder="Je répond au post" onChange={(e) => setMessage(e.target.value)} value={message} />
                        {pushImg === false && (
                            <>
                                <div className="new-post-picture" onClick={() => setPushImg(!pushImg)}><FontAwesomeIcon icon="camera" />
                                </div>
                            </>
                            )}
                        {pushImg && (
                            <>
                            <UploadImg />
                            <div className="new-post-picture" onClick={() => setPushImg(!pushImg)}><FontAwesomeIcon icon="camera" />
                                </div>
                            </>
                            )}
                        
                    </div>
                    <div className="duo-update-btn-profil">
                        <button className="btn-update-comment" type="submit">Publish</button> 
                    </div> 
                </form>
            </div>
        </div>
    </div>   
  );
}

export default NewReply;