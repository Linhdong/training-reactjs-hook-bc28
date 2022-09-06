import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../../../redux/reducers/FacebookReducer";

export const DemoFacebookApp = () => {
  const { arrComment } = useSelector((state) => state.facebookReducer);
  const useComment = useRef({name: '', content: ''});
  const dispatch  = useDispatch();

  const renderComment = () => {
    return arrComment.map((user, index) => {
      return (
        <div className="d-flex" key={index}>
          <div className="avatar" style={{ width: 50 }}>
            <img
              style={{ display: "block" }}
              src={`https://i.pravatar.cc?u=${user.name}`}
              alt="avatar"
              className="w-100"
            />
          </div>
          <div className="content mx-2">
            <h5 className="text-danger">{user.name}</h5>
            <p>{user.content}</p>
          </div>
        </div>
      );
    });
  };



  const handleChange = (e) => {
    const {id, value} = e.target;
    useComment.current[id] = value;
    console.log(useComment.current);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //gửi dữ liệu lên redux
    let newComment = {...useComment.current};
    const action = addComment(newComment);
    /**
     *  action = {
     *      type: 'facebookReducer/addComment',
     *      payload: {name: 'Hậu', content: '123'}
     * }
     */
    dispatch(action);
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Demo facebook app</h3>
      <div className="card">
        <div className="card-header">{renderComment()}</div>
        <div className="card-body">
          <div className="form-group">
            <p>Name</p>
            <input className="form-control" id="name" onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Content</p>
            <input className="form-control" id="content" onChange={handleChange}/>
          </div>
          <div className="form-group mt-2">
            <button className="btn btn-success" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
