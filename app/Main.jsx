import Navbar from './universal-components/Navbar'
import Footer from './universal-components/Footer'

export default async function Main({children}) {

  
    if(typeof window !== 'undefined' && localStorage.getItem('token') === null){
        alert('Please Login First')
    }

    return (
        <>
            <div>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </>
    )
}
