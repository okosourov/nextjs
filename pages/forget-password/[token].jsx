import React from 'react';
import Head from 'next/head';
import nextConnect from 'next-connect';
import Router from 'next/router';
import database from '../../middlewares/database';

const ResetPasswordTokenPage = ({ valid, token }) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      password: event.currentTarget.password.value,
      token,
    };

    const res = await fetch('/api/user/password/reset', {
      method: 'PUT',
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
                      
                      
                      {valid ? (
                        <>
                      <div className="p-2">
                          <form onSubmit={handleSubmit} className="form-horizontal m-t-20">


                              
                              <div className="form-group row">
                                  <div className="col-12">
                                  <input
                                  name="password"
                                  type="password"
                                  placeholder="Новый пароль"
                                />
                                  </div>
                              </div>
                           

                          

                          

                              <div className="form-group text-center row m-t-20">
                                  <div className="col-12">
                                      <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Установить пароль</button>
                                      
                                  </div>
                              </div>

                              
                          </form>
                          
                          
                         
                      </div>
                      </>
                      ) : (
                        <p>Ссылка больше недействительна!</p>
                      )}

                      


                  </div>
                  
              </div>
          </div>
          
      </div>

  </div>
</div>
      
    </>
  );
};

export async function getServerSideProps(ctx) {
  const handler = nextConnect();
  handler.use(database);
  await handler.apply(ctx.req, ctx.res);
  const { token } = ctx.query;

  const tokenDoc = await ctx.req.db.collection('tokens').findOne({
    token: ctx.query.token,
    type: 'passwordReset',
  });

  return { props: { token, valid: !!tokenDoc } };
}

export default ResetPasswordTokenPage;
