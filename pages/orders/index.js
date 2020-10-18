import { useState, useEffect } from 'react'

import { useCurrentUser } from '../../lib/hooks';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/head';

import HeaderPage from '../../components/header';
import Moment from 'react-moment';
import 'moment-timezone';
const Orders = ({u, orders, c}) => {
    const router = useRouter()
    const [user] = useCurrentUser();
    const { status } = router.query

    
    let fl = 0
    let paglg = 0
    const pagl = parseInt(c / 20)
    if ((c / 20) - parseInt(c / 20) >= 0.05){
         fl = 2;
         paglg = pagl+3
    }else {
        fl = 1;
        paglg = pagl
    }
   


    let pag = new Array();
    var i;
    for (i = 1; i < paglg; i++) { 
        pag.push(i+1);
    }
    const pg = JSON.stringify(pag)
    console.log(pg)

    if(u){
        const [or, setOr] = useState([])
        const [l, setL] = useState(false)
        const [us, setUs] = useState([])
        useEffect(() => {
            // redirect to home if user is authenticated
        
            const p = async () => {
                const ures = await fetch('http://localhost:3000/api/sessions')
                const u = await ures.json()
    
                const res = await fetch('http://localhost:3000/api/admin/orders/all?s=0&p='+u.user._id)
                const or = await res.json()
    
                setUs(u)
                setOr(or)
                setL(true)

                
            }
            if(!l) {
                p()
            }
            
          });
  
        return (
    
    <div className='container'>
    <Head>
        <title>Заказы</title>

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
                            <h4 className="page-title m-0">Заказы</h4>
                        </div>
                        <div className="col-md-4">
                            <div className="float-right d-none d-md-block">
                                <div className="dropdown">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        {status === 'success' ? (
            <div class="alert alert-success" role="alert">
                <strong>Товар успешно создан!</strong>
            </div>
        ): null}
        {status === 'updated' ? (
            <div class="alert alert-success" role="alert">
                <strong>Товар успешно обновлен!</strong>
            </div>
        ): null}
        <div className="row">
            <div className="col-lg-12">
                <div className="card m-b-30">
                    <div className="card-body">

                       

                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Статус</th>
                                        <th>Дата</th>
                                        <th>Имя</th>
                                        <th>Телефон</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {or.map((order) => (
                                    <tr>
                                        <th><div className="progress" style={{height:'5px'}}><div className="progress-bar bg-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{width: '10%'}}></div></div></th>
                                        <th scope="row"><Moment format="DD/MM/YYYY в hh:mm">{order.created_at}</Moment></th>
                                        <td>{order.name}</td>
                                        <td>{order.phone}</td>
                                        <td><Link href="/orders/id/[id]" as={`/orders/id/${order._id}`}><a className='btn btn-primary'>Просмотр</a></Link></td>
                                    </tr>
                                    
                                ))}
                                    
                                    
                                </tbody>
                            </table>
                            
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                            <ul className="pagination">


                                {pag.map(() => {
                                    <li className="paginate_button page-item"><a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0" class="page-link">111</a></li>
                                })}
                                
                               
                                <li className="paginate_button page-item next" id="datatable_next"><a href="#" aria-controls="datatable" data-dt-idx="7" tabindex="0" className="page-link">Next</a></li>
                            </ul>
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
)} else {
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

export async function getStaticProps() {
    const ures = await fetch('http://localhost:3000/api/sessions')
const u = await ures.json()
if(u){


    const res = await fetch('http://localhost:3000/api/admin/orders/all?s=0&p=1')
    const orders = await res.json()
    const cres = await fetch('http://localhost:3000/api/admin/orders/count?p=1');
    const c = await cres.json()
    return {
      props: {
        u, orders, c
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second

    }
}else {
    res.redirect(401,'/login')
 }

  }
export default Orders
