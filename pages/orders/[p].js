import { useState, useEffect } from 'react'

import { useCurrentUser } from '../../lib/hooks';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/head';

import HeaderPage from '../../components/header';

const Orders = ({u, orders, query}) => {
    const [user] = useCurrentUser();
    const router = useRouter()
    const { status } = router.query

    if(u){
        const [or, setOr] = useState([])
        const [l, setL] = useState(false)
        const [us, setUs] = useState([])
        useEffect(() => {
            // redirect to home if user is authenticated
        
            const p = async () => {
                const ures = await fetch('http://localhost:3000/api/sessions')
                const u = await ures.json()
                let skip = (query.p - 1) * 20;
                const res = await fetch('http://localhost:3000/api/admin/orders/all?s='+skip+'&p='+u.user._id)
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
                                        <th>Заголовок</th>
                                        <th>Описание</th>
                                        <th>Состав</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {or.map((product) => (
                                    <tr>
                                        <th scope="row">{product.title}</th>
                                        <td>{product.descript}</td>
                                        <td>{product.sostav}</td>
                                        <td><Link href="/products/edit/[id]" as={`/products/edit/${product._id}`}><a className='btn btn-primary'>Изменить</a></Link></td>
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

Orders.getInitialProps =  async ({ query }) => {
    const ures = await fetch('http://localhost:3000/api/sessions')
    const u = await ures.json()
    if(u){

    let skip = (query.p - 1) * 20;
    const res = await fetch('http://localhost:3000/api/admin/orders/all?s='+skip+'&p=1')
    const orders = await res.json()
  
  
    return {
     
       u, orders, query
      
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second

    }
    }else {
        res.redirect(401,'/login')
    }
    
  }
export default Orders
