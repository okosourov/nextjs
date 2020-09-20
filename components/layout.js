import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout ({children}) {
  return (
    <div>
      <Header/>

        {children}

      <Footer/>
      <script src="/static/assets/js/app.js"></script>
    </div>
  )
}