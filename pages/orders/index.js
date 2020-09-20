import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/head';
import Preloader from '../../components/Preloader';
import HeaderPage from '../../components/header';

const Orders = ({orders, c}) => {
    const router = useRouter()
    const { status } = router.query

    
    let fl = 0
    let paglg = 0
    const pagl = parseInt(c / 20)
    if ((c / 20) - parseInt(c / 20) >= 0.05){
         fl = 2;
         paglg = pagl+3
    }else {
        fl = 1;
        paglg = pagl
    }
   


    let pag = new Array();
    var i;
    for (i = 1; i < paglg; i++) { 
        pag.push(i+1);
    }
    const pg = JSON.stringify(pag)
    console.log(pg)

    return (
    
    <div className='container'>
    <Head>
        <title>Заказы</title>

    </Head>
    <Header/>


    <HeaderPage/>


<div className="wrapper">
    <div className="container-fluid">


        <div className="row">
            <div className="col-sm-12">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h4 className="page-title m-0">Заказы</h4>
                        </div>
                        <div className="col-md-4">
                            <div className="float-right d-none d-md-block">
                                <div className="dropdown">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        {status === 'success' ? (
            <div class="alert alert-success" role="alert">
                <strong>Товар успешно создан!</strong>
            </div>
        ): null}
        {status === 'updated' ? (
            <div class="alert alert-success" role="alert">
                <strong>Товар успешно обновлен!</strong>
            </div>
        ): null}
        <div className="row">
            <div className="col-lg-12">
                <div className="card m-b-30">
                    <div className="card-body">

                       

                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Статус</th>
                                        <th>Дата</th>
                                        <th>Имя</th>
                                        <th>Телефон</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {orders.map((order) => (
                                    <tr>
                                        <th><div className="progress" style={{height:'5px'}}><div className="progress-bar bg-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{width: '10%'}}></div></div></th>
                                        <th scope="row"></th>
                                        <td>{order.name}</td>
                                        <td>{order.phone}</td>
                                        <td><Link href="/products/edit/[id]" as={`/products/edit/${order._id}`}><a className='btn btn-primary'>Изменить</a></Link></td>
                                    </tr>
                                ))}
                                    
                                    
                                </tbody>
                            </table>
                            
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                            <ul className="pagination">


                                {pag.map(() => {
                                    <li className="paginate_button page-item"><a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0" class="page-link">111</a></li>
                                })}
                                
                               
                                <li className="paginate_button page-item next" id="datatable_next"><a href="#" aria-controls="datatable" data-dt-idx="7" tabindex="0" className="page-link">Next</a></li>
                            </ul>
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




<script src="/static/assets/js/jquery.min.js"></script>
<script src="/static/assets/js/bootstrap.bundle.min.js"></script>
<script src="/static/assets/js/modernizr.min.js"></script>
<script src="/static/assets/js/waves.js"></script>
<script src="/static/assets/js/jquery.slimscroll.js"></script>


<script src="/static/assets/js/app.js"></script>
</div>
)
}

export async function getStaticProps() {
    
    const res = await fetch('http://localhost:3000/api/admin/orders/all?s=0&p=1')
    const orders = await res.json()
    const cres = await fetch('http://localhost:3000/api/admin/orders/count?p=1');
    const c = await cres.json()
    return {
      props: {
        orders, c
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second

    }
  }
export default Orders
