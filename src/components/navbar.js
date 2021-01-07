import { Link } from "react-router-dom";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    withRouter,
    // Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";


const Navigation = {
    "Home": {
        "link": "/home",
        "icon": (
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7.65L9.55 1L18.1 7.65V18.1C18.1 18.6039 17.8998 19.0872 17.5435 19.4435C17.1872 19.7998 16.7039 20 16.2 20H2.9C2.39609 20 1.91282 19.7998 1.5565 19.4435C1.20018 19.0872 1 18.6039 1 18.1V7.65Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.70001 20V10.5H12.4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    "Materi": {
        "link": "/materi",
        "icon": (
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 7.18751C11.2188 4.35024 13.9334 2.90151 19.8438 2.87501C19.9382 2.87465 20.0319 2.893 20.1192 2.92899C20.2066 2.96499 20.286 3.01791 20.3528 3.08473C20.4196 3.15154 20.4725 3.23092 20.5085 3.31828C20.5445 3.40564 20.5629 3.49927 20.5625 3.59376V16.5313C20.5625 16.7219 20.4868 16.9047 20.352 17.0395C20.2172 17.1743 20.0344 17.25 19.8438 17.25C14.0938 17.25 11.8724 18.4094 10.5 20.125C9.13573 18.418 6.90626 17.25 1.15626 17.25C0.712427 17.25 0.437505 16.8884 0.437505 16.4446V3.59376C0.437149 3.49927 0.455497 3.40564 0.491491 3.31828C0.527485 3.23092 0.580414 3.15154 0.647228 3.08473C0.714041 3.01791 0.793417 2.96499 0.88078 2.92899C0.968144 2.893 1.06177 2.87465 1.15626 2.87501C7.06663 2.90151 9.78125 4.35024 10.5 7.18751Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 7.1875V20.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    "Tryout": {
        "link": "/tryout",
        "icon": (
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.375 1H2.875C2.37772 1 1.90081 1.19754 1.54917 1.54917C1.19754 1.90081 1 2.37772 1 2.875V17.875C1 18.3723 1.19754 18.8492 1.54917 19.2008C1.90081 19.5525 2.37772 19.75 2.875 19.75H14.125C14.6223 19.75 15.0992 19.5525 15.4508 19.2008C15.8025 18.8492 16 18.3723 16 17.875V6.625L10.375 1Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.375 1V6.625H16" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.25 11.3125H4.75" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.25 15.0625H4.75" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.625 7.5625H5.6875H4.75" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    "Live Class": {
        "link": "/live-class",
        "icon": (
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9834 5.43338V6.58594L15.9275 5.92488L20.4834 2.73499V13.2651L15.9275 10.0752L14.9834 9.41416V10.5667V14.4167C14.9834 14.5007 14.95 14.5812 14.8906 14.6406C14.8312 14.7 14.7507 14.7334 14.6667 14.7334H1.83335C1.74937 14.7334 1.66882 14.7 1.60944 14.6406C1.55005 14.5812 1.51669 14.5007 1.51669 14.4167V1.58338C1.51669 1.4994 1.55005 1.41885 1.60944 1.35947C1.66882 1.30008 1.74937 1.26672 1.83335 1.26672H14.6667C14.7507 1.26672 14.8312 1.30008 14.8906 1.35947C14.95 1.41885 14.9834 1.4994 14.9834 1.58338V5.43338ZM20.595 13.9946C20.5113 13.9891 20.4306 13.9607 20.3619 13.9125V2.08755C20.4306 2.03939 20.5113 2.01101 20.595 2.00551C20.6787 2.00001 20.7624 2.01761 20.8368 2.05638C20.9112 2.09515 20.9735 2.1536 21.017 2.22537C21.0605 2.29714 21.0834 2.37947 21.0834 2.46338V13.5367C21.0834 13.6206 21.0605 13.703 21.017 13.7747C20.9735 13.8465 20.9112 13.905 20.8368 13.9437C20.7624 13.9825 20.6787 14.0001 20.595 13.9946ZM7.38335 4.69445V4.49342L6.78348 4.4933C6.56063 4.49326 6.34461 4.5702 6.17198 4.71113C5.99935 4.85205 5.88071 5.04829 5.83614 5.26663L5.83011 5.29618L5.82707 5.32619L5.81974 5.3986L5.81669 5.42875V5.45905V10.5391C5.81669 10.5392 5.81669 10.5392 5.81669 10.5392C5.81668 10.6957 5.85468 10.8499 5.92741 10.9885L6.45869 10.7097C6.48628 10.7622 6.52623 10.8073 6.57511 10.8411C6.62398 10.8748 6.68031 10.8961 6.73926 10.9033L6.6671 11.4989C6.66711 11.4989 6.66711 11.4989 6.66711 11.4989C6.82252 11.5177 6.98017 11.4985 7.12652 11.443L7.15325 11.4328L7.1789 11.4202L7.24581 11.3872L7.27508 11.3727L7.30261 11.3552L11.2947 8.81422L11.2959 8.81347C11.4187 8.7349 11.5221 8.62958 11.5985 8.50538C11.6748 8.38119 11.7221 8.24133 11.7367 8.09628C11.7513 7.95124 11.733 7.80477 11.683 7.66782L11.1194 7.87349L11.683 7.66782C11.633 7.53086 11.5527 7.40699 11.4481 7.30546L11.4267 7.28465L11.4033 7.26608L11.3455 7.22024L11.321 7.20083L11.2947 7.18405L7.38335 4.69445Z" stroke="white" strokeWidth="1.2"/>
            </svg>
        )
    },
    "Event": {
        "link": "/event",
        "icon": (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-date" viewBox="0 0 16 16">
                <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
        )
    },
    "Kuis": {
        "link": "/kuis",
        "icon": (
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3333 3.83331H17.25C17.7583 3.83331 18.2458 4.03525 18.6053 4.39469C18.9647 4.75414 19.1666 5.24165 19.1666 5.74998V19.1666C19.1666 19.675 18.9647 20.1625 18.6053 20.5219C18.2458 20.8814 17.7583 21.0833 17.25 21.0833H5.74998C5.24165 21.0833 4.75414 20.8814 4.39469 20.5219C4.03525 20.1625 3.83331 19.675 3.83331 19.1666V5.74998C3.83331 5.24165 4.03525 4.75414 4.39469 4.39469C4.75414 4.03525 5.24165 3.83331 5.74998 3.83331H7.66665" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5417 9.58337H15.3334" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5417 13.4167H15.3334" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5417 17.25H15.3334" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.90625 9.58337H7.91253" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.90625 13.4167H7.91253" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.90625 17.25H7.91253" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.375 1.91669H8.62502C8.09575 1.91669 7.66669 2.34575 7.66669 2.87502V4.79169C7.66669 5.32096 8.09575 5.75002 8.62502 5.75002H14.375C14.9043 5.75002 15.3334 5.32096 15.3334 4.79169V2.87502C15.3334 2.34575 14.9043 1.91669 14.375 1.91669Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    "Paket": {
        "link": "/paket",
        "icon": (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
        )
    },
    "Voucher Soal": {
        "link": "/voucher-soal",
        "icon": (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-percent" viewBox="0 0 16 16">
                <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
        )
    },
}

const Navbar = (props) => {
    console.log(props.isCollapsed)
    return(
        <nav className="text-white">
            {!props.isCollapsed && (<img className="logo-brand" alt="" src={require('../assets/logo-white.png').default}/>)}
            <ul className="ps-0 pe-1">
                {Object.keys(Navigation).map(key => (
                    <Link to={Navigation[key]["link"]} className="d-flex flex-row mb-2" key={key}>
                        <div className={`bg-white p-1 rounded-end ${props.location.pathname!==Navigation[key]["link"] && 'bg-transparent'}`}></div>
                        <li key={key} className={`d-flex navbar-item mx-2  ${props.location.pathname===Navigation[key]["link"] && 'is-here'} `}>
                            <div className='mx-2 col-2'>{Navigation[key]["icon"]}</div>{!props.isCollapsed && (key)}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

export default withRouter(Navbar);