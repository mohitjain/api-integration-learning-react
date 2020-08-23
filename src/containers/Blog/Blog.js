import React, { Component } from 'react';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from "./Posts/Posts";
import { Route } from "react-router";
import { Link } from 'react-router-dom'

class Blog extends Component {

    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                                <Link to="/new-post">New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <Posts/>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>

            </div>
        );
    }
}

export default Blog;
//
// <section>
//     <FullPost id={this.state.selectedPostId}/>
// </section>
// <section>
//     <NewPost />
// </section>