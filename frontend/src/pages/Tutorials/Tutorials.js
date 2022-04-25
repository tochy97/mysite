import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../Messages/Loading';
import Blog from '../../components/Blog/Blog';

function Tutorials(props) {
    const { posts } = useSelector(
        (state) => ({
            posts: state.posts.posts,
        }), shallowEqual);
    return (
        <div id="dashboard" class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 z-0">
            {
                posts
                    ?
                    posts.map((pst, index) => (
                        <Link to={`../blog/${pst.id}`}>
                            <div id="preview" class="col-span-1 max-h-96 overflow-hidden border-solid border-4 border-gray-300 rounded hover:shadow-2xl hover:border-gray-400 cursor-pointer transition duration-500 ">
                                <Blog post={pst} />
                            </div>
                        </Link>
                    ))
                    :
                    <Loading />
            }
        </div>
    );
}

export default Tutorials;