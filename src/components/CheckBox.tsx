import { useState } from "react";
import { IProduct } from "../types";
import { useDataContext } from "../context/DataContext";

type CheckBoxProps = {
  type: string;
  search: IProduct[];
  setSearch: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setShowFilteredResult: React.Dispatch<React.SetStateAction<boolean>>;
  
};

const CheckBox = ({ type, search, setSearch, setShowFilteredResult }: CheckBoxProps) => {
    const { listOfProducts } = useDataContext();
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked)
    const typeChecked = e.target.value;
    if (!checked) {
        const listByType = listOfProducts.filter(p => p.type === typeChecked).map(p => p);
        const newLists = search.concat(listByType);
        setSearch(newLists)
        
    } else {
        const listByType = search.filter(p => p.type !== typeChecked).map(p => p);
        if (listByType.length === 0) {
            setShowFilteredResult(false)
            setSearch([]);
        } else {
            setSearch(listByType)
        }

        
    }
  }

  return (
    <div className="filter-item-container">
      <input type="checkbox" name={type} value={type} onChange={handleCheckBox}/>
      <label className="filter-label" htmlFor={type}>
        {type}
      </label>
    </div>
  );
};

export default CheckBox;
