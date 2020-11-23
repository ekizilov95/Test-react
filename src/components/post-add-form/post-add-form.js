import React from 'react';
import "./post-add-form.css";

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input 
            type="text" 
            placeholder="О чем Вы думаете сейчас" 
            className="form-control new-post-lable"/>
            <button 
            type="sumbit"
            className="btn btn-outline-secondary"
            >Добавить</button>
        </form>
    )
}

export default PostAddForm;