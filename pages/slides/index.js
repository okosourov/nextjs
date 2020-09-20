import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/head';
import Preloader from '../../components/Preloader';
import HeaderPage from '../../components/header';
const Users = ({slides}) => (
    
    <div className='container'>
    <Head>
        <title>Слайдер</title>

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
                            <h4 className="page-title m-0">Слайдер</h4>
                        </div>
                        <div className="col-md-4">
                            <div className="float-right d-none d-md-block">
                                <div className="dropdown">
                                <Link href="/slides/new">
                                    <a className="btn btn-primary " >
                                        <i className="ti-plus mr-1"></i> Создать слайд
                                    </a>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-lg-12">
                <div className="card m-b-30">
                    <div className="card-body">



                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Изображение</th>
                                        <th>Альтернативный текст</th>
                                        
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {slides.map((slide) => (
                                    <tr>
                                        <th scope="row"><img width='200px' src={slide.image} alt={slide.alt}/></th>
                                        <td>{slide.alt}</td>
                                        
                                        <td><Link href="/users/id/[id]" as={`/users/id/${slide._id}`}><a className='btn btn-primary'>Посмотреть</a></Link></td>
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
)
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/admin/slides')
    const slides = await res.json()
  
    return {
      props: {
        slides,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second

    }
  }
export default Users
