import { RiMoneyDollarCircleFill } from "react-icons/ri";
import {db} from "../config/firebase";
import {deleteDoc,doc } from "firebase/firestore";
import {FaTrash} from "react-icons/fa";

function ShowIncome({amount,id}) {

  const docRef = doc(db, "incomes", id);
  const deleteIncome = () =>{
    deleteDoc(docRef)
    .then(() => {
        // console.log("Entire Document has been deleted successfully.")
    })
    .catch(error => {
        console.log(error);
    })
  }


  return (
  <div className="flex flex-row justify-between py-3 my-3 text-dark-blue rounded-3xl bg-cream"> 
    <div className="text-4xl mx-2 py-1 px-2 text-[#679436]"><RiMoneyDollarCircleFill /></div>
    <h2 className="text-[#679436] px-1 py-1 mx-3 my-1 font-bold">${amount}</h2>
    <div className="text-dark-blue text-xl mx-3 px-2 py-3 "><FaTrash onClick={deleteIncome}/></div>
  </div>
  )
}

export default ShowIncome