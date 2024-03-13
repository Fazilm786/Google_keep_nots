import Layout from '../components/layout';
import Home from '../components/layout';
import '../styles/globals.css'
import NavBar from './nav';

function MyApp ({ Component, pageProps }){
    return( 
        <>
            {/* <NavBar/> */}
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
    )
}

export default MyApp;