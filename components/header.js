



function HeaderPage() {
    return (
   
    
        <div className="header-bg">

        <header id="topnav">
                <div className="topbar-main">
                    <div className="container-fluid">
        
        
                        <div>
                            
                            <a href="/dashboard" className="logo">
                                <img src="/static/assets/images/logo.png" alt="" height="26"/> 
                            </a>
        
                        </div>
        
        
                        <div className="menu-extras topbar-custom navbar p-0">
        
                            
        
                            <ul className="list-inline ml-auto mb-0">
                                
        
        
        
                                
        
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
                                    <a href="/dashboard"><i className="dripicons-home"></i> Главная</a>
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