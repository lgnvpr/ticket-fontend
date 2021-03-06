import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HelpFormat } from '../../Helpers/HelpFormat'
import { HelpTime } from '../../Helpers/HelpTime'
import { Trip } from '../../share/base-ticket/base-carOwner/Trip'
import { Paging } from '../../share/base-ticket/Paging'
import Diagram from '../DiagramsTicket/Diagram'


type Props  = {
    trips  :Trip
}
export default function ListTripItem(props : Props) {
    let history = useHistory();
    function calTimeWithHours(time : Date , hour : number) : Date{
        time = new Date(time);
        time.setHours(time.getHours() + hour);
        return time;
    }


    return (
        <div className="khungThongTinVe mt-4">
            <div className="containerKhung">
                <div className="thongTinChung">
                    <div className="khungAnhXe">
                        <img className="imageXe" src="https://static.vexere.com/production/images/1588992988116.jpeg" alt="race" />
                    </div>
                    <div className="khungThongTinXe">
                        <div className="khungTitleXe">
                            <div className="bus-info">
                                <div className="bus-name">
                                    {props.trips.Car?.name}
                                        </div>
                            </div>
                            <div className="seat-type">
                                {/* Giường nằm 38 chỗ */}
                                    </div>
                            <div className="from-to">
                                <svg className="iconTienTrinh" xmlns="http://www.w3.org/2000/svg" width="14" height="74" viewBox="0 0 14 74"><path fill="none" stroke="#787878" stroke-linecap="round" stroke-width="2" stroke-dasharray="0 7" d="M7 13.5v46"></path><g fill="none" stroke="#484848" stroke-width="3"><circle cx="7" cy="7" r="7" stroke="none"></circle><circle cx="7" cy="7" r="5.5"></circle></g><path d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z" fill="#787878"></path></svg>
                                <div className="from-to-content">
                                    <div className="content from">
                                        <div className="hour">{HelpTime.getHourAndMinute(props.trips.Route?.startAt||new Date())}
                                                </div>
                                        <div className="place">• {props.trips.Route?.localStart}
                                                </div>
                                    </div>
                                    <div className="duration">{props.trips.Route?.sumTimeRun}h
                                            </div>
                                    <div className="content to">
                                        <div className="hour">
                                            {HelpTime.getHourAndMinute(calTimeWithHours(props.trips.Route?.startAt||new Date(), props.trips.Route?.sumTimeRun||0))}
                                        
                                                </div>
                                        <div className="place">• {props.trips.Route?.localEnd}
                                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="giaTien">
                            <div className="fare">
                                <div className="small">
                                </div>
                                <div className="">
                                    {HelpFormat.FormatMoney(props.trips.price || 0)}
                                        </div>
                            </div>
                        </div>
                        <div className="khungChoTrong">
                            <div className="info">
                                <div className="choTrong">
                                    {/* 38 chỗ trống */}
                                        </div>
                                <div className="action">
                                    <button type="button" className="btn btn-success "
                                        onClick={(e)=> history.push(`/saleTicket/${props.trips._id}`)}
                                    >Đặt vé</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="full-trip">
                    <span>*</span>
                        {`Vé chặng thuộc chuyến ${HelpTime.getHourAndMinute(props.trips.Route?.startAt)} ${HelpTime.formatDate(props.trips?.timeStart)} ${props.trips.Route?.localStart} - ${props.trips.Route?.localEnd}`}                    
                </div>
            </div>
        </div>
    )
}
