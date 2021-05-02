import React from 'react';
import './layout.css';
import LeftBar from "./leftbar/LeftBar";
import CenterBar from "./centerbar/CenterBar";
import RightBar from "./rightbar/RightBar";

export default function Layout() {
    return (
        <main className="layout">

            <LeftBar />
            <CenterBar />
            <RightBar />

        </main>
    )
}