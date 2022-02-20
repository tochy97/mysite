import React from 'react';

function Footer(props) {
    return (
        <footer id="footer" class="fixed bottom-0 left-0 right-0 w-screen bg-white border-solid border-t-2 border-gray-300">
            <div class="col-start-6 flex items-center justify-center my-5">
                <div class="flex border-2 border-gray-200 hover:border-gray-300 rounded">
                    <input type="text" class="px-4 py-2 w-64" placeholder="Search..."/>
                    <button class="px-4 border-l hover:border-gray-300 hover:underline underline-offset-4 bg-white">
                        Search
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;