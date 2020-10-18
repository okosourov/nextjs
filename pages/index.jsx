import React, { useState, useEffect }  from 'react';
import { useCurrentUser } from '../lib/hooks';

import Link from 'next/link'
const IndexPage = () => {
  const [user] = useCurrentUser();
  const [usr, setUsr] = useState([])
  const [l, setL] = useState(false)
  const [us, setUs] = useState([])
  useEffect(() => {
      // redirect to home if user is authenticated
  
      const p = async () => {
          const ures = await fetch('http://localhost:3000/api/sessions')
          const u = await ures.json()

          setUs(u)
          setL(true)

          
      }
      if(!l) {
          p()
      }
      
    });
  return (
    <>
    <div className="container">
        
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>FoodApp</h1>
              <h2>Система управления сайтом и приложением FoodApp</h2>
              {us ? (
                <>
                <p>Добро пожаловать!</p>
                <Link href="/dashboard"><button className="btn btn-primary btn-block waves-effect waves-light" type="submit">В систему</button></Link>
                </>
              ): (
                <>
                  <p>Для просмотра системы необходимо авторизоваться</p>
                  <Link href="/login"><button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Войти</button></Link>
                </>
              )}
             

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
    
    <script src="/static/plugins/raphael/raphael.min.js"></script>
    <script src="/static/assets/pages/dashboard.int.js"></script>
     

    </>
  );
};

export default IndexPage;
