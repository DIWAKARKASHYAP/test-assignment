import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-rx8s3631j4tlt3t2.us.auth0.com"
    clientId={import.meta.env.VITE_CLIENTID}
    authorizationParams={{
      redirect_uri: "https://test-assignment-i5mu.vercel.app"
    }}
    cacheLocation="localstorage"

  >
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Auth0Provider>,
)
