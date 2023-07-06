import {getDocs, collection} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db,auth} from "./config/firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import ShowSpend from "./components/ShowSpend"
import ShowIncome from "./components/ShowIncome";

function Home() {
  const [spendList, setSpendList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);
  const [user] = useAuthState(auth);
  const spendRef = collection(db, "expenses");
  const incomeRef = collection(db, "incomes");
  

  const getSpend =async () => {
    const data = await getDocs(spendRef);
    setSpendList(
          data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
      );
  };

  const getIncome =async () => {
    const data = await getDocs(incomeRef);
    setIncomeList(
          data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
      );
  };

  useEffect(() => {
    getSpend();
    getIncome();
}, [spendList,incomeList]);

  return (
    <div className="m-auto p-4 text-cream flex flex-col justify-center h-auto md:w-[80%]">
      <h1 className="font-bold text-5xl p-2 text-center">Welcome to DollarSense</h1>
      <div>
        <h2 className="text-cream text-center text-2xl py-3 font-bold">Expenses</h2>
        <div className="flex flex-col md:w-[65%] lg:w-[35%] m-auto">
          {spendList?.map((post,index) => {
              if(user?.uid == post.userId ){
                return <ShowSpend key={index} name={post.name} amount={post.amount} id={post.id} />
              } 
          })}
        </div>
      </div>
      <h2 className="text-cream text-center text-2xl py-3 font-bold ">Income</h2>
      <div className="md:w-[65%] md:mx-auto lg:w-[35%] lg:mx-auto ">
      {incomeList?.map((income,index) => {
        if(user?.uid == income.userId ){
            return <ShowIncome key={index} amount={income.amount} id={income.id}/>
        }
      })}
      </div>
    </div>
  )
}

export default Home