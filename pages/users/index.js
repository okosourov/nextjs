import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/head';
import Preloader from '../../components/Preloader';
import HeaderPage from '../../components/header';
const Users = ({users}) => (
    
    <div className='container'>
    <Head>
        <title>Пользователи</title>

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
                            <h4 className="page-title m-0">Пользователи</h4>
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
                                {users.map((user) => (
                                    <tr>
                                        <th scope="row">{user.name}</th>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td><Link href="/users/id/[id]" as={`/users/id/${user._id}`}><a className='btn btn-primary'>Посмотреть</a></Link></td>
                                    </tr>
                                ))}
                                    
                                    
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
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/admin/user/all')
    const users = await res.json()
  
    return {
      props: {
        users,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second

    }
  }
export default Users
