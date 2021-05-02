import React from 'react'
import "./rightbar.css";

function AddsCard({gambar, judul, isi}) {
    return (
        <div className="addscard">
            <img src={ gambar } alt="gambar iklan satu"/>
            <h3>{ judul }</h3>
            <p>{ isi }</p>
        </div>
    )
}

export default function RightBar() {
    return (
        <aside className="rightbar">
            <AddsCard 
                gambar="https://picsum.photos/seed/13/200" 
                judul="Obat kuat perkakas"
                isi="jual obat kuat super, asli buatan China" />
            
            <AddsCard 
                gambar="https://picsum.photos/seed/14/200" 
                judul="Obat kuat perkasa"
                isi="jual obat kuat super, asli buatan Eropa" />

            <AddsCard 
                gambar="https://picsum.photos/seed/15/200" 
                judul="Obat kuat perkara"
                isi="jual obat kuat super, asli buatan Amerika" />
        </aside>
    )
}