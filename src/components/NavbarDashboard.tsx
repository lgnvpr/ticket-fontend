import React, { Component, useEffect, useState } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LaunchIcon from '@material-ui/icons/Launch';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HelpIcon from '@material-ui/icons/Help';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EmailIcon from '@material-ui/icons/Email';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ReportIcon from '@material-ui/icons/Report';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { AppModel } from '../Redux';
import { useSelector } from 'react-redux';
import { Notifination, NotifinationFirebase } from '../Redux/NotifinationFirebase';
import { store } from '../Redux/Store';


type State = {
    sidebar: boolean,
    showNav: boolean,
    showNav1: boolean,
    showNav2: boolean,
    focused: boolean
}

type Props = {
    search?(value: string): void
}


var timeOut: any;
export default function NavbarDashboard(props: Props) {



    const store: AppModel = useSelector((state: AppModel) => state);


    const authen: any = store.authen;
    const NotifinationFirebase: any = store.NotifinationFirebase || [];

    const [state, setState] = useState<State>({
        sidebar: true,
        showNav: true,
        showNav1: true,
        showNav2: true,
        focused: true
    })



    const onShowNav = () => {
        setState({ ...state, showNav: !state.showNav, showNav1: true, showNav2: true });
    };

    const onShowThongBao = () => {
        setState({ ...state, showNav1: !state.showNav1, showNav: true, showNav2: true });

    }

    const focusedTimKiem = () => {
        setState({ ...state, focused: state.focused, showNav: true, showNav1: true, showNav2: true });
    }

    const onNavbar = () => {
        setState({
            ...state,
            sidebar: !state.sidebar
        })
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.add("g-sidenav-pinned");
        } else {
            document.body.classList.remove("g-sidenav-pinned");
        }
    }

    // makes the sidenav normal on hover (actually when mouse enters on it)
    const onMouseEnterSidenav = () => {
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.add("g-sidenav-show");
        }
    }
    // làm cho sidenav nhỏ khi di chuột (thực sự khi chuột rời khỏi nó)
    const onMouseLeaveSidenav = () => {
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-show");
        }
    }

    // chức năng trên thiết bị di động giúp tìm kiếm mở
    const openSearch = () => {
        document.body.classList.add("g-navbar-search-showing");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-showing");
            document.body.classList.add("g-navbar-search-show");
        }, 150);
        setTimeout(function () {
            document.body.classList.add("g-navbar-search-shown");
        }, 300);
    };
    // chức năng trên thiết bị di động làm cho tìm kiếm đóng lại
    const closeSearch = () => {
        document.body.classList.remove("g-navbar-search-shown");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-show");
            document.body.classList.add("g-navbar-search-hiding");
        }, 150);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hiding");
            document.body.classList.add("g-navbar-search-hidden");
        }, 300);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hidden");
        }, 500);
    };

    function onSearch(valueSearch: string) {

        clearInterval(timeOut);
        timeOut = setInterval(() => {
			if (props.search) {
				props.search(valueSearch);
			}
            clearInterval(timeOut);
        }, 500)

    }




    return (
        < nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Search form */}
                    <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
                        <div className={(state.focused) ? "form-group mb-0" : "form-group mb-0 focused"} onClick={focusedTimKiem}>
                            <div className="input-group input-group-alternative input-group-merge">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><SearchIcon /></span>
                                </div>
                                <input className="form-control" placeholder="Tìm kiếm" type="text" onChange= {(e)=> onSearch(e.target.value)} />
                            </div>
                        </div>
                        <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close" onClick={closeSearch}>
                            <span aria-hidden={true}>×</span>
                        </button>
                    </form>
                    {/*  Navbar links */}
                    <ul className="navbar-nav align-items-center ml-md-auto" >
                        <li className="nav-item d-xl-none">
                            {/* Sidenav toggler */}
                            <div className={state.sidebar ? "pr-3 sidenav-toggler sidenav-toggler-dark" : "pr-3 sidenav-toggler sidenav-toggler-dark active"} data-action="sidenav-pin" data-target="#sidenav-main" onClick={onNavbar} onMouseEnter={onMouseEnterSidenav}
                                onMouseLeave={onMouseLeaveSidenav}>
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item d-sm-none">
                            <a className="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main" onClick={openSearch}>
                                <ZoomInIcon />
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={onShowThongBao}>
                                <NotificationsIcon />
                            </a>
                            <div className={state.showNav1 ? "dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden" : "dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden show"}>
                                {/* Dropdown header */}
                                <div className="px-3 py-3">
                                    <h6 className="text-sm text-muted m-0">Bạn có <strong className="text-primary">{NotifinationFirebase?.nationality?.length || 0}</strong> thông báo.</h6>
                                </div>
                                {/* List group */}
                                <div className="list-group list-group-flush">

                                    {NotifinationFirebase?.nationality?.map((item: Notifination) => {
                                        return (
                                            <a href="#!" className="list-group-item list-group-item-action">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* Avatar */}
                                                        <img alt="Image placeholder" src={authen.info?.avt || "images/use.png"} className="avatar rounded-circle" />
                                                    </div>
                                                    <div className="col ml--2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="mb-0 text-sm">{item.title || "Nguyễn Văn Lương"}</h4>
                                                            </div>
                                                            <div className="text-right text-muted">
                                                                <small></small>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm mb-0">{item.nationality}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    })}






                                </div>
                                {/* View all */}
                                <a href="#!" className="dropdown-item text-center text-primary font-weight-bold py-3">Xem tất cả</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown" onClick={(event) => {

                            setState({ ...state, showNav2: !state.showNav2, showNav: true, showNav1: true });

                        }}>
                            <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <LaunchIcon />
                            </a>
                            <div className={state.showNav2 ? "dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right" : "dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right show"}>
                                <div className="row shortcuts px-4">
                                    <a href="#!" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                                            <EventNoteIcon />
                                        </span>
                                        <small>Lịch</small>
                                    </a>
                                    <a href="#!" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                                            <EmailIcon />
                                        </span>
                                        <small>Email</small>
                                    </a>
                                    <a href="#!" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                                            <CreditCardIcon />
                                        </span>
                                        <small>Thanh toán</small>
                                    </a>
                                    <a href="#!" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                                            <ReportIcon />
                                        </span>
                                        <small>Báo cáo</small>
                                    </a>
                                    <a href="#!" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                                            <LocationOnIcon />
                                        </span>
                                        <small>Bản đồ</small>
                                    </a>
                                    <a href="#!" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                                            <StorefrontIcon />
                                        </span>
                                        <small>Shop</small>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-center ml-auto ml-md-0"
                        onClick={(event) => {
                            onShowNav();
                        }}
                    >
                        <li className="nav-item dropdown">
                            <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="media align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img alt="Image placeholder" src={authen.info?.avt || "images/use.png"} />
                                    </span>
                                    <div className="media-body ml-2 d-none d-lg-block">
                                        <span className="mb-0 text-sm  font-weight-bold">{authen?.info?.name || "Nguyễn Văn Lương"}</span>
                                    </div>
                                </div>
                            </a>
                            <div className={(state.showNav) ? "dropdown-menu dropdown-menu-right" : "dropdown-menu dropdown-menu-right show"}>
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Xin chào!</h6>
                                </div>
                                <a href="#!" className="dropdown-item">
                                    <PersonIcon style={{ fontSize: "20px" }} />
                                    <span>Thông tin của tôi</span>
                                </a>
                                <a href="#!" className="dropdown-item">
                                    <SettingsIcon style={{ fontSize: "20px" }} />
                                    <span>Cài đặt</span>
                                </a>
                                <a href="#!" className="dropdown-item">
                                    <EventNoteIcon style={{ fontSize: "20px" }} />
                                    <span>Hoạt động</span>
                                </a>
                                <a href="#!" className="dropdown-item">
                                    <HelpIcon style={{ fontSize: "20px" }} />
                                    <span>Hỗ trợ</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="/login" className="dropdown-item"
                                    onClick={() => {
                                        localStorage.setItem("jwt", "");
                                    }}
                                >
                                    <DirectionsRunIcon style={{ fontSize: "20px" }} />
                                    <span>Đăng xuất</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
