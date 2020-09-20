import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import axios from 'axios'
import { signIn } from 'next-auth/client'
import Head from 'next/head'
import Header from '../../../../components/head';
import HeaderPage from '../../../../components/header';
function EditTypeProduct ({type}) {
  const [ session, loading ] = useSession()
  const [ content , setContent ] = useState()

  const [ title , settitle ] = useState(type.name)
  const [ sku , setsku ] = useState(type.sku)
  const [ sort , setsort ] = useState(type.sort)

  // Fetch content from protected route
 

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!session) {  signIn() }
  const router = useRouter()
  
  const sendform = async () => {
     
      axios.patch('/api/admin/products/types/id/' + type._id, {
            name: title,
          sku: sku,
          sort: sort,
          part: '1'
        })
        .then(function (response) {
          router.push({
              pathname: '/products/types',
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
      <title>Редактирование категории товара | FoodApp Admin</title>
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
                                    <h4 className="page-title m-0">Редактирование категории товара</h4>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-30">
                            <div className="card-body">
                                <form>
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
                                    <label htmlFor="sort" className="col-sm-2 col-form-label">Сортировка</label>
                                    <div className="col-sm-10">
                                        <input className="form-control" name='sort' type="number" min="1" required value={sort} defaultValue='1' onChange={(text) => setsort(text.target.value)}  id="sort"/>
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
    const res = await fetch(`http://localhost:3000/api/admin/products/types`)
    const types = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = types.map((type) => ({
      params: { id: type._id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/admin/products/types/id/${params.id}`)
    const type = await res.json()
    
    return {
        props: {
            type
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
  
      }
    }


export default EditTypeProduct