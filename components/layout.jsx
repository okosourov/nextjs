import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCurrentUser } from '../lib/hooks';
import Header from '../components/header'
import Footer from '../components/footer'

const layout = ({ children }) => {
  const [user, { mutate }] = useCurrentUser();
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);
  };
  return (
    <>
      <Head>
        <title>FoodApp</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta property="og:title" content="Next.js + MongoDB App" />
        <meta
          property="og:description"
          content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/201392697/5d392300-eef3-11e9-8e20-53310193fbfd"
        />
        <link rel="icon" href="/favicon.ico" />

        
        



        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
        <script src="/static/on.js"></script>
        <link href="/static/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/static/assets/css/icons.css" rel="stylesheet" type="text/css" />
        <link href="/static/assets/css/style.css" rel="stylesheet" type="text/css" />
      </Head>

    

      <main>{children}</main>
      <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    © 2020 FoodApp <span className="d-none d-md-inline-block"> - Создано с <i className="mdi mdi-heart text-danger"></i> DigitalAtlant.</span>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
};
export default layout;