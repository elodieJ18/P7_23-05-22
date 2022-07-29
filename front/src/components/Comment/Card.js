import React, { useState, useEffect } from "react";
import { useSelector,} from "react-redux";
import "../../css/styles.css";
import logo from "../../assets/user-200.png";
import {isEmpty, dateParser} from "../Utils";

export const Card = ({comment}) => {
    
  const [isLoading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
   
    useEffect(() => {
      !isEmpty(usersData?.[0]) && setIsLoading(false);
    }, [usersData])

    

  return (
    <div className="home-card-container" key={comment.id}>
    
      <div className="home-card-userProfil">
        <div className="image-profil-container-home">
        <div className="image-profil-form-home">
        <img className="user-name-image"
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user.id === comment.id) return user.image === null || user.image === 'undefined' ? logo : user.image;
                  })
                  .join("")
              }
              alt="poster-pic"
            />
        </div>
        </div>
        <div className="home-card-userStatus">
        <div className="home-card-usersStatus-second-col">
          <div className="home-profil-names">
                <p className="home-card-description-name">{
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user.id === comment.id) return user.prenom;
                    else return null;
                  })
                  .join("")
              }</p>
                <p className="home-card-description-name">{
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user.id === comment.id) return user.nom;
                    else return null;
                  })
                  .join("")
              }</p>
          </div>   
          <div className="home-card-usersStatus-second-col"> 
                <p className="home-card-description-status">{
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user.id === comment.id) return user.status;
                    else return null; 
                  })
                  .join("")
              }</p>
                <p className="home-card-description-date">{dateParser(comment.date)}</p>
          </div> 
          
        </div>
      
        </div>
      </div>
      <div className="home-card-description">

          {comment.image && (<div className="home-image-post-container"><img className="home-image-post" src={comment.image}/> </div>)}
  
      
          <p>{comment.message}</p>
      </div>
      <div className="home-card-reaction">
          icons
      </div>
    </div>
  
       
  );
}

export default Card;