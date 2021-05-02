import React from 'react';
import './centerbar.css';

export default function CenterBar() {
    return (
        <main className="centerbar">
            <h1><b>Ini Content Saya</b></h1>
            <small><i>author : Fadliselaz</i></small>

            <img src="https://picsum.photos/seed/13/500" alt="gambar foto content kebun" />

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis animi veniam minus rem dicta aperiam cum repudiandae magni nisi sit itaque nostrum, maiores illo. Optio impedit quod id consectetur quo?</p>

            <small>
                {Date().toString().split('GMT')[0]}
            </small>
        
        </main>
    )
}