import {db} from "../config/firebase";
import {deleteDoc,doc } from "firebase/firestore";
import {FaTrash} from "react-icons/fa";
function ShowSpend({name, amount, id}) {
  const docRef = doc(db, "expenses", id);
  const deleteSpend = () =>{
    deleteDoc(docRef)
    .then(() => {
        // console.log("Entire Document has been deleted successfully.")
    })
    .catch(error => {
        console.log(error);
    })
  }
 


  return (
    <div className="flex flex-row justify-between py-3 my-2 text-[#c1121f] rounded-3xl bg-cream">
      <h1 className="capitalize mx-3 px-2 py-1 my-1 text-xl">{name}</h1>
      <h2 className="text-[#c1121f] px-1 py-2 mx-3 my-1 font-bold">${amount}</h2>
      <div className="text-dark-blue text-xl mx-3 px-2 py-3 "><FaTrash onClick={deleteSpend}/></div>
    </div>
  )
}

export default ShowSpend

