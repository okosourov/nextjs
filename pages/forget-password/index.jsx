import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';

const ForgetPasswordPage = () => {
  async function handleSubmit(e) {
    e.preventDefault(e);

    const body = {
      email: e.currentTarget.email.value,
    };

    const res = await fetch('/api/user/password/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) Router.replace('/');
  }

  return (
    <>
    <Head>
      <title>FoodApp Admin Восстановление пароля</title>
      <link rel="icon" href="/favicon.ico" />

      <script src="/static/assets/js/jquery.min.js"></script>
      <script src="/static/assets/js/jquery.min.js"></script>
    <script src="/static/assets/js/bootstrap.bundle.min.js"></script>
      <script src="/static/assets/js/modernizr.min.js"></script>
      <script src="/static/assets/js/waves.js"></script>
      <script src="/static/assets/js/jquery.slimscroll.js"></script>

      <script src="/static/assets/js/app.js"></script>
      <link href="/static/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/static/assets/css/icons.css" rel="stylesheet" type="text/css" />
        <link href="/static/assets/css/style.css" rel="stylesheet" type="text/css" />
    </Head>
  <div className="account-pages">
          
  <div className="container">
      <div className="row align-items-center">
          <div className="col-lg-6">
          </div>
          <div className="col-lg-6">
              <div className="card mb-0">
                  <div className="card-body">
                      <div className="p-2">
                          <h4 className="text-muted float-right font-18 mt-4">Восстановление пароля</h4>
                          <div>
                              <a href="index.html" className="logo logo-admin"><img src="assets/images/logo_dark.png" height="28" alt="logo"/> FoodApp</a>
                          </div>
                      </div>
                      
                      
                      
                      <div className="p-2">
                          <form onSubmit={handleSubmit} className="form-horizontal m-t-20">


                              
                              <div className="form-group row">
                                  <div className="col-12">
                                      <input className="form-control" required=""  id="email" type="email" name="email"  placeholder="Email"/>
                                  </div>
                              </div>
                           

                          

                          

                              <div className="form-group text-center row m-t-20">
                                  <div className="col-12">
                                      <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Восстановить</button>
                                      <Link href="/login"><a>Войти</a></Link>
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
      
    </>
  );
};

export default ForgetPasswordPage;
