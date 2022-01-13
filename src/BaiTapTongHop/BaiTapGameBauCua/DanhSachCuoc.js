import React from 'react';
import QuanCuoc from './QuanCuoc';
import  {useSelector, useDispatch} from 'react-redux';

export default function DanhSachCuoc(props) {

    const danhSachCuoc = useSelector(state => state.BaiTapGameBauCuaReducer.danhSachCuoc);

    const renderDanhSachCuoc = () => {
        return danhSachCuoc.map((item, idnex) => {
            return <div className="col-4" key={idnex}>
                <QuanCuoc quanCuoc={item}/>
            </div>
        });
    }

    return (
        <div className="row mt-2">
            {renderDanhSachCuoc()}
        </div>
    )
}
