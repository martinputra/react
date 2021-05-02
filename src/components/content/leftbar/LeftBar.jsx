import React from 'react'
import "./leftbar.css";

export default function LeftBar() {
    return (
        <aside className="leftbar">

            <ul className="lbmenu">
                <li className="lbmenu-item">
                    login
                </li>

                <li className="lbmenu-item">
                    register
                </li>

                <li className="lbmenu-item">
                    about
                </li>

                <li className="lbmenu-item">
                    subscribe
                </li>
            </ul>

        </aside>
    )
}