import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // withRouter,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import './App.css';
import { Main, Materi, Tryout, LiveClass, Event, Kuis, Paket, VoucherSoal } from './pages';
import {Navbar, Sidebar, MenuBar} from './components';

const Routes = [
  { path: '/materi', component: Materi},
  { path: '/tryout', component: Tryout},
  { path: '/live-class', component: LiveClass},
  { path: '/event', component: Event},
  { path: '/kuis', component: Kuis},
  { path: '/paket', component: Paket},
  { path: '/voucher-soal', component: VoucherSoal},
  { path: '/', component: Main},
]

const App = () => {

  const [isWide, setIsWide] = useState(true);
  const toggle = () => setIsWide(!isWide);

  MenuBar.handleWideToggle = () => setIsWide(true);

  return (
    <Router>
      {/* <MenuBar toggle={toggle} isWide={isWide}/> */}
      <div className="d-flex m-0 font-montserrat">
        <div className={`${isWide?'':''} p-0 bg-navbar`}>
          <div class={"d-flex justify-content-center "+(isWide && 'd-none')}>
            <button className='border-0 btn-dark bg-transparent my-2' onClick={toggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </div>
          <Navbar toggle={toggle} isCollapsed={!isWide}/>
        </div>
        <div className={`flex-fill px-4`}>
          <div className='d-flex'>
            <div className='flex-fill'>
              {!isWide ? (<img className="logo-brand" alt="" src={require('./assets/logo-primary.png').default}/>) : (
                <button className='btn btn-light my-2' onClick={toggle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#30B44B" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </button>
              )}
            </div>
            <div>
              <button className='btn btn-light me-1 my-2' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                  </svg>
              </button>
              <button className='btn btn-light my-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
              </button>
            </div>
          </div>
          <Switch>
            {Routes.map((route, i) => (
                  <Route
                      key={i}
                      path={route.path}
                      exact={route.isExact}
                      render={props => {
                      // console.log(route)
                      // console.log(window.location.pathname)
                      // console.log(route.path)
                      // const props2 = route.path==='/newblog' ? {...props} : {...props, ...this.changeImage}
                      return (
                          // pass the sub-routes down to keep nesting
                          <route.component {...props} routes={route.routes} />
                      )}}
                  />
            ))}
          </Switch>
        </div>
        <div className="p-0 col-3 bg-light">
          <div>
            <button className='btn btn-light ms-2 my-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                  <path d="M7.5 1v7h1V1h-1z"/>
                  <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
              </svg>
            </button>
          </div>
          <Sidebar/>
        </div>
      </div>
    </Router>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
