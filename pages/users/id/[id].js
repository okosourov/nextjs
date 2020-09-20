import Head from 'next/head'
import Link from 'next/link'
import Header from '../../../components/head';
import Preloader from '../../../components/Preloader';
import HeaderPage from '../../../components/header';
const Users = ({user}) => (
    
    <div className='container'>
    <Head>
        <title>Подробнее о Пользователе</title>

    </Head>
    <Header/>


    <HeaderPage/>


<div className="wrapper">
    <div className="container-fluid">


        <div className="row">
            <div className="col-sm-12">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h4 className="page-title m-0">Пользователь</h4>
                        </div>
                        <div className="col-md-4">
                            <div className="float-right d-none d-md-block">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ti-settings mr-1"></i> Settings
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-lg-12">
                <div className="card m-b-30">
                    <div className="card-body">



                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Имя</th>
                                        <th>Телефон</th>
                                        <th>Email</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                             
                                    <tr>
                                        <th scope="row">{user.name}</th>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        
                                    </tr>

                                    
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div> 
            </div> 
            <div className="row">
            <div className="col-sm-12">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h4 className="page-title m-0">Заказы</h4>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
            <div className="row">
            <div className="col-lg-12">
                <div className="card m-b-30">
                    <div className="card-body">



                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Дата</th>
                                        <th>Тип оплаты</th>
                                        <th>Итог</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                             
                                    <tr>
                                        <th scope="row">Сегодня</th>
                                        <td>Курьеру картой</td>
                                        <td>500</td>
                                        <td><Link href="/users/order/[id]" as={`/users/order/`}><a className='btn btn-primary'>Посмотреть</a></Link></td>
                                    </tr>

                                    
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div> 
            </div> 
           
    </div> 
</div>




<footer className="footer">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                © 2019 - 2020 Zinzer <span className="d-none d-md-inline-block"> - Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign.</span>
            </div>
        </div>
    </div>
</footer>




<script src="/static/assets/js/jquery.min.js"></script>
<script src="/static/assets/js/bootstrap.bundle.min.js"></script>
<script src="/static/assets/js/modernizr.min.js"></script>
<script src="/static/assets/js/waves.js"></script>
<script src="/static/assets/js/jquery.slimscroll.js"></script>


<script src="/static/assets/js/app.js"></script>
</div>
)
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`http://localhost:3000/api/admin/user/all`)
    const users = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = users.map((user) => ({
      params: { id: user._id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
export async function getStaticProps({ params }) {
   
    const res = await fetch(`http://localhost:3000/api/admin/user/id/${params.id}`)
    const user = await res.json()
  
    return {
      props: {
        user,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second

    }
  }
export default Users
