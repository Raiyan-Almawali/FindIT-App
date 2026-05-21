import './App.css';
import Home from './Componenet/Home';
import { Container } from 'reactstrap';
import LoginFreelancer from './Componenet/LoginAndSignUp/LoginFreelancer';
import LoginJobProvider from './Componenet/LoginAndSignUp/LoginJobProvider';
import SignUpPerson from './Componenet/LoginAndSignUp/SignUpPerson';
import SignUpCompany from './Componenet/LoginAndSignUp/SignUpCompany';
import ToggleLogin from './Componenet/LoginAndSignUp/ToggleLogin';
import ToggleRegister from './Componenet/LoginAndSignUp/ToggleRegister';
import {Routes, Route} from 'react-router-dom';
import PostJob from './Componenet/PostJob';
import CompDashbord from './Componenet/Dashboreds/CompDashbord';
import HelpCenter from './Componenet/HelpCenter';
import Policies from './Componenet/Policies';
import FreelancerDashboard from './Componenet/Dashboreds/FreelancerDashboard';
import JobsDashboard from './Componenet/Dashboreds/JobsDashboard';
import JobDetailsPage from './Componenet/JobDetailsPage';
import JobsPage from "./Componenet/JobsPage";
import EditJobPage from './Componenet/Dashboreds/EditJobPage';
import CompanyProfile from './Componenet/Dashboreds/CompanyProfile';
import ChangePassword from './Componenet/Dashboreds/ChangePassword';







function App() {
  return (
    <>
      <Container fluid>
         
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ToggleLogin" element={<ToggleLogin/>}/>
          <Route path="/ToggleRegister" element={<ToggleRegister/>}/>
          <Route path="/LoginFreelancer" element={<LoginFreelancer/>}/>
          <Route path="/LoginJobProvider" element={<LoginJobProvider/>}/>
          <Route path="/SignUpPerson" element={<SignUpPerson/>}/>
          <Route path="/SignUpCompany" element={<SignUpCompany/>}/>
          <Route path="/PostJob" element={<PostJob/>}/>
          <Route path="/CompDashbord" element={<CompDashbord/>}/>
          <Route path="/HelpCenter" element={<HelpCenter/>} />
          <Route path="/Policies" element={<Policies/>} />
          <Route path="/JobDetailsPage/:id" element={<JobDetailsPage/>} />
          <Route path="/FreelancerDashboard" element={<FreelancerDashboard/>} />
          <Route path="/JobsDashboard" element={<JobsDashboard/>} />
          <Route path="/JobsPage" element={<JobsPage/>} />
          <Route path="/EditJobPage/:id" element={<EditJobPage/>} />
          <Route path="/CompanyProfile" element={<CompanyProfile/>} />
          <Route path="/ChangePassword" element={<ChangePassword/>} />
          
          
          

        </Routes>


      </Container>
    </>
  );
}

export default App;
