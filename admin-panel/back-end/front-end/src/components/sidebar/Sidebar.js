import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div>
            <ul>
                <li>
                    <a href="/Dashboard" >Dashboard</a>
                </li>

                <li>
                    <a>Vehicles</a>
                </li>

                <li>
                    <a>Users</a>
                </li>
            </ul>
        </div>
    )
}
