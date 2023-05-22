import { Routes, Route } from "react-router-dom";
import Admin from "./Components/Admin";
import AdminHome from "./pages/AdminHome";
import Header from "./Components/Header";
import Mynotes from "./Components/Mynotes";
import PrivateRoute from "./Components/PrivateRoute";
import AddNotesAdmin from "./pages/AddNotesAdmin";
import Footer from "./Components/Footer";
import ReadNotesAdmin from "./pages/ReadNotesAdmin";
import EditNotesAdmin from "./pages/EditNotesAdmin";
import Signup from "./Components/Signup";
import UserLogin from "./Components/UserLogin";
import Home from "./Components/Home";
import PrivateRoutes2 from "./Components/PrivateRoutes2";
import ReadNotesUser from "./Components/ReadNotesUser";
import UserHome from "./Components/UserHome";
import AddNotesUser from "./Components/AddNotesUser";
import EditUser from "./Components/EditUser";
import RemoveUser from "./pages/RemoveUser";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
{/* Admin Routes */}
        <Route element={<PrivateRoute />}>
              <Route path="/adminhome" element={<AdminHome />} />
              <Route path="/addnotes" element={<AddNotesAdmin />} />
              <Route path="/readnotesadmin" element={<ReadNotesAdmin />} />
              <Route path="/editnotesadmin/:key" element={<EditNotesAdmin />} />
              <Route path="/removeuser" element={<RemoveUser />} />
        </Route>
{/* User Routes */}
          <Route element={<PrivateRoutes2 />}>
              <Route exact path="/userhome" element={<UserHome />} />
              <Route path="/readnotesuser" element={<ReadNotesUser />} />
              <Route path="/addnotesuser" element={<AddNotesUser />} />
              <Route path="/mynotes" element={<Mynotes />} />
              <Route path="/edituser" element={<EditUser />} />
          </Route>
        <Route exact path="/" element={<Home />} />
        <Route path="/user" element={<Signup />} />
        <Route path="/adminlogin" element={<Admin />} />
        <Route path="/userlogin" element={<UserLogin />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
