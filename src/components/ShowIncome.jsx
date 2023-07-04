import { RiMoneyDollarCircleFill } from "react-icons/ri";

function ShowIncome({amount}) {
  return (
    <div className="flex flex-row justify-between py-3 my-3 text-dark-blue rounded-3xl bg-cream"> 
    <div className="text-4xl mx-2 py-1 px-2 text-[#679436]"><RiMoneyDollarCircleFill /></div>
    <h2 className="bg-[#679436] border rounded-2xl text-cream px-1 py-1 mx-3 my-1 font-bold">${amount}</h2>
  </div>
  )
}

export default ShowIncome