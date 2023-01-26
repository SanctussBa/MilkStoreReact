import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICartProduct, IProduct } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";

type DataContextProps = {
  children: ReactNode;
};

type DataContext = {
  listOfProducts: IProduct[];
  searchList: string[];
  filterList: string[];
  cart: ICartProduct[];
  setListOfProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  fetchAllProducts: () => void;
  cleanLocalStorage: () => void;
  increaseCartQuantity: (id: string, quantity: number) => void;
  decreaseProductQantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  sendOrder: () => void;
};

const DataContext = createContext({} as DataContext);

export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }: DataContextProps) {
  const [listOfProducts, setListOfProducts] = useState([] as IProduct[]);
  const [searchList, setSearcList] = useState<string[]>([]);
  const [filterList, setFilterList] = useState<string[]>([]);
  // const [cart, setCart] = useState<ICartProduct[]>([]);

  const [cart, setCart] = useLocalStorage<ICartProduct[]>(
    "shopping-cart",
    []
  );

  const checkCartProducts = (fetchedList: IProduct[]) => {
    const newList = [...fetchedList];
    cart.forEach((p) => {
      const prod = fetchedList.find((pr) => pr.id === p.id);
      if (prod) {
        const i = newList.indexOf(prod);
        const updatedProduct = { ...prod, storage: prod.storage - p.quantity };
        newList.splice(i, 1, updatedProduct);
      }
    });
    setListOfProducts(newList);
  };


  const fetchAllProducts = async () => {
    const response = await fetch("http://localhost:5283/api/MilkProducts");
    const list = await response.json();
    checkCartProducts(list);
  };

  const sendOrder = async () => {
    cart.forEach(orderItem => {
      fetch(`http://localhost:5283/api/MilkProducts/${orderItem.id}/${orderItem.quantity}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
      });
      removeFromCart(orderItem.id);
    })

  }

  const cleanLocalStorage = () => {
    window.localStorage.removeItem("storage");
  };


  function increaseCartQuantity(id: string, quantity: number) {
    setCart((cart) => {
      if (cart.find((item) => item.id === id) == null) {
        return [...cart, { id: id, quantity: quantity }];
      } else {
        return cart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseProductQantity(id: string, quantity: number) {
    setListOfProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, storage: item.storage - quantity } : item
      )
    );
  }

  function removeFromCart(id: string) {
    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }


  const getSearchList = () => {
    const allNames = listOfProducts.map((obj) => obj.name);
    setSearcList(allNames);
  };
  const getFilterList = () => {
    const allTypes = listOfProducts.map((obj) => obj.type);

    const uniqueTypes = allTypes.filter(
      (value, index, self) => self.indexOf(value) === index
    );
    setFilterList(uniqueTypes);
  };



  useEffect(() => {
    getSearchList();
    getFilterList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listOfProducts]);


  return (
    <DataContext.Provider
      value={{
        listOfProducts,
        fetchAllProducts,
        setListOfProducts,
        searchList,
        cleanLocalStorage,
        filterList,
        increaseCartQuantity,
        cart,
        decreaseProductQantity,
        removeFromCart,
        sendOrder
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
