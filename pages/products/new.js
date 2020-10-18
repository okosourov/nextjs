import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import axios from 'axios'
import { useCurrentUser } from '../../lib/hooks';
import Head from 'next/head'
import Header from '../../components/head';
import HeaderPage from '../../components/header';
function NewProduct ({u, types}) {
    const [user] = useCurrentUser();
    const [ errorTitle, setErrorTitle ] = useState(false)
    const [ errorDescr, setErrorDescr ] = useState(false)
  const [ session, loading ] = useSession()
  const [ content , setContent ] = useState()
  const [ title , settitle ] = useState('')
  const [ sku , setsku ] = useState('')
  const [ descriptl , setdescriptl ] = useState('')
  const [ descript , setdescript ] = useState('')
  const [ structure , setstructure] = useState('')
  const [ price , setprice ] = useState('')
  const [ sort , setsort ] = useState('1')
  const [ file , setfile ] = useState('')
  const [ filemob , setfilemob ] = useState('')
  const [ parrent , setParrent] = useState('')


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
    });
  // Fetch content from protected route
 

  // When rendering client side don't display anything until loading is complete


  // If no session exists, display access denied message

  const handleImage = async (theImg) => {
    var bodyFormData = new FormData();
    bodyFormData.append('avatar', theImg); 
    try {
        const res = await fetch("http://95.216.12.103:3300/upload-avatar", {
            method: "POST",
            body: bodyFormData,
        });
        const json = await res.json();
        console.log(json);
        setfile(json.name);
    } catch (error) {
        console.log(error);
    }
};
  const handleImagemob = async (theImg) => {
    var bodyFormData = new FormData();
    bodyFormData.append('avatar', theImg); 
    try {
        const res = await fetch("http://95.216.12.103:3300/upload-avatar", {
            method: "POST",
            body: bodyFormData,
        });
        const json = await res.json();
        console.log(json);
        setfilemob(json.name);
    } catch (error) {
        console.log(error);
    }
};
const router = useRouter()


  let maxd = 80;
if(title.length >16) {
  maxd = 45;
}
if(title.length >32) {
  maxd = 23;
}

const sendform= async () => {

    if(title.length !== 0 && title.length < 49) {
        if(descript.length !== 0 && descript.length < maxd+1) {
            axios.post('/api/admin/products/new', {
                title: title,
                descriptl: descriptl,
                descript: descript,
                structure: structure,
                file: file,
                filemob: filemob,
                parrent: parrent,
                price: price,
                sku: sku,
                sort: sort,
                part: us.user._id
              })
              .then(function (response) {
                router.push({
                    pathname: '/products',
                    query: { status: 'success' },
                  })
              })
              .catch(function (error) {
                console.log(error);
              });
            
        } else {
            setErrorDescr(true);
            window.scrollTo(0, 0)
        } 
    } else {
        setErrorTitle(true);
        window.scrollTo(0, 0)
        
    }
    
    
    
};
  // If session exists, display content
  if(u){

  
    return (
  <div className="container">
    <Head>
      <title>Создание товара | FoodApp Admin</title>
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
                                    <h4 className="page-title m-0">Создание товара</h4>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-30">
                            <div className="card-body">
                            <form action='/api/admin/products/new' method='POST' >
                            {errorTitle ? (
                                <div class="alert alert-danger" role="alert">
                                    <strong>Слижком длинный заголовок!</strong>
                                </div>
                            ): null}
                                <div className="form-group row">

                                    <label htmlFor="title" className="col-sm-2 col-form-label">Заголовок ({title.length}/48)</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='title' type="text" maxlength='48' value={title} onChange={(text) => settitle(text.target.value)} required id="tite"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="sku" className="col-sm-2 col-form-label">SKU</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='sku' type="text" value={sku} onChange={(text) => setsku(text.target.value)} required id="sku"/>
                                    </div>
                                </div>
                                {errorDescr ? (
                                    <div class="alert alert-danger" role="alert">
                                        <strong>Слижком длинное описание!</strong>
                                    </div>
                                ): null}
                                <div className="form-group row">
                                    <label htmlFor="descript" className="col-sm-2 col-form-label">Короткое Описание ({descriptl.length}/{maxd})</label>
                                    <div className="col-sm-10">
                                        <textarea id="descript" name='descriptl' className="form-control" maxlength={maxd} rows="2" placeholder="" onChange={(text) => setdescript(text.target.value)}  >{descriptl}</textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="descript" className="col-sm-2 col-form-label">Описание</label>
                                    <div className="col-sm-10">
                                        <textarea id="descript" name='descript' className="form-control"  rows="3" placeholder="" onChange={(text) => setdescript(text.target.value)}  >{descript}</textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="structure" className="col-sm-2 col-form-label">Состав</label>
                                    <div className="col-sm-10">
                                        <textarea id="structure" name='structure' className="form-control" rows="3" placeholder="" required onChange={(text) => setstructure(text.target.value)} >{structure}</textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="price" className="col-sm-2 col-form-label">Цена</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='price' type="text" value={price} required onChange={(text) => setprice(text.target.value)}  id="price"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="sort" className="col-sm-2 col-form-label">Сортировка</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='sort' type="number" min="01" required value={sort} defaultValue='1' onChange={(text) => setsort(text.target.value)}  id="sort"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="price" className="col-sm-2 col-form-label">Категория</label>
                                    <div className="col-sm-10">
                                    <select value={parrent} name='parrent' onChange={(select) => setParrent(select.target.value)}>
                                        <option >Выберите категорию</option>
                                        {types.map((type) => (
                                            <option value={type._id}>{type.name}</option>
                                        ))}
                                       
                                       
                                    </select>
                                    </div>
                                </div>
                               
                                <div className="form-group row">
                                    <label htmlFor="file" className="col-sm-2 col-form-label">Фото товара</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => handleImage(e.target.files[0])} required  type='file'/>
                                        <input type='hidden' id='file' name='file' value={file} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="file1" className="col-sm-2 col-form-label">Фото товара для  телефонов</label>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => handleImagemob(e.target.files[0])} required type='file'/>
                                        <input type='hidden' id='file1' name='filemob' value={filemob} />
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


export async function getStaticProps(context) {
    const ures = await fetch('http://localhost:3000/api/sessions')
const u = await ures.json()
if(u){

    const res = await fetch('http://localhost:3000/api/admin/products/types')
    const types = await res.json()
    console.log(types);
    return {
      props: {
        u, types,
      },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second

  }

}else {
    res.redirect(401,'/login')
 }

}


export default NewProduct