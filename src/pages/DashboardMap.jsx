import React, {useEffect} from 'react';
import Layout from  "./Layout";
import FormDashboardMap from "../components/leaflet/FormDashboardMap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStatus } from "../features/authSlice";

const DashboardMap = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getStatus());
  }, [dispatch]);

  useEffect(()=>{
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
        <FormDashboardMap/>
    </Layout>
  )
}

export default DashboardMap