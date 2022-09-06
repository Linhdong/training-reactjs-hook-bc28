import React from 'react'
import { connect,useSelector,useDispatch } from 'react-redux'
import { changeNumber } from '../../../redux/reducers/NumberReducer';

export default function DemoNumber(props) {
    const number = useSelector(state => state.number);
    const dispatch = useDispatch();
  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button className='btn  btn-success mt-2' onClick={() => {
            //C1: tự tạo ra action để dispatch reducer slice
            // const action = {
            //     type: 'numberReducer/changeNumber',
            //     payload: number + 1
            // }
            //C2: :action creator
            const action = changeNumber(number + 1);
            //{
            //     type: 'numberReducer/changeNumber',
            //     payload: number + 1
            // }
            dispatch(action);
        }}>+</button>
    </div>
  )
}

