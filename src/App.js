import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import DashboardMap from "./pages/DashboardMap"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/add" element={<AddUser/>}/>
          <Route path="/user/edit/:id" element={<EditUser/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/users/map" element={<DashboardMap/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
