



function HeaderPage() {
    return (
   
    
        <div className="header-bg">

        <header id="topnav">
                <div className="topbar-main">
                    <div className="container-fluid">
        
        
                        <div>
                            
                            <a href="index.html" className="logo">
                                <img src="/static/assets/images/logo.png" alt="" height="26"/> 
                            </a>
        
                        </div>
        
        
                        <div className="menu-extras topbar-custom navbar p-0">
        
                            
        
                            <ul className="list-inline ml-auto mb-0">
                                
        
        
        
                                <li className="list-inline-item dropdown notification-list nav-user">
                                    <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                        <img src="/static/assets/images/users/avatar-6.jpg" alt="user" className="rounded-circle"/>
                                        <span className="d-none d-md-inline-block ml-1"> Рахимов Мадор  </span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                                        <a className="dropdown-item" href="#"><i className="dripicons-user text-muted"></i> Profile</a>
                                        <a className="dropdown-item" href="#"><i className="dripicons-wallet text-muted"></i> My Wallet</a>
                                        <a className="dropdown-item" href="#"><span className="badge badge-success float-right m-t-5">5</span><i className="dripicons-gear text-muted"></i> Settings</a>
                                        <a className="dropdown-item" href="#"><i className="dripicons-lock text-muted"></i> Lock screen</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#"><i className="dripicons-exit text-muted"></i> Logout</a>
                                    </div>
                                </li>
                                <li className="menu-item list-inline-item">
        
                                    <a className="navbar-toggle nav-link">
                                        <div className="lines">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </a>
        
                                </li>
        
                            </ul>
        
                        </div>
        
        
                        <div className="clearfix"></div>
        
                    </div> 
                </div>
        
        
        
                <div className="navbar-custom">
                    <div className="container-fluid">
                        
                        <div id="navigation">
        
        
                            <ul className="navigation-menu">
        
                                <li className="has-submenu">
                                    <a href="/"><i className="dripicons-home"></i> Главная</a>
                                </li>
        
                                <li className="has-submenu">
                                    <a href="/products"><i className="dripicons-store"></i> Каталог <i className="mdi mdi-chevron-down mdi-drop"></i></a>
                                    <ul className="submenu megamenu">
                                        <li>
                                            <ul>
                                                <li><a href="/products">Продукты</a></li>
                                                <li><a href="/products/types">Категории</a></li>
                                               
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="/users"><i className="dripicons-user"></i> Пользователи</a>
                                </li>
                                <li className="has-submenu">
                                    <a href="/orders"><i className="dripicons-cart"></i> Заказы</a>
                                </li>
                                <li className="has-submenu">
                                    <a href="/slides"><i className="dripicons-device-desktop"></i>Слайдер</a>
                                </li>
                                
        
                            </ul>
        
                        </div> 
                    </div> 
                </div> 
            </header>
        </div>
    )
   
       
   }
   
   export default HeaderPage