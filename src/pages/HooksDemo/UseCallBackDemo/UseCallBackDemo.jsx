import React, {useCallback, useState} from "react";
import Comment from "./Comment"
export default function UseCallBackDemo() {
    const [like, setLike] = useState(1);
    const [number, setNumber] = useState(1);

    const renderLike = () => {
        return <p>Bạn đã thả {like} </p>
    }
    //Hàm useCallback sẽ cache lại hàm renderLike sau mỗi lần setState render.Chỉ tạo hàm renderLike khi like thay đổi
    const renderLikeCallBack = useCallback(renderLike, [like]);

  return (
    <div className="m-5">

        <hr/>
        Like: {like} ♥ - member: {number} <button  className='btn btn-primary' onClick={() => {
            setNumber(number + 1);
        }}>+</button>
        <br />
        <span
          style={{ cursor: "pointer", color: "red", fontSize: 35 }}
          onClick={() => {
            setLike(like + 1);
          }}
        >
          ♥
        </span>
        <br />
        <br />
        <Comment renderLike={renderLikeCallBack}/>
      </div>
  );
}
