import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";
/*import users from '../assets/users';*/
import User from './User';
import './NavProfile.css';

const NavProfile = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios
            .get("https://a.nacapi.com/sainstgram.users")
            .then((response) => {
                setUsers(response.data)
            })
    }, []);

    const randomProfile = [];
    
    function getRandomUsers() {
        if (users.length) {
            for (let i = 0; i <= 5; i++) {
                const j = Math.floor(Math.random() * users.length)
                randomProfile.push(users[j])
            }
        }
    }
    getRandomUsers();

    return (
        <div className="NavProfile" >
            {randomProfile.map((user) => <Link to={`/Profil/${user.id}`}><User {...user} key={user.id} /></Link>)}
        </div>
    )
}

export default NavProfile;