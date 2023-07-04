import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from '../config/firebase';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import { FaTimesCircle } from 'react-icons/fa';

function Income() {
  const [showIncomeForm, setShowIncomeForm] = useState(false);
  const [user] = useAuthState(auth);
  
  const navigate = useNavigate();
  const toggleIncomeForm = () =>{
    setShowIncomeForm(!showIncomeForm)
  }

  const schema = yup.object().shape({
    incomeAmount : yup.number("Please enter a amount").min(0.01, "Expense should be more that zero").required("Please enter a amount"),
  })

  const { register, handleSubmit, formState : {errors}} = useForm({
    resolver : yupResolver(schema),
  })

const incomeRef = collection(db,"incomes");

const createIncome = async (data) =>{
    await addDoc(incomeRef, {
      amount : data.incomeAmount,
      userId : user?.uid
    })
    navigate("/home");
}
 

  return (
    <div className='mx-auto my-4 lg:m-auto'>
      {showIncomeForm ? (
        <div className='h-auto w-auto'>
          <div className="text-3xl text-cream py-2">
            <FaTimesCircle onClick={toggleIncomeForm} /> 
          </div>
            <form onSubmit={handleSubmit(createIncome)}>
                <input className='bg-dark-blue text-cream border-2 rounded-lg border-cream text-lg p-2 my-2 outline-none lg:text-2xl' type="number" step="any" placeholder='Income Amount *' {...register("incomeAmount")} />
                <p className='text-red text-xs font-bold'>{errors.incomeAmount?.message}</p>
                <input className='border-2 border-cream rounded-full text-cream text-lg my-2 p-1 w-full lg:text-2xl' type="submit" />
            </form>
        </div>
        ):(
        <button className='border-2 border-cream rounded-full text-cream text-lg p-2 lg:text-2xl' onClick={toggleIncomeForm}>Income Add</button>
        )}
    </div>
  );
};

export default Income