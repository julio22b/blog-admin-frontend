import React, { useState } from 'react';
import authHeader from '../../services/authHeader';

export default function DeleteConfirmation({ showDeleteConfirm, handleClick, postId }) {
    const [responseMsg, setResponseMsg] = useState('');
    const deletePost = async () => {
        const request = await fetch(
            `https://julio22b-blog-api-1.glitch.me/api/post/${postId}/delete`,
            {
                method: 'delete',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json', Authorization: authHeader() },
            },
        );
        const response = await request.json();
        setResponseMsg(response.message);
    };
    return (
        <div className={`delete-confirmation ${showDeleteConfirm ? 'active' : ''}`}>
            Are you sure you want to delete this post?{' '}
            <button type="button" onClick={deletePost}>
                Yes
            </button>{' '}
            <button type="button" onClick={handleClick}>
                No
            </button>
            <p>{responseMsg}</p>
        </div>
    );
}
