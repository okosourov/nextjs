import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../../components/head';

import HeaderPage from '../../../components/header';
import Moment from 'react-moment';
import 'moment-timezone';
import { useCurrentUser } from '../../../lib/hooks';
const Users = ({u, user, orders}) => {
    const [u] = useCurrentUser();
    if(u){

  
        return (
    
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
                                {orders.map(order => (
                                    <tr>
                                        <th scope="row"> <Moment format="DD/MM/YYYY hh:mm">{order.created_at}</Moment></th>
                                        
                                        <td></td>
                                        <td>{order.total }</td>
                                        <td><Link href="/order/id/[id]" as={`/order/id/`}><a className='btn btn-primary'>Посмотреть</a></Link></td>
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








<script src="/static/assets/js/jquery.min.js"></script>
<script src="/static/assets/js/jquery.min.js"></script>
    <script src="/static/assets/js/bootstrap.bundle.min.js"></script>
<script src="/static/assets/js/modernizr.min.js"></script>
<script src="/static/assets/js/waves.js"></script>
<script src="/static/assets/js/jquery.slimscroll.js"></script>


<script src="/static/assets/js/app.js"></script>
</div>
)
} else {
    const [errorMsg, setErrorMsg] = useState('');
    const [user, { mutate }] = useCurrentUser();
    useEffect(() => {
      // redirect to home if user is authenticated
      if (user) router.push('/');
    }, [user]);
  
    async function onSubmit(e) {
      e.preventDefault();
      const body = {
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      };
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        const userObj = await res.json();
        mutate(userObj);
      } else {
        setErrorMsg('Неверный Логин или Пароль! Попробуйте еще раз!');
      }
    }
      return (
        <div className="container">
        
        <div className="wrapper">
        <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-lg-6">
            <h2>Вы не авторизованы!</h2>
            <p>Для просмотра этой страницы необходимо авторизоваться</p>
            </div>
            <div className="col-lg-6">
                <div className="card mb-0">
                    <div className="card-body">
                        <div className="p-2">
                            <h4 className="text-muted float-right font-18 mt-4">Войти</h4>
                            <div>
                                <a href="index.html" className="logo logo-admin"><img src="assets/images/logo_dark.png" height="28" alt="logo"/> FoodApp</a>
                            </div>
                        </div>
                        
                        {errorMsg ? <div class="alert alert-danger" role="alert">
                        {errorMsg}
                    </div> : null}
                        
                        <div className="p-2">
                            <form onSubmit={onSubmit} className="form-horizontal m-t-20">


                                <div className="form-group row">
                                    <div className="col-12">
                                        <input className="form-control" required=""  id="email" type="email" name="email"  placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <input className="form-control" type="password" required="" id='password' name='password' placeholder="Пароль"/>
                                    </div>
                                </div>

                            

                            

                                <div className="form-group text-center row m-t-20">
                                    <div className="col-12">
                                        <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Вход</button>
                                        <Link href="/forget-password"><a>Забыли пароль?</a></Link>{' '}
                                        <Link href="/signup"><a>Еще не зарегистрированы?</a></Link>
                                    </div>
                                </div>

                                
                            </form>
                        </div>


                    </div>
                </div>
            </div>
            
        </div>

    </div>
        
        
       
    
    
    
    
            

            </div>


        
        <script src="/static/assets/js/jquery.min.js"></script>
    <script src="/static/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/static/assets/js/modernizr.min.js"></script>
        <script src="/static/assets/js/waves.js"></script>
        <script src="/static/assets/js/jquery.slimscroll.js"></script>
        
        <script src="/static/plugins/raphael/raphael.min.js"></script>
        <script src="/static/assets/pages/dashboard.int.js"></script>
         
      </div>
      )
  }
}
export async function getStaticPaths() {
    const ures = await fetch('http://localhost:3000/api/sessions')
const u = await ures.json()
if(u){


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

}else {
    res.redirect(401,'/login')
 }
  }
export async function getStaticProps({ params }) {
    const ures = await fetch('http://localhost:3000/api/sessions')
    const u = await ures.json()
    if(u){
    
 
    
    const res = await fetch(`http://localhost:3000/api/admin/user/id/${params.id}`)
    const userdata = await res.json()
    console.log(userdata)
    const user = userdata.user
    const orders = userdata.orders
    return {
      props: {
        u, user, orders
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second

    }
}else {
    res.redirect(401,'/login')
 }
  }
export default Users
