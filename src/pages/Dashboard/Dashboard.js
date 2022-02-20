import React from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';

function Dashboard(props) {
    return (
        <main id="dashboard" class="grid grid-row gap-14 mx-14 lg:mx-60">
            <Link to="blog">
                <div id="preview" class="max-h-96 overflow-hidden border-solid border-2 border-gray-300 rounded hover:shadow-2xl hover:border-gray-400 cursor-pointer transition duration-500 " onClick={e => console.log("1")}>
                    <Blog/>
                </div>
            </Link>
        </main>
    );
}

export default Dashboard;