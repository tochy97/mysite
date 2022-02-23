import React from 'react';
import ReactLoading from 'react-loading';

function Loading(props) {
    return (
        <div class="mx-96">
            <ReactLoading type="bars" color="#fff" height={'20%'} width={'100%'} />
        </div>
    );
}

export default Loading;