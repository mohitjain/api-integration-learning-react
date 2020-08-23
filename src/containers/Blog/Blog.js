import React, { Component } from 'react';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from "./Posts/Posts";
import { Route } from "react-router";
import { NavLink, Switch } from 'react-router-dom';


class Blog extends Component {

    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" exact>Home</NavLink>
                                <NavLink to="/new-post">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <Posts/>}/>*/}

                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>

                    <Route render={() => <h1>Not found</h1>} />
                </Switch>
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