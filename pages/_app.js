import 'semantic-ui-css/semantic.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import '../public/styles/style.css';

import ErrorBoundary from '../components/ErrorBoundary';

function App({ Component, pageProps }) {

    return (

        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>

    )
}

export default App;
