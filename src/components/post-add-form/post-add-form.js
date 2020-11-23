import React from 'react';

const PostAddForm = () => {
    return (
        <form className="bottom-panel f-flex">
            <input 
            type="text" 
            name="" 
            id="" 
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