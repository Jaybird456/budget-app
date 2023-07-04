import { useState } from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {FaTimesCircle} from 'react-icons/fa'


function Spend() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const toggleForm = () =>{
    setShowForm(!showForm)
  }

  const schema = yup.object().shape({
      expenseName : yup.string().required("Please enter the name of the expense"),
      expenseAmount : yup.number("Please enter number").min(0.01, "Expense should be more that zero").required("Please enter amount"),
      
  })

  const { register, handleSubmit, formState : {errors}} = useForm({
    resolver : yupResolver(schema),
  })
 
  const expenseRef = collection(db,"expenses");

  const createExpense = async (data) =>{
      await addDoc(expenseRef, {
        amount : data.expenseAmount,
        name : data.expenseName,
        userId : user?.uid
      })
      navigate("/home");

  }

  return (
    <div className='mx-auto my-4 lg:m-auto'>
      {/* switches bettwen a x and expense add button  */}
      {showForm ? (
        <div className='h-auto w-auto'> 
          <div className="text-3xl text-cream py-2">
            <FaTimesCircle onClick={toggleForm} /> 
          </div>
              <form onSubmit={handleSubmit(createExpense)}>
                  <input className='bg-dark-blue text-cream border-2 rounded-lg border-cream text-lg p-2 my-2 outline-none lg:text-2xl' type="text" placeholder='Expense Name *' {...register("expenseName")} variant='filled'  />
                  <p className='text-red text-xs font-bold'>{errors.expenseName?.message}</p>
                  <input className='bg-dark-blue text-cream border-2 rounded-lg border-cream text-lg p-2 my-2 outline-none lg:text-2xl' type="number" step="any" placeholder='Expense Amount *' {...register("expenseAmount")} variant='filled'  />
                  <p className='text-red text-xs font-bold'>{errors.expenseAmount?.message}</p>
                <input className='border-2 border-cream rounded-full text-cream text-lg my-2 p-1 w-full lg:text-2xl' type="submit" value="Submit" />
              </form>
          </div>
        ):(
        <div className='m-auto'>
          <button className='border-2 border-cream rounded-full text-cream text-lg p-2 lg:text-2xl' onClick={toggleForm} > Expense Add</button>
        </div>
        )}

    </div>
  );
};

export default Spend