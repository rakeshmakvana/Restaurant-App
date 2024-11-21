import { createRoot } from 'react-dom/client'
import "@fontsource/barlow";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/400-italic.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
