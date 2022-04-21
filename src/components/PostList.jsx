import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Post from './Post';
import './PostList.css';

const PostList = (props) => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        if (props.id) {
            // Axios
            //     .get(`https://api.jsonbin.io/b/621a0012c4790b3406241a82/?userid=${props.id}`)
            // Change this due to API switch
            Axios
                .get(`https://api.jsonbin.io/b/621a0012c4790b3406241a82`)
                .then(response => setPostList(response.data.filter(item => item.userid === parseInt(props.id))))
                .catch(error => console.log(`API (posts) call error: ${error}`))
        } else {
            Axios
                .get("https://api.jsonbin.io/b/621a0012c4790b3406241a82")
                .then((response) => setPostList(response.data))
                .catch(error => console.log(`API (posts) call error: ${error}`))
        }
    }, [])

    function getPostList() {
        let list = [...postList].sort(function (a, b) { return b.date.localeCompare(a.date); });

        let post = {
            "userid": 0, "name": "HP Eats", "picture": "/images/pub.gif", "caption": "Venez découvrir notre nouvelle offre",
            "date": "20220128"
        };

        if (list.length !== 0 ) {
            if (list.length <= 3) {
                list.push(post);
            } else {
                list.splice(3, 0, post);
            }
        }
        return list;
    }

    return (
        <div className={`${props.className} Post-list`}>
            {getPostList()
                .map((post, index) => (
                    <div className='Postlist-post' key={index}>
                        <Post post={post} />
                    </div>
                ))}
        </div>
    )
}

export default PostList;