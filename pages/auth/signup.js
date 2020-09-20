import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import { csrfToken } from 'next-auth/client'

const SignUp = ({ csrfToken }) => {
    const [ email , setemail ] = useState()
    const [ password , setpassword ] = useState()
    const [ confpassword , setconfpassword ] = useState()
    const [ errorpass , seterrorpass ] = useState(false)
    const pass = (pass) => {
        setconfpassword(pass);
        if(password !== pass) {
            seterrorpass(true);
        }else {
            seterrorpass(false);
        }
    }
     const router = useRouter()
    const sendform = async () => {
        
        axios.post('/api/auth/signup', {
            csrfToken: csrfToken,
            email: email,
            password: password,
           
          })
          .then(function (response) {
            router.push({
                pathname: '/auth/signin',
                query: { status: 'success' },
              })
          })
          .catch(function (error) {
            console.log(error);
          });
        
    };
    return (
    <div className="container">
    <Head>
      <title>FoodApp Admin Регистрация</title>
      <link rel="icon" href="/favicon.ico" />

      <script src="/static/assets/js/jquery.min.js"></script>
      <script src="/static/assets/js/bootstrap.bundle.min.js"></script>
      <script src="/static/assets/js/modernizr.min.js"></script>
      <script src="/static/assets/js/waves.js"></script>
      <script src="/static/assets/js/jquery.slimscroll.js"></script>
      <script src="/static/assets/pages/dashboard.int.js"></script>
      <script src="/static/assets/js/app.js"></script>
      <link href="/static/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/static/assets/css/icons.css" rel="stylesheet" type="text/css" />
        <link href="/static/assets/css/style.css" rel="stylesheet" type="text/css" />
    </Head>
    <div className="account-pages">
            
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="card mb-0">
                    <div className="card-body">
                        <div className="p-2">
                            <h4 className="text-muted float-right font-18 mt-4">Регистрация</h4>
                            <div>
                                <a href="index.html" className="logo logo-admin"><img src="assets/images/logo_dark.png" height="28" alt="logo"/> FoodApp</a>
                            </div>
                        </div>
                        {errorpass === true ? (
                            <div class="alert alert-danger" role="alert">
                                <strong>Пароли не совпадают!</strong>
                            </div>
                        ): null}
                        <div className="p-2">
                            <form method='post'  className="form-horizontal m-t-20">
                            <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>

                        
                                <div className="form-group row">
                                    <div className="col-12">
                                        <input className="form-control" type="text" id='email' name='email' value={email} onChange={(text) => setemail(text.target.value)} required placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <input className="form-control" type="password" value={password} onChange={(text) => setpassword(text.target.value)} id='password' name='password' placeholder="Пароль"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <input className="form-control" type="password" value={confpassword} onChange={(text) => pass(text.target.value)} id='confirm_pass' name='confirm_pass' placeholder="Подтверждение пароля"/>
                                    </div>
                                </div>

                            

                            

                                <div className="form-group text-center row m-t-20">
                                    <div className="col-12">
                                        <button className="btn btn-primary btn-block waves-effect waves-light" type="button" onClick={() => sendform()}>Зарегистрироваться</button>
                                    </div>
                                </div>

                                
                            </form>
                        </div>


                    </div>
                </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
                <div className="card mb-0">
                    <div className="card-body">
                        <div className="p-2">
                            <h4 className="text-muted float-right font-18 mt-4">Войти</h4>
                            <div>
                                <a href="index.html" className="logo logo-admin"><img src="assets/images/logo_dark.png" height="28" alt="logo"/> FoodApp</a>
                            </div>
                        </div>

                        <div className="p-2">
                            <form method='post' action='/api/auth/signin/email' className="form-horizontal m-t-20">
                            <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>

                                <div className="form-group row">
                                    <div className="col-12">
                                        <input className="form-control" type="text" required="" id='email' name='email' placeholder="Email"/>
                                    </div>
                                </div>

                               

                               

                                <div className="form-group text-center row m-t-20">
                                    <div className="col-12">
                                        <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Вход</button>
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
</div>
    
  )}


  SignUp.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}
export default SignUp;