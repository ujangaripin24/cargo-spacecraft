import React, {useEffect} from 'react';
import Layout from './Layout';
import FormEditProduct from '../components/FormEditProduct';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStatus } from "../features/authSlice";

function EditProduct() {
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
        <FormEditProduct/>
    </Layout>
  )
}

export default EditProduct