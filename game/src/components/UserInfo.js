import React from 'react'
import { useDispatch} from 'react-redux'
import { modePopupActions, popupActions, } from '../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useFormik } from "formik";
import * as yup from 'yup';
import { motion, AnimatePresence } from "framer-motion"

const UserInfo = () => {

  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit, handleBlur, isSubmitting, errors, touched } = useFormik({
    initialValues: {
      name: "",
      age: 0,
    },

    //submit handler
    onSubmit: (values) => {

      axios.post('http://localhost:3001/api/playerDetails', values)
        .then(res => {
          console.log(res)
          dispatch(modePopupActions.open()) // opens modal for selecting game mode
          dispatch(popupActions.close()) // closes userinfo modal

        })
        .catch((err) => {

          //toastify error message
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_CENTER
          })
        })
    },

    //form validation schema
    validationSchema: yup.object({
      name: yup.string()
        .min(3, "minimum 3 characters long")
        .max(15, "maximum 15 charachters long")
        .required("Name is Required"),
      age: yup.number()
        .integer()
        .typeError('Age must be a number')
        .required('Age is Required')
        .max(100, "must be less than 100")
        // .positive('Age must be greater than 0')


    })
  })

  return (
    <React.Fragment>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          className='fixed left-0 top-0 bg-[rgb(26_8_8_/_75%)] w-full h-[100vh]'
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.5 } }}
            exit={{ scale: 0 }}
            className='relative w-2/4 min-h-[300px] bg-[#040404d9] rounded-lg  border-[#785c5c87] border shadow-[5px_10px_50px_#b1565661] m-[20px_auto] p-[20px] top-[230px]'
          >
            <div className='text-[20px] rounded-full bg-[#202020] w-[30px] font-bold text-center float-right cursor-pointer text-red-600' onClick={() => { dispatch(popupActions.close()) }}>x</div>
            <h3 className='text-white'>Please enter your name and age to continue...</h3>
            <form className='flex flex-col items-center mt-[10px]' onSubmit={handleSubmit}>
              <label className='mt-[10px] text-white font-bold'>Name</label>
              <input
                name='name'
                type='text'
                placeholder='type...'
                className='w-1/2 mt-[5px] p-[5px] bg-[#220c0c] placeholder-[#6161619f] rounded-md text-white'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name ? <p className='text-[14px] text-red-600 pb-[1.5rem]'>{errors.name}</p> : null}
              <label className='mt-[10px] text-white font-bold'>Age</label>
              <input
                name='age'
                type='text'
                placeholder='type...'
                className='w-1/2 mt-[5px] p-[5px] bg-[#220c0c] placeholder-[#6161619f] rounded-md text-white'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.age && errors.age ? <p className='text-[14px] text-red-600 pb-[1.5rem]'>{errors.age}</p> : null}
              <button type="submit" className=' bg-[#300808] mt-[15px] p-[10px] rounded-md text-white'>Submit</button>
            </form>
            <ToastContainer />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  )
}

export default UserInfo
