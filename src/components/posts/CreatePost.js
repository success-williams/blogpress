import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/PostActions';
// import postReducer from '../../store/reducers/postReducer';

 class CreatePost extends Component {
     state = {
        title: '',
        content: ''
     }

     //handler for each input
     handleChange = (e) => {
       this.setState({
          [e.target.id]:e.target.value
       })
        
     }

     //handler for each submission
     handleSubmit = (e) => {
         e.preventDefault();
        //  console.log(this.state); 
        //connected it to the state here
        this.props.createPost(this.state);
        //redirects to the homepage/dashboard
        this.props.history.push('/');
     }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Post</h5>  
                <div className="input-field">
                  <label htmlFor="title">Title</label>  
                  <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                  <label htmlFor="content">content</label>  
                  <input type="text" id="content" onChange={this.handleChange}/>
                
                </div>
                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Create post</button>
                </div>
                </form>                
            </div>
        )
    }
}

//dispatching actions from redux and connecting it to the current state here
const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(null, mapDispatchToProps)(CreatePost)
