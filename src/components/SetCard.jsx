function SetCard({set}) {
  return (
    <p className="bg-gray-300 mb-2 rounded shadow py-2 px-4 text-sm text-black">
      <span className="text-red-600">{set.set_name} </span>
      <span>{set.set_code} </span>
      <span className="text-red-600">{set.set_rarity} </span>
      <span className="text-">{set.set_rarity_code} </span>
      <span className="text-">${set.set_price} </span>
    </p>
  );
}

export default SetCard;