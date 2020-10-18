import { useState, useEffect } from 'react'

import { useCurrentUser } from '../../lib/hooks';
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link';
import Head from 'next/head'
import Header from '../../components/head';
import HeaderPage from '../../components/header';
function NewSlider ({u}) {
    const [user] = useCurrentUser();

  const [ content , setContent ] = useState()
  const [ alt , setalt] = useState()
  const [ link , setlink ] = useState()
  const [ img , setimg ] = useState()
  const [ img2x , setimg2x ] = useState()
  const [ img3x , setimg3x ] = useState()
  const [ imgmob , setimgmob] = useState()


  const [l, setL] = useState(false)
  const [us, setUs] = useState([])
  useEffect(() => {
      // redirect to home if user is authenticated
  
      const p = async () => {
          const ures = await fetch('http://localhost:3000/api/sessions')
          const u = await ures.json()


          setUs(u)

          setL(true)

          
      }
      if(!l) {
          p()
      }

    });

  const handleImage = async (theImg) => {
    var bodyFormData = new FormData();
    bodyFormData.append('avatar', theImg); 
    try {
        const res = await fetch("http://95.216.12.103:3300/upload-slider", {
            method: "POST",
            body: bodyFormData,
        });
        const json = await res.json();
        console.log(json);
        setimg(json.name);
    } catch (error) {
        console.log(error);
    }
  };
  const handleImage2x = async (theImg) => {
    var bodyFormData = new FormData();
    bodyFormData.append('avatar', theImg); 
    try {
        const res = await fetch("http://95.216.12.103:3300/upload-slider", {
            method: "POST",
            body: bodyFormData,
        });
        const json = await res.json();
        console.log(json);
        setimg2x(json.name);
    } catch (error) {
        console.log(error);
    }
  };
  const handleImage3x = async (theImg) => {
    var bodyFormData = new FormData();
    bodyFormData.append('avatar', theImg); 
    try {
        const res = await fetch("http://95.216.12.103:3300/upload-slider", {
            method: "POST",
            body: bodyFormData,
        });
        const json = await res.json();
        console.log(json);
        setimg3x(json.name);
    } catch (error) {
        console.log(error);
    }
  };
  const handleImagemob = async (theImg) => {
    var bodyFormData = new FormData();
    bodyFormData.append('avatar', theImg); 
    try {
        const res = await fetch("http://95.216.12.103:3300/upload-slider", {
            method: "POST",
            body: bodyFormData,
        });
        const json = await res.json();
        console.log(json);
        setimgmob(json.name);
    } catch (error) {
        console.log(error);
    }
  };
  const router = useRouter()
    const sendform = async () => {
    
        axios.post('/api/admin/slides/new', {
            alt: alt,
            link: link,
            img: img,
            img2x: img2x,
            img3x: img3x,
            imgmob: imgmob,
            part: us.user._id
        })
        .then(function (response) {
            router.push({
                pathname: '/slides',
                query: { status: 'success' },
            })
        })
        .catch(function (error) {
            console.log(error);
        });
        
    };
  // Fetch content from protected route
 

  // When rendering client side don't display anything until loading is complete


  // If no session exists, display access denied message



  // If session exists, display content
  if(u){

  
    
  return (
  <div className="container">
    <Head>
      <title>Создание слайда | FoodApp Admin</title>
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
                                    <h4 className="page-title m-0">Создание слайда</h4>
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
                                    <label htmlFor="alt" className="col-sm-2 col-form-label">Альтернативный текст</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='alt' type="text" value={alt} onChange={(text) => setalt(text.target.value)} id="alt"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="link" className="col-sm-2 col-form-label">Ссылка</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='link' type="text" value={link} onChange={(text) => setlink(text.target.value)} id="link"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="img" className="col-sm-2 col-form-label">Изображение</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => handleImage(e.target.files[0])} required  type='file'/>
                                        <input type='hidden' id='img' name='img' value={img} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="img2x" className="col-sm-2 col-form-label">Изображение 2x</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => handleImage2x(e.target.files[0])} required  type='file'/>
                                        <input type='hidden' id='img2x' name='img2x' value={img2x} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="img3x" className="col-sm-2 col-form-label">Изображение 3x</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => handleImage3x(e.target.files[0])} required  type='file'/>
                                        <input type='hidden' id='img3x' name='img3x' value={img3x} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="imgmob" className="col-sm-2 col-form-label">Изображение для телефонов</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => handleImagemob(e.target.files[0])} required  type='file'/>
                                        <input type='hidden' id='imgmob' name='imgmob' value={imgmob} />
                                    </div>
                                </div>
                           
                                

                               

                                <div className="text-center m-t-15">
                                    <button type="button" onClick={() => sendform()} className="btn btn-primary waves-effect waves-light">Создать</button>
                                </div>
                                </form>
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


export async function getStaticProps(context) {
    const ures = await fetch('http://localhost:3000/api/sessions')
const u = await ures.json()
if(u){

    return {
        props: {
            u
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
  
      }

}else {
    res.redirect(401,'/login')
 }

    }


export default NewSlider