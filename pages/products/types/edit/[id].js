import { useState, useEffect } from 'react'
import { useCurrentUser } from '../../../../lib/hooks';
import { useRouter } from 'next/router'

import axios from 'axios'

import Head from 'next/head'
import Header from '../../../../components/head';
import HeaderPage from '../../../../components/header';
function EditTypeProduct ({u, type}) {
    const [user] = useCurrentUser();
  const [ session, loading ] = useSession()
  const [ content , setContent ] = useState()

  const [ title , settitle ] = useState(type.name)
  const [ sku , setsku ] = useState(type.sku)
  const [ sort , setsort ] = useState(type.sort)

  // Fetch content from protected route
 


  const router = useRouter()
  
  const sendform = async () => {
     
      axios.patch('/api/admin/products/types/id/' + type._id, {
            name: title,
          sku: sku,
          sort: sort,
          part: '1'
        })
        .then(function (response) {
          router.push({
              pathname: '/products/types',
              query: { status: 'updated' },
            })
        })
        .catch(function (error) {
          console.log(error);
        });
      
  };
  // If session exists, display content
  if(u){

  
    return (
  <div className="container">
    <Head>
      <title>Редактирование категории товара | FoodApp Admin</title>
      <link rel="icon" href="/favicon.ico" />

      
      <link href="/static/plugins/dropzone/dist/dropzone.css" rel="stylesheet" type="text/css"/>
      <link href="/static/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/static/assets/css/icons.css" rel="stylesheet" type="text/css" />
        <link href="/static/assets/css/style.css" rel="stylesheet" type="text/css" />
        
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
                                    <h4 className="page-title m-0">Редактирование категории товара</h4>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-30">
                            <div className="card-body">
                                <form>
                                <div className="form-group row">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Заголовок</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='title' type="text" value={title} onChange={(text) => settitle(text.target.value)} required id="tite"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="sku" className="col-sm-2 col-form-label">SKU</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='sku' type="text" value={sku} onChange={(text) => setsku(text.target.value)} required id="sku"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="sort" className="col-sm-2 col-form-label">Сортировка</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='sort' type="number" min="1" required value={sort} defaultValue='1' onChange={(text) => setsort(text.target.value)}  id="sort"/>
                                    </div>
                                </div>
                        

                                <div className="text-center m-t-15">
                                    <button type="button" onClick={() => sendform()} className="btn btn-primary waves-effect waves-light">Обновить</button>
                                </div>
                                </form>
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
    <script src="/static/plugins/dropzone/dist/dropzone.js"></script>
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
export async function getStaticPaths() {
    const ures = await fetch('http://localhost:3000/api/sessions')
const u = await ures.json()
if(u){



    // Call an external API endpoint to get posts
    const res = await fetch(`http://localhost:3000/api/admin/products/types`)
    const types = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = types.map((type) => ({
      params: { id: type._id },
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



    const res = await fetch(`http://localhost:3000/api/admin/products/types/id/${params.id}`)
    const type = await res.json()
    
    return {
        props: {
            u, type
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
  
      }
    }else {
        res.redirect(401,'/login')
     }
    }


export default EditTypeProduct