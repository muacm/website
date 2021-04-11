import React from 'react'

const Profile = ({name, post, src}) => {
    return (
        <div>
            <div class="card profile-card" style={{width: '18rem;'}}>
            <img class="card-img-top" src={src} alt='pic' ></img>
            <div class="card-body">
                <h2>{name}</h2>
                <p class="card-text">{post}</p>
            </div><br/><br/>
            </div>
        </div>
    )
}

export default Profile
