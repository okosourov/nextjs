import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import axios from 'axios'
import { signIn } from 'next-auth/client'
import Head from 'next/head'
import Header from '../../../components/head';
import HeaderPage from '../../../components/header';
function EditProduct ({product}) {
    const router = useRouter()
    // const { status } = router.query
    console.log(router.asPath)
    console.log(router.query)
    console.log(router.pathname)
  const [ session, loading ] = useSession()
  const [ content , setContent ] = useState()
  const [ title , settitle ] = useState(product.title)
  const [ sku , setsku ] = useState(product.sku)
  const [ descript , setdescript ] = useState(product.descript)
  const [ structure , setstructure] = useState(product.sostav)
  const [ price , setprice ] = useState(product.price)
  const [ sort , setsort ] = useState(product.sort)
  const [ file , setfile ] = useState(product.image)
  const [ filemob , setfilemob ] = useState(product.imagemob)

  // Fetch content from protected route
 

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!session) {  signIn() }
  const handleImage = async (theImg) => {
    var bodyFormData = new FormData();
    bodyFormData.append('avatar', theImg); 
    try {
        const res = await fetch("http://localhost:3300/upload-avatar", {
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
        const res = await fetch("http://localhost:3300/upload-avatar", {
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

const sendform = async () => {
   
    axios.patch('/api/admin/products/id/' + product._id, {
        title: title,
        descript: descript,
        structure: structure,
        file: file,
        filemob: filemob,
        price: price,
        sku: sku,
        sort: sort,
        part: '1'
      })
      .then(function (response) {
        router.push({
            pathname: '/products',
            query: { status: 'updated' },
          })
      })
      .catch(function (error) {
        console.log(error);
      });
    
};
  // If session exists, display content
  return (
  <div className="container">
    <Head>
      <title>Редактирование товара | FoodApp Admin</title>
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
                                    <h4 className="page-title m-0">Редактирование товара</h4>
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
                                <div className="form-group row">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Заголовок</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='title' type="text" value={title} onChange={(text) => settitle(text.target.value)} required id="tite"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="sku" className="col-sm-2 col-form-label">SKU</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='sku' type="text" value={sku} onChange={(text) => setsku(text.target.value)} required id="sku"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="descript" className="col-sm-2 col-form-label">Описание</label>
                                    <div className="col-sm-10">
                                        <textarea id="descript" name='descript' className="form-control" rows="3" placeholder="" onChange={(text) => setdescript(text.target.value)}  >{descript}</textarea>
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
                                    <label htmlFor="file" className="col-sm-2 col-form-label">Фото товара</label>
                                    <img src={file} width='250px' height='250px'/>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => handleImage(e.target.files[0])} required  type='file'/>
                                        <input type='hidden' id='file' name='file' value={file} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="file1" className="col-sm-2 col-form-label">Фото товара для  телефонов</label>
                                    <img src={filemob} width='250px' height='250px'/>
                                    <div className="col-sm-10">
                                        <input onChange={(e) => handleImagemob(e.target.files[0])} required type='file'/>
                                        <input type='hidden' id='file1' name='filemob' value={filemob} />
                                    </div>
                                </div>
                           
                                

                               

                                <div className="text-center m-t-15">
                                    <button type="button" onClick={() => sendform()} className="btn btn-primary waves-effect waves-light">Обновить</button>
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
    
    <script src="/static/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/static/assets/js/modernizr.min.js"></script>
    <script src="/static/assets/js/waves.js"></script>
    <script src="/static/assets/js/jquery.slimscroll.js"></script>
    <script src="/static/plugins/dropzone/dist/dropzone.js"></script>
    <script src="/static/assets/js/app.js"></script>
  </div>
  )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`http://localhost:3000/api/admin/products`)
    const products = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = products.map((product) => ({
      params: { id: product._id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/admin/products/id/${params.id}`)
    const product = await res.json()
    
    return {
        props: {
            product
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
  
      }
    }


export default EditProduct