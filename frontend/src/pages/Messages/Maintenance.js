import React from 'react';
import { GiGears } from "react-icons/gi";

function Maintenance(props) {
    return (
        <div className="flex flex-col items-center justify-center px-4 lg:px-0 pt-36">
        <GiGears  size={150}/>
            <p className="text-4xl mt-24 lg:mt-8 text-center">Sorry. Be back soon</p>
        </div>
    );
}

export default Maintenance;