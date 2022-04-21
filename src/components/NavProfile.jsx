import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";
import User from '../components/User'
import './NavProfile.css';
import refresh2 from '../assets/refresh2.png';

const NavProfile = () => {
    const [users, setUsers] = useState([]);
    const [trigger, setTrigger] = useState();

    useEffect(() => {
        const url = "https://api.jsonbin.io/b/6218fbd625fb1b26b188e317";
        Axios
            .get(url)
            .then((response) => setUsers(response.data))
            .catch(error => console.log(`API call error: ${error}`))
    }, []);

    const randomProfile = [];
    function getRandomUsers() {
        if (users.length) {
            for (let i = 0; randomProfile.length < 5; i++) {
                const j = Math.floor(Math.random() * users.length);
                if (!randomProfile.includes(users[j]) && users[j].id !== 6) {
                    randomProfile.push(users[j])
                };
            }
        }
    }
    getRandomUsers();

    return (
        <div className="NavProfile" >
            {randomProfile.map((user) => 
            <Link className="user-container" to={`/profil/${user.id}`}>
                <User {...user} key={user.id} />
            </Link>)}
            <img onClick={ ()=>{setTrigger({})}} className='nav-refresh-button' src={refresh2} alt="New profiles" />
        </div>
    )        
}

export default NavProfile;
