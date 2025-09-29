import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Home from './components/home.jsx'
import CLIMATE from './components/climate.jsx'
import EDUCATION from './components/education.jsx'
import GENDER from './components/gender.jsx'
import GOVERNANCE from './components/governance.jsx'
import HEALTH from './components/health.jsx'
import PEACE from './components/peace.jsx'
import About from './components/about.jsx'
import Projects from "./components/projects"
import REPRO from './components/reproductive.jsx'
import TABASAMU from './components/tabasamu.jsx'
import GROUND from './components/ground.jsx'
import JIJENGE from './components/jijenge.jsx'
import MATERNAL from './components/maternal.jsx'
import PRIORITY from './components/priority.jsx'
import POLICY from './components/policy.jsx'
import PRIVACY from './components/privacy.jsx'
import RISK from './components/risk.jsx'
import SHE from './components/she.jsx'
import EAST from './components/east.jsx'
import VIOLENT from './components/violent.jsx'
import Resources from "./components/resources"
import Newsletters from "./components/newsletters.jsx"
import Opportunity from "./components/opportunity"
import Gallery from "./components/gallery"
import PHOTO from "./components/photo"
import Error from './components/error.jsx'
import WHO from "./components/who"
import WHAT from "./components/what"
import CORE from "./components/values"
import OBJECTIVE from "./components/objective"
import REPORT from "./components/report.jsx"
import NEWS from "./components/news.jsx"
import APPROACH from "./components/approach"
import CAREERS from './components/carreers.jsx'
import QUOTATION from './components/quotation.jsx'
import CONSULTANCY from './components/consultancy.jsx'
import INTERNSHIP from './components/internship.jsx'
import ATTATCHMENTS from './components/attatchments.jsx'
import FEEDBACK from './components/feedback.jsx'
import BOARD from './components/board.jsx'
import TEAM from './components/team.jsx'
import WEFORSHE from './components/weforshe.jsx'
import COALITION from './components/coalition.jsx'
import TUINUANE from "./components/tuinuane.jsx"
import BADILIKA from "./components/badilika.jsx"
import NETWORK from "./components/networks.jsx"
import ASDSP from "./components/networks/asdsp.jsx"
import CONSORTIUM from "./components/networks/consortium.jsx"
import GTWG from './components/networks/gender.jsx'
import MCDT from "./components/networks/mcdt.jsx"
import MCHANE from './components/networks/mchane.jsx'
import PGBVN from "./components/networks/pgbvn.jsx"
import RIGHTS from "./components/networks/rights.jsx"
import SUNCSA from "./components/networks/suncsa.jsx"
import TREATY from "./components/networks/treaty.jsx"
import KANCO from "./components/networks/kanco.jsx"

import {RouterProvider, createBrowserRouter} from "react-router-dom"
// import WIREFRAMES from './components/admin/wireframes.jsx'
// import GET_FEEDBACK from './components/admin/feedback.jsx'
// import GET_NEWSLETTER from './components/admin/newsletter.jsx'
// import WIREFRAME from './components/admin/wireframe.jsx'
// import SIGNIN from './components/admin/signin.jsx'
import SOCIAL from './components/socials.jsx'
// import REPORTS from './components/admin/report.jsx'
// import About from './components/about.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>,
    errorElement : <Error/>
  },
  {
    path : "/home",
    element : <Home/>,
    errorElement : <Error/>
  },
  {
    path : "/home/climate",
    element : <CLIMATE/>,
    errorElement : <Error/>
  },
  {
    path : "/home/education",
    element : <EDUCATION/>,
    errorElement : <Error/>
  },
  {
    path : "/home/gender",
    element : <GENDER/>,
    errorElement : <Error/>
  },  {
    path : "/home/governance",
    element : <GOVERNANCE/>,
    errorElement : <Error/>
  },
  {
    path : "/home/health",
    element : <HEALTH/>,
    errorElement : <Error/>
  },{
    path : "/tuinuane",
    element : <TUINUANE/>,
    errorElement : <Error/>
  },
  {
    path : "/badilika",
    element : <BADILIKA/>,
    errorElement : <Error/>
  },
  {
    path : "/home/peace",
    element : <PEACE/>,
    errorElement : <Error/>
  },
  {
    path : "/home/careers",
    element : <CAREERS/>,
    errorElement : <Error/>
  },  
  {
    path : "/tenders",
    element : <QUOTATION/>,
    errorElement : <Error/>
  },
  {
    path : "/consultancy",
    element : <CONSULTANCY/>,
    errorElement : <Error/>
  },
  {
    path : "/internship",
    element : <INTERNSHIP/>,
    errorElement : <Error/>
  },
  {
    path : "/attatchment",
    element : <ATTATCHMENTS/>,
    errorElement : <Error/>
  },
  {
    path : "/home/feedback",
    element : <FEEDBACK/>,
    errorElement : <Error/>
  },
  // {
  //   path : "/home/:section",
  //   element : <Home/>,
  //   errorElement : <Error/>
  // },
  {
    path : "/about",
    element : <About/>,
    errorElement : <Error/>
  },
  {
    path : "/projects",
    element : <Projects/>,
    errorElement : <Error/>
  },
  {
    path : "/projects/ground",
    element : <GROUND/>,
    errorElement : <Error/>
  },
  {
    path : "/projects/tabasamu",
    element : <TABASAMU/>,
    errorElement : <Error/>
  },
  {
    path : "/projects/she",
    element : <SHE/>,
    errorElement : <Error/>
  },
  {
    path : "/projects/reproductive",
    element : <REPRO/>,
    errorElement : <Error/>
  },
  {
    path : "/projects/jijenge",
    element : <JIJENGE/>,
    errorElement : <Error/>
  },
  {
    path : "/projects/maternal",
    element : <MATERNAL/>,
    errorElement : <Error/>
  },
  {
    path : "/projects/priority",
    element : <PRIORITY/>,
    errorElement : <Error/>
  },
  {
    path : "/projects/east",
    element : <EAST/>,
    errorElement : <Error/>
  },
  {
    path : "/projects/violent",
    element : <VIOLENT/>,
    errorElement : <Error/>
  },
  {
    path:"/resources",
    element:<Resources/>,
    errorElement : <Error/>
  },  
  {
    path:"/newsletters",
    element:<Newsletters/>,
    errorElement : <Error/>
  },
  {
    path: "/opportunity",
    element:<Opportunity/>,
    errorElement : <Error/>
  },
  {
    path: "/weforshe",
    element:<WEFORSHE/>,
    errorElement : <Error/>
  },
  {
    path: "/coalition",
    element:<COALITION/>,
    errorElement : <Error/>
  },  
  {
    path: "/coalition/pgbvn",
    element:<PGBVN/>,
    errorElement : <Error/>
  },  
  {
    path: "/coalition/asdsp",
    element:<ASDSP/>,
    errorElement : <Error/>
  },  
  {
    path: "/coalition/consortium",
    element:<CONSORTIUM/>,
    errorElement : <Error/>
  },  
  {
    path: "/coalition/gender",
    element:<GTWG/>,
    errorElement : <Error/>
  },  
  {
    path: "/coalition/mcdt",
    element:<MCDT/>,
    errorElement : <Error/>
  },  
  {
    path: "/coalition/mchane",
    element:<MCHANE/>,
    errorElement : <Error/>
  },  
  {
    path: "/coalition/rights",
    element:<RIGHTS/>,
    errorElement : <Error/>
  },  
  {
    path: "/coalition/suncsa",
    element:<SUNCSA/>,
    errorElement : <Error/>
  },  
  {
    path: "/coalition/treaty",
    element:<TREATY/>,
    errorElement : <Error/>
  }, 
  {
    path: "/coalition/kanco",
    element:<KANCO/>,
    errorElement : <Error/>
  },
  {
    path: "/networks",
    element:<NETWORK/>,
    errorElement : <Error/>
  },
  {
    path:"/gallery",
    element:<Gallery/>,
    errorElement : <Error/>
  },
  {
    path:"/photo",
    element:<PHOTO/>,
    errorElement : <Error/>
  },
  {
    path : "/about/values",
    element : <CORE/>,
    errorElement : <Error/>
  },
  {
    path : "/about/objectives",
    element : <OBJECTIVE/>,
    errorElement : <Error/>
  },
  {
    path : "/about/who",
    element : <WHO/>,
    errorElement : <Error/>
  },
  {
    path : "/about/what",
    element : <WHAT/>,
    errorElement : <Error/>
  },
  {
    path : "/news",
    element : <NEWS/>,
    errorElement : <Error/>
  },
  {
    path : "/report",
    element : <REPORT/>,
    errorElement : <Error/>
  },  
  {
    path : "/policy",
    element : <POLICY/>,
    errorElement : <Error/>
  }, 
  {
    path : "/privacy",
    element : <PRIVACY/>,
    errorElement : <Error/>
  },
  {
    path : "/risk",
    element : <RISK/>,
    errorElement : <Error/>
  },
  {
    path : "/about/approach",
    element : <APPROACH/>,
    errorElement : <Error/>
  },
  {
    path : "/about/board",
    element : <BOARD/>,
    errorElement : <Error/>
  },
  {
    path : "/about/team",
    element : <TEAM/>,
    errorElement : <Error/>
  },
  {
    path:"/socials",
    element:<SOCIAL/>,
    errorElement:<Error/>
  },
  // {
  //   path:"/admin/wireframes",
  //   element:<WIREFRAMES/>,
  //   errorElement:<Error/>
  // },
  // {
  //   path:"/admin/feedback",
  //   element:<GET_FEEDBACK/>,
  //   errorElement:<Error/>
  // },
  // {
  //   path:"/admin/newsletter",
  //   element:<GET_NEWSLETTER/>,
  //   errorElement:<Error/>
  // },
  // {
  //   path:"/admin/reports",
  //   element:<REPORTS/>,
  //   errorElement:<Error/>
  // },
  // {
  //   path:"/admin/wireframes/:COMPONENT/:COUNT",
  //   element:<WIREFRAME/>,
  //   errorElement:<Error/>
  // },
  // {
  //   path:"/admin",
  //   element:<SIGNIN/>,
  //   errorElement:<Error/>
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <SessionProvider
  //   basePath={process.env.REACT_APP_api_url + "/api/auth"} // Point to your backend
  // >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  // </SessionProvider>

)
