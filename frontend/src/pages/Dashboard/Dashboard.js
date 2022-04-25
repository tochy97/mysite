import React from 'react';
import About from './About/About';
import { BiUpArrowAlt } from "react-icons/bi";

function Dashboard(props) {


    return (
        <div id="Dashboard" class="grid lg:grid-cols-3">
            <div class="col-start-1 col-span-3">
                <About />
            </div>
        </div>
    );
}

export default Dashboard;