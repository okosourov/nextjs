import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Layout from '../components/layout'
import { signIn } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/head';
import HeaderPage from '../components/header';
function Home ({users, usersc}) {
  const [ session, loading ] = useSession()
  const [ content , setContent ] = useState()

  // Fetch content from protected route
 

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!session) {  signIn() }

  // If session exists, display content
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
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary mini-stat text-white">
                            <div className="p-3 mini-stat-desc">
                                <div className="clearfix">
                                    <h6 className="text-uppercase mt-0 float-left text-white-50">Заказов</h6>
                                    <h4 className="mb-3 mt-0 float-right">1,587</h4>
                                </div>
                                <div>
                                    <span className="badge badge-light text-info"> +10 </span> <span className="ml-2">За сегодня</span>
                                </div>
                                
                            </div>
                            <div className="p-3">
                                <div className="float-right">
                                    <a href="#" className="text-white-50"><i className="mdi mdi-cube-outline h5"></i></a>
                                </div>
                                <p className="font-14 m-0">Вчера : 30</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-info mini-stat text-white">
                            <div className="p-3 mini-stat-desc">
                                <div className="clearfix">
                                    <h6 className="text-uppercase mt-0 float-left text-white-50">Поьзователей</h6>
                                    <h4 className="mb-3 mt-0 float-right">{usersc}</h4>
                                </div>
                                <div>
                                    <span className="badge badge-light text-info"> +2 </span> <span className="ml-2">За сегодня</span>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="float-right">
                                    <a href="#" className="text-white-50"><i className="mdi mdi-buffer h5"></i></a>
                                </div>
                                <p className="font-14 m-0">Вчера : 5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-pink mini-stat text-white">
                            <div className="p-3 mini-stat-desc">
                                <div className="clearfix">
                                    <h6 className="text-uppercase mt-0 float-left text-white-50">Всего получено</h6>
                                    <h4 className="mb-3 mt-0 float-right">150 000 ₽</h4>
                                </div>
                               
                            </div>
                            <div className="p-3">
                                <div className="float-right">
                                    <a href="#" className="text-white-50"><i className="mdi mdi-tag-text-outline h5"></i></a>
                                </div>
                                <p className="font-14 m-0">Last : 15.8</p>
                            </div>
                        </div>
                    </div>

                    
                </div>  


                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Отчет</h4>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div id="morris-line-example" className="morris-chart" style={{height: "300px"}}></div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div>
                                            <h5 className="font-14 mb-5">Недельный отчет</h5>

                                            <div>
                                                <h5 className="mb-3">За неделю сделано : 100 продаж</h5>
                                                
                                                <a href="#" className="btn btn-primary btn-sm">Посмотреть подробнее <i className="mdi mdi-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>


               
                


                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h2>Новые</h2>
                                <div className="col-xl-12">
                                    <div className="card bg-pink mini-stat text-white">
                                        <div className="p-3 mini-stat-desc">
                                            <div className="clearfix">
                                                <h6 className="text-uppercase mt-0 float-left text-white-50">Заказ #</h6>
                                                <h4 className="mb-3 mt-0 float-right">15.9</h4>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h2>В обработке</h2>
                                <div className="col-xl-12">
                                    <div className="card bg-warning mini-stat text-white">
                                        <div className="p-3 mini-stat-desc">
                                            <div className="clearfix">
                                                <h6 className="text-uppercase mt-0 float-left text-white-50">Заказ #</h6>
                                                <h4 className="mb-3 mt-0 float-right">15.9</h4>
                                            </div>
                                         
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h2>Выполнено</h2>
                                <div className="col-xl-12">
                                    <div className="card bg-success mini-stat text-white">
                                        <div className="p-3 mini-stat-desc">
                                            <div className="clearfix">
                                                <h6 className="text-uppercase mt-0 float-left text-white-50">Заказ #</h6>
                                                <h4 className="mb-3 mt-0 float-right">106</h4>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>

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
 
    
    <script src="/static/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/static/assets/js/modernizr.min.js"></script>
    <script src="/static/assets/js/waves.js"></script>
    <script src="/static/assets/js/jquery.slimscroll.js"></script>
    
    <script src="/static/plugins/raphael/raphael.min.js"></script>
    <script src="/static/assets/pages/dashboard.int.js"></script>
       
    <script> $.Dashboard.init();</script>
  </div>
  )
}


export async function getStaticProps(context) {
    const usersres = await fetch('http://localhost:3000/api/admin/user/all')
    const users = await usersres.json()
    const userscres = await fetch('http://localhost:3000/api/admin/user/count')
   
    const usersc = await userscres.json()
    return {
        props: {
            users,
            usersc,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
  
      }
    }


export default Home