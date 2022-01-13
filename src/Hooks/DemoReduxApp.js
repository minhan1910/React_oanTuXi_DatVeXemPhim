import React, {useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {addComment} from "../redux/actions/FaceBookActions";
export default function DemoReduxApp(props) {
  //useSelector thay cho mapStateToProps
  const comments = useSelector(state => state.FacebookReducer.comments);

  //Lấy hàm dispatch từ useDispatch => để gửi  giá trị lên reducer
 const dispatch = useDispatch();


  //Lấy thông tin người dùng nhập vào
  let [userComment, setUserComment] = useState({
      name: '',
      content: '',
      avatar: '',
  });

  //Vì setState thì nó sẽ render lại toàn bộ mới log được
  console.log(userComment);
  const handleChange = (e) => {

      const {value, name} = e.target;
      setUserComment({
        ...userComment,
        [name]: value,
      });
  }

  const handleComment = (e) => {
    e.preventDefault(); //chặn browser reload lại

    let usComment = {...userComment, avatar: `https://i.pravatar.cc/150?u=${userComment.name}`};

    dispatch(addComment(usComment));
  }

  return (
    <div className="container">
      <h3>Facebook App!</h3>
      <div className="card text-left">
        <div className="card-header">
            {
                comments.map((comment) => {
                    return <div className="row" key={comment.id}>
                                <div className="col-1">
                                    <img src={comment.avatar} style={{height: 60}} alt="132" />
                                </div>
                                <div className="col-11">
                                    <h6 className="text-danger">{comment.name}</h6>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                })
            }
            
        </div>
        <form className="card-body" onSubmit={handleComment}>
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input type="text" className="form-control" name="name" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <h4 className="card-text">Content</h4>
            <input type="text" className="form-control" name="content" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//     return {
//         comments: state.FacebookReducer.comments,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }
//  connect(mapStateToProps, mapDispatchToProps)(DemoReduxApp);


