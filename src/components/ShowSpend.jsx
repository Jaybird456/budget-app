
function ShowSpend({name, amount}) {

  return (
    <div className="flex flex-row justify-between py-3 my-2 text-[#c1121f] rounded-3xl bg-cream">
      <h1 className="capitalize mx-3 px-2 py-1 my-1 text-xl">{name}</h1>
      <h2 className="bg-[#c1121f] border rounded-2xl text-cream px-1 py-1 mx-3 my-1 font-bold">${amount}</h2>
    </div>
  )
}

export default ShowSpend

