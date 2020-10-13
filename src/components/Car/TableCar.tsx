import React, { Component } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import ReactBSAlert from "react-bootstrap-sweetalert";
import Button from 'react-bootstrap/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ImageIcon from '@material-ui/icons/Image';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AddIcon from '@material-ui/icons/Add';
import { Staff } from "../../share/base-ticket/base-carOwner/Staff";
import FormNhanVien from './FormCar';
import { Car } from '../../share/base-ticket/base-carOwner/Car';

type Props = {
    car: Car[],
    onCar: (car: Car) => void,
    onDeleteCar: (id: string) => void
};



export default function TableCar(props: Props) {
    return (
        <div className="card">
            {/* Card header */}

            <div className="card-header border-0">
                <div className="row">
                    <div className="col-6">
                        <h3 className="mb-0">Danh sách xe</h3>
                    </div>

                    <div className="col-6 text-right">
                        <button onClick={() => {
                            props.onCar({});
                        }}
                            className="btn btn-sm btn-primary btn-round btn-icon"
                            data-toggle="tooltip"
                            data-original-title="Edit product" >
                            <span className="btn-inner--icon"><AddIcon /></span>
                            <span className="btn-inner--text">Thêm</span>
                        </button>
                        <a href="#" className="btn btn-sm btn-primary btn-round btn-icon" data-toggle="tooltip" data-original-title="Edit product">
                            <span className="btn-inner--icon"><ImportExportIcon /></span>
                            <span className="btn-inner--text">Export</span>
                        </a>
                        <div className="form-group row float-right">
                            <div className="col-md-auto">
                                <input className="form-control form-control-default" type="search" placeholder="Tìm kiếm" id="example-search-input" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Light table */}
            <div className="table-responsive">
                <table className="table align-items-center table-flush table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="sort" data-sort="name">Tên xe</th>
                            <th scope="col" className="sort" data-sort="birthday">Loại xe</th>
                            <th scope="col" className="sort" data-sort="address">Biển số xe</th>
                            <th scope="col" className="sort" data-sort="numberphone">Ngày nhập </th>
                            <th scope="col" className="sort" data-sort="cmnd">Xuất xứ</th>
                            <th scope="col" className="sort" data-sort="chucVu">Trạng thái</th>
                            <th scope="col" className="sort" data-sort="action">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props?.car?.map((carItem: Car) => {
                                return (
                                    <tr>

                                        <td className="table-user">
                                            <img src="/images/huynhvannam.jpg" className="avatar rounded-circle mr-3" />
                                            <b>{carItem.name}</b>
                                        </td>
                                        <td>
                                            <span className="text-muted">{carItem?.TypeCar?.nameTypeCar}</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{carItem.licensePlates}</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{carItem.entryAt}</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{carItem.origin}</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{carItem.statusCar}</span>
                                        </td>
                                        <td className="table-actions">
                                            <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                                                <EditIcon
                                                    onClick={() => {
                                                        props.onCar(carItem)
                                                    }}
                                                />
                                            </a>
                                            <a href="#!" className="table-action table-action-delete" data-toggle="tooltip" data-original-title="Delete product">
                                                <DeleteIcon
                                                    onClick={() => {
                                                        if (carItem && carItem._id) props.onDeleteCar(carItem._id)
                                                    }}
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {/*  Card footer */}
            <div className="card-footer py-4">


                {/* <Pagination  color="primary" /> */}
            </div>

        </div>
    )
}




