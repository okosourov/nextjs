import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../../components/head';
import Preloader from '../../../components/Preloader';
import HeaderPage from '../../../components/header';
const Types = ({types}) => {
const router = useRouter()
const { status } = router.query
return (
    
    <div className='container'>
    <Head>
        <title>Категории товаров</title>

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
                            <h4 className="page-title m-0">Категории товаров</h4>
                        </div>
                        <div className="col-md-4">
                            <div className="float-right d-none d-md-block">
                                <div className="dropdown">
                                    <Link href="/products/types/new">
                                        <a className="btn btn-primary" >
                                            <i className="ti-plus mr-1"></i> Создать категорию
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {status === 'success' ? (
            <div class="alert alert-success" role="alert">
                <strong>Категория успешно создана!</strong>
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
                                        <th>Заголовок</th>
                                        <th>SKU</th>

                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {types.map((type) => (
                                    <tr>
                                        <th scope="row">{type.name}</th>
                                        <td>{type.sku}</td>
                                        
                                        <td><Link href="/products/types/edit/[id]" as={`/products/types/edit/${type._id}`}><a className='btn btn-primary'>Изменить</a></Link></td>
                                    </tr>
                                ))}
                                    
                                    
                                </tbody>
                            </table>
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
)}
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/admin/products/types')
    const types = await res.json()
  
    return {
      props: {
        types,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second

    }
  }
export default Types
