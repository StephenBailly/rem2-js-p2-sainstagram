import React from 'react'
import "./CardProfile.css"

const CardProfile = ({infoProfile}) => {
    return (
        <div className="Cardprofile">
            <div className="id-card">
              <img className='Cardprofile-picture' src={infoProfile.profilepic} alt={infoProfile.name} />
              <div className="Cardprofile-infos">
              <h3 className='Cardprofile-name'>{infoProfile.name}  {infoProfile.age} ans</h3>
              <p className="Cardprofile-category">{infoProfile.category}</p>
              {infoProfile.constellation !== null ? <p className="Cardprofile-category">Constellation {infoProfile.constellation}</p> : null}
              {infoProfile.trainingplace !== null ? <p className='Cardprofile-training'>{infoProfile.trainingplace}</p> : null}
              <p className='Cardprofile-birth'>Lieu de naissance: {infoProfile.birthplace}</p>
              </div>
            </div>
            <p className='Cardprofile-description'>{infoProfile.description}</p>
        </div> 
    )
}

export default CardProfile
