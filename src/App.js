import { Fragment } from 'react';
import { Header } from './components/Header'

export const App = () => {
    return (
        <Fragment>
           <div className="container mx-auto px-32 py-4">
                <Header/>
           </div>
        </Fragment>
    )
}
