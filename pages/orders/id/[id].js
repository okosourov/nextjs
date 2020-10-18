import { useState, useEffect } from 'react'
import { useCurrentUser } from '../../../lib/hooks';
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../../components/head';

import HeaderPage from '../../../components/header';
import Moment from 'react-moment';
import 'moment-timezone';
import axios from 'axios'
import { useRouter } from 'next/router'

const Order = () => {
    const [user] = useCurrentUser();
    const router = useRouter()
    const { id } = router.query
    const [l, setL] = useState(false)
        const [us, setUs] = useState([])
        const [d, setD] = useState({
            order: []
        })
        const [adrdata, setAD] = useState([])
    // console.log(router.query)
    const delay = async ms => new Promise(res => setTimeout(res, ms));
    const [upd, setUpd] = useState(false)
    const [error, setError] = useState(false)
    const setStatus = async ({stat, comment}) => {
        console.log(stat)
        console.log(comment)
        axios.patch('/api/admin/orders/id/' + d._id, {
            status: stat,
            comment: comment
          })
          .then(function (response) {
            setUpd(true)
            delay(5000);
            // window.location.reload(false)

          })
          .catch(function (error) {
            console.log(error);
            setError(true)
          });
    }
    
        
        useEffect(() => {
            // redirect to home if user is authenticated
        
            const p = async () => {
                const ures = await fetch('http://localhost:3000/api/sessions')
                const u = await ures.json()
                
                const dres = await fetch('http://localhost:3000/api/admin/orders/id/'+id)
                const d = await dres.json()
                const adres = await fetch('http://localhost:3000/api/admin/user/addres/id/'+d.select_adres)
                const ad = await adres.json()
                console.log(d)
      
                setUs(u)
                setD(d)
                setAD(ad)
                setL(true)
      
                
            }
            if(!l) {
                p()
            }
      
          });
          if(us){
        return (
    
    
    <div className='container'>
    <Head>
        <title>Заказ</title>

    </Head>
    <Header/>


    <HeaderPage/>


<div className="wrapper">
    <div className="container-fluid">

    {upd ? (
        <div class="alert alert-success" role="alert">
            <strong>Заказ успешно обновлен! Обновление страницы...</strong>
        </div>
    ): null}
    {error ? (
        <div class="alert alert-warning" role="alert">
            <strong>Произошла ошибка! Попробуйте еще раз</strong>
        </div>
    ): null}
        <div className="row">
            <div className="col-sm-12">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h4 className="page-title m-0">Пользователь</h4>
                        </div>
                        <div className="col-md-4">
                            <div className="float-right d-none d-md-block">
                                    {d.status === '1' ? (
                                        <> 
                                        <button className="btn btn-warning " onClick={({s=2, c=''}) => setStatus(s,c)} type="button" aria-haspopup="true" aria-expanded="false">
                                            В обработку
                                        </button> 
                                        <button className="btn btn-danger " type="button" aria-haspopup="true" aria-expanded="false">
                                            Отмена
                                        </button>
                                        </>
                                    ):null}
                                    {d.status === '2' ? (
                                        <> 
                                        <button className="btn btn-warning " onClick={({s=3, c=''}) => setStatus(s,c)} type="button" aria-haspopup="true" aria-expanded="false">
                                            В доставку
                                        </button>
                                        <button className="btn btn-danger " type="button" aria-haspopup="true" aria-expanded="false">
                                            Отмена
                                        </button>
                                        </>
                                    ):null}
                                    {d.status === '3' ? (
                                        <> 
                                        <button className="btn btn-warning " onClick={({s=4, c=''}) => setStatus(s,c)} type="button" aria-haspopup="true" aria-expanded="false">
                                            В доставку
                                        </button>
                                        <button className="btn btn-success " type="button" aria-haspopup="true" aria-expanded="false">
                                        Выполнено
                                    </button>
                                        </>
                                    ):null}

                                    
                                    
                                    
                                    
                                    

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
                                        <th>Имя</th>
                                        <th>Телефон</th>
                                        <th>Дата и время заказа </th>
                                        <th>Адрес доставки</th>
                                    </tr>
                                </thead>
                                <tbody>
                             
                                    <tr>
                                        <th scope="row">{d.name}</th>
                                        <td><a href={'tel:'+ d.phone}>{d.phone}</a></td>
                                        <td style={{color: 'red', fontSize: 21}}><Moment format="DD/MM/YYYY в hh:mm:ss">{d.created_at}</Moment></td>
                                        <td>Адрес. {adrdata.street}, кв/офис {adrdata.flat}, этаж {adrdata.flour}, Подьезд {adrdata.ent}, Домофон {adrdata.inc}, Коментарий {adrdata.comment}</td>
                                    </tr>
                                    

                                    
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div> 
            </div> 
            <div className="row">
            <div className="col-sm-12">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h4 className="page-title m-0">Заказ</h4>
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
                                        <th>Название</th>
                                        <th>Количество</th>
                                        <th>Цена</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {d.order.map(order => (
                                        <tr>
                                            <td><img width="150" src={'http://95.216.12.103/nfs/uploads/' + order.imagemob}/></td>
                                            <td>{order.title}</td>
                                            <td>{order.quantity}</td>
                                            <td>{order.price}</td>
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







<script src="/static/assets/js/jquery.min.js"></script>
<script src="/static/assets/js/jquery.min.js"></script>
    <script src="/static/assets/js/bootstrap.bundle.min.js"></script>
<script src="/static/assets/js/modernizr.min.js"></script>
<script src="/static/assets/js/waves.js"></script>
<script src="/static/assets/js/jquery.slimscroll.js"></script>


<script src="/static/assets/js/app.js"></script>
</div>
)} else {
    const [errorMsg, setErrorMsg] = useState('');
    const [user, { mutate }] = useCurrentUser();
    // useEffect(() => {
    //   // redirect to home if user is authenticated
    //   if (user) router.push('/');
    // }, [user]);
  
    async function onSubmit(e) {
      e.preventDefault();
      const body = {
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      };
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        const userObj = await res.json();
        mutate(userObj);
      } else {
        setErrorMsg('Неверный Логин или Пароль! Попробуйте еще раз!');
      }
    }
      return (
        <div className="container">
        
        <div className="wrapper">
        <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-lg-6">
            <h2>Вы не авторизованы!</h2>
            <p>Для просмотра этой страницы необходимо авторизоваться</p>
            </div>
            <div className="col-lg-6">
                <div className="card mb-0">
                    <div className="card-body">
                        <div className="p-2">
                            <h4 className="text-muted float-right font-18 mt-4">Войти</h4>
                            <div>
                                <a href="index.html" className="logo logo-admin"><img src="assets/images/logo_dark.png" height="28" alt="logo"/> FoodApp</a>
                            </div>
                        </div>
                        
                        {errorMsg ? <div class="alert alert-danger" role="alert">
                        {errorMsg}
                    </div> : null}
                        
                        <div className="p-2">
                            <form onSubmit={onSubmit} className="form-horizontal m-t-20">


                                <div className="form-group row">
                                    <div className="col-12">
                                        <input className="form-control" required=""  id="email" type="email" name="email"  placeholder="Email"/>
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
                                        <Link href="/forget-password"><a>Забыли пароль?</a></Link>{' '}
                                        <Link href="/signup"><a>Еще не зарегистрированы?</a></Link>
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


        
        <script src="/static/assets/js/jquery.min.js"></script>
    <script src="/static/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/static/assets/js/modernizr.min.js"></script>
        <script src="/static/assets/js/waves.js"></script>
        <script src="/static/assets/js/jquery.slimscroll.js"></script>
        
        <script src="/static/plugins/raphael/raphael.min.js"></script>
        <script src="/static/assets/pages/dashboard.int.js"></script>
         
      </div>
      )
  }}

export default Order
