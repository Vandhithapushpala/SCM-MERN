import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navhome';
import Aschome from './Components/ASC/aschome';
import DivHome from './Components/Divisions/Divhome';
import UniHome from './Components/Units/UniHome';
import Unit01 from './Components/Units/Unit01';
import NavUnits from './navbar/NavUnits';
import AllReq from './Components/Units/AllReq';
import UniAcptReq from './Components/Units/UniAcptReq';
import OpReq from './Components/Units/OpReq';
import DU1 from './Components/Divisions/DU1';
import NavDiv from './navbar/NavDiv';
import U1req from './Components/Divisions/U1req';
import D1req from './Components/ASC/D1req';
import NavAsc from './navbar/NavAsc';
import D1 from './Components/ASC/D1';
import Login from './Authenticate/Login';
import NavAuth  from './navbar/NavAuth';
import Signup from './Authenticate/Signup';


const App = () => {
  return (
    
    
    <Router>
      <Routes>
        <Route path="/" element={<NavAuth/>} />
        <Route path="/Authenticate/Signup" element={<NavAuth/>} />
        <Route path="/Components/ASC/aschome" element={<Navbar />} />
        <Route path="/divhome" element={<Navbar />} />
        <Route path="/unihome" element={<Navbar />} />
        <Route path="/Components/Units/Unit01" element={<NavUnits />} />
        <Route path="/Components/Divisions/DU1" element={<NavDiv/>} />
        <Route path="/Components/Units/AllReq" element = {<NavUnits/>}/>
        <Route path="/Components/Units/UniAcptReq" element = {<NavUnits/>}/>
        <Route path="/Components/Units/OpReq" element = {<NavUnits/>}/>
        <Route path = "/Components/Divisions/U1req" element = {<NavDiv/>}/>
        <Route path = "/Components/ASC/D1req" element = {<NavAsc/>}/>
        <Route path = "/Components/ASC/D1" element = {<NavAsc/>}/>
      </Routes>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/Authenticate/Signup" element={<Signup/>} />
        <Route path="/Components/ASC/aschome" element={<Aschome />} />
        <Route path="/divhome" element={<DivHome />} />
        <Route path="/uniHome" element={<UniHome />} />
        <Route path="/Components/Units/Unit01" element={<Unit01 />} />
        <Route path="/Components/Divisions/DU1" element={<DU1/>}/>
        <Route path="/Components/Units/AllReq" element = {<AllReq/>}/>
        <Route path="/Components/Units/UniAcptReq" element = {<UniAcptReq/>}/>
        <Route path="/Components/Units/OpReq" element = {<OpReq/>}/>
        <Route path="/Components/Divisions/U1req" element = {<U1req/>}/>
        <Route path = "/Components/ASC/D1req" element = {<D1req/>}/>
        <Route path = "/Components/ASC/D1" element = {<D1/>}/>

      </Routes>
    </Router>
  );
};


export default App;
