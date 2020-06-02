import React, { useState, useEffect } from 'react';
import Post from './Post';

export default function PostList({ currentUser, handleLogOut }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const request = await fetch('http://localhost:4000/api/posts');
            const posts = await request.json();
            setPosts(posts);
        };
        getPosts();
    }, []);

    return (
        <>
            <section className="post-list">
                {currentUser && <h2>Hello {currentUser.username}. Here are your posts </h2>}
                {posts.map((post) => (
                    <Post
                        title={post.title}
                        timestamp={post.timestamp}
                        last_update={post.last_update}
                        published={post.published}
                        key={post._id}
                        _id={post._id}
                    />
                ))}
            </section>
        </>
    );
}