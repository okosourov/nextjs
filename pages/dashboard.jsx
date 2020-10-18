import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCurrentUser } from '../lib/hooks';
import Layout from '../components/layout'
import Link from 'next/link';
import Head from 'next/head'
import Header from '../components/head';
import HeaderPage from '../components/header';
import Moment from 'react-moment';
import 'moment-timezone';
function Home ({u, users, usersc}) {
    const [user] = useCurrentUser();
    const router = useRouter()
  const [ content , setContent ] = useState()

  // Fetch content from protected route
 



  // If no session exists, display access denied message

  // If session exists, display content
  if(u){

    
    const [l, setL] = useState(false)
    const [us, setUs] = useState([])
    const [d, setD] = useState([])
    useEffect(() => {
        // redirect to home if user is authenticated
    
        const p = async () => {
            const ures = await fetch('http://localhost:3000/api/sessions')
            const u = await ures.json()
            console.log(u)
            const dres = await fetch('http://localhost:3000/api/admin/orders/day?p='+u.user._id)
            const d = await dres.json()
  
  
            setUs(u)
            setD(d)

            setL(true)
  
            
        }
        if(!l) {
            p()
        }
  
      });
      console.log(d)
  return (
      
  <div className="container">
    <Head>
      <title>FoodApp Admin</title>
      <link rel="icon" href="/favicon.ico" />

      
      <script src="/static/assets/js/jquery.min.js"></script>
      <link href="/static/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/static/assets/css/icons.css" rel="stylesheet" type="text/css" />
        <link href="/static/assets/css/style.css" rel="stylesheet" type="text/css" />
        <script src="/static/plugins/morris/morris.min.js"></script>
        
    </Head>

    <main>
    
    <Header/>


    <HeaderPage/>

        <div className="wrapper">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h4 className="page-title m-0">Главная</h4>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>


                 


                


               
                


                <div className="row">
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h2>Новые</h2>
                                {d.map((or) => (
                                    or.status === '1' ? (
                                        <Link href="/orders/id/[id]" as={`/orders/id/${or._id}`}>
                                        <div className="col-xl-12">
                                            <div className="card bg-pink mini-stat text-white">
                                                <div className="p-3 mini-stat-desc">
                                                    <div className="clearfix">
                                                        <h6 className="text-uppercase mt-0 float-left text-white-50">Заказ #</h6>
                                                        <h4 className="mb-3 mt-0 float-right"><Moment format="MMDD/hhmm">{or.created_at}</Moment></h4>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                        </Link>
                                ):null
                                    
                                ))}
                                

                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h2>В обработке</h2>
                                {d.map((or) => (
                                    or.status === '2' ? (
                                        <Link href="/orders/id/[id]" as={`/orders/id/${or._id}`}>
                                        <div className="col-xl-12">
                                            <div className="card bg-warning mini-stat text-white">
                                                <div className="p-3 mini-stat-desc">
                                                    <div className="clearfix">
                                                        <h6 className="text-uppercase mt-0 float-left text-white-50">Заказ #</h6>
                                                        <h4 className="mb-3 mt-0 float-right"><Moment format="MMDD/hhmm">{or.created_at}</Moment></h4>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                        </Link>
                                ):null
                                    
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h2>В Доставке</h2>
                                {d.map((or) => (
                                    or.status === '3' ? (
                                        <Link href="/orders/id/[id]" as={`/orders/id/${or._id}`}>
                                        <div className="col-xl-12">
                                            <div className="card bg-warning mini-stat text-white">
                                                <div className="p-3 mini-stat-desc">
                                                    <div className="clearfix">
                                                        <h6 className="text-uppercase mt-0 float-left text-white-50">Заказ #</h6>
                                                        <h4 className="mb-3 mt-0 float-right"><Moment format="MMDD/hhmm">{or.created_at}</Moment></h4>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                        </Link>
                                ):null
                                    
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h2>Выполнено</h2>
                                {d.map((or) => (
                                    or.status === '4' ? (
                                        <Link href="/orders/id/[id]" as={`/orders/id/${or._id}`}>
                                        <div className="col-xl-12">
                                            <div className="card bg-success mini-stat text-white">
                                                <div className="p-3 mini-stat-desc">
                                                    <div className="clearfix">
                                                        <h6 className="text-uppercase mt-0 float-left text-white-50">Заказ #</h6>
                                                        <h4 className="mb-3 mt-0 float-right"><Moment format="MDD/hhmmss">{or.created_at}</Moment></h4>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                        </Link>
                                ):null
                                    
                                ))}

                            </div>
                        </div>
                    </div>
                    
                </div>

            </div> 
        </div>



    </main>
 
    <script src="/static/assets/js/jquery.min.js"></script>
    <script src="/static/assets/js/jquery.min.js"></script>
    <script src="/static/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/static/assets/js/modernizr.min.js"></script>
    <script src="/static/assets/js/waves.js"></script>
    <script src="/static/assets/js/jquery.slimscroll.js"></script>
    <script src="/static/plugins/raphael/raphael.min.js"></script>
    <script src="/static/assets/pages/dashboard.int.js"></script>
     
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


export async function getStaticProps(context) {
    const ures = await fetch('http://localhost:3000/api/sessions')
    const u = await ures.json()
    if(u){
        const usersres = await fetch('http://localhost:3000/api/admin/user/all')
        const users = await usersres.json()
        const userscres = await fetch('http://localhost:3000/api/admin/user/count')
    
        const usersc = await userscres.json()
        return {
            props: {
                u,
                users,
                usersc,
            },
            // Next.js will attempt to re-generate the page:
            // - When a request comes in
            // - At most once every second
    
        }
    }else {
       res.redirect(401,'/login')
    }

    }


export default Home