import React from 'react'
import Head from 'next/head'
import { csrfToken } from 'next-auth/client'
import { useRouter } from 'next/router'

const SignIn = ({ csrfToken }) => {
    const router = useRouter()
    const { status, error } = router.query
    return (
    <div className="container">
    <Head>
      <title>FoodApp Admin Вход</title>
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
                            <h4 className="text-muted float-right font-18 mt-4">Войти</h4>
                            <div>
                                <a href="index.html" className="logo logo-admin"><img src="assets/images/logo_dark.png" height="28" alt="logo"/> FoodApp</a>
                            </div>
                        </div>
                        {status === 'success' ? (
                            <div class="alert alert-success" role="alert">
                                <strong>Вы успешно зарегистрированы!</strong> <br/>  Можете войти с теми данными которые использовали при регистрации
                            </div>
                        ): null}
                        {error === 'CredentialsSignin' ? (
                            <div class="alert alert-danger" role="alert">
                                <strong>Неверный Email или Пароль!</strong><br/> Попробуйте еще раз
                            </div>
                        ): null}
                        <div className="p-2">
                            <form method='post' action='/api/auth/callback/credentials' className="form-horizontal m-t-20">
                            <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>

                                <div className="form-group row">
                                    <div className="col-12">
                                        <input className="form-control" type="text" required="" id='email' name='email' placeholder="Email"/>
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


SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}
export default SignIn;