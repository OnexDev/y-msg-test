
import template from './index.hbs';

import htmlPage404 from './pages/messages/404'
import htmlPage500 from './pages/messages/500'
import auth from './pages/authentiaction'

import styles from './pages/index.scss'

import './components/button';
import './components/message'

const router = (app, pathname) => {
    if (pathname === '/500.html') {
        app.innerHTML = htmlPage500({code: 500});
    } else if (pathname.startsWith('/5') &&  pathname.replace(/[^+\d]/g, '').length === 3 && pathname.endsWith('.html')) {
        app.innerHTML = htmlPage500({code: pathname.replace(/[^+\d]/g, '')});
    } else if (pathname === '/') {
        app.innerHTML = template({styles, variable: window.location});
    }else if (pathname === '/auth.html') {
        app.innerHTML = auth();
    } else {
        app.innerHTML = htmlPage404();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    router(app, window.location.pathname)
})