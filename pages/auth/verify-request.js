import React from 'react'
import Head from 'next/head'
import { csrfToken } from 'next-auth/client'

const verifyRequest = ({ csrfToken }) => (
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
                <div>
                    <div >
                        <a href="index.html" className="logo logo-admin"><img src="assets/images/logo_dark.png" height="28" alt="FoodApp"/> FoodApp</a>
                    </div>
                    <h5 className="font-14 text-muted mb-4">Responsive Bootstrap 4 Admin Dashboard</h5>
                    <p className="text-muted mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>

                    <h5 className="font-14 text-muted mb-4">Terms :</h5>
                    <div>
                        <p><i className="mdi mdi-arrow-right text-primary mr-2"></i>At solmen va esser necessi far uniform paroles.</p>
                        <p><i className="mdi mdi-arrow-right text-primary mr-2"></i>Donec sapien ut libero venenatis faucibus.</p>
                        <p><i className="mdi mdi-arrow-right text-primary mr-2"></i>Nemo enim ipsam voluptatem quia voluptas sit .</p>
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
                            <div class="alert alert-success" role="alert">
                                        <strong>Проверьте свою почту!</strong> Вам отправленно письмо с одноразовой ссылкой для входа.
                                    </div>
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
    
  )


verifyRequest.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}
export default verifyRequest;