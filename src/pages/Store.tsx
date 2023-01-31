import { NavLink } from "react-router-dom";
import { IProduct } from "../types";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import { useDataContext } from "../context/DataContext";
import NoMatch from "./NoMatch";
import CheckBox from "../components/CheckBox";
import { BsFilterRight } from "react-icons/bs";
import Pagination from "../components/Pagination";

const Store = () => {
  const {
    listOfProducts,
    fetchAllProducts,
    searchList,
    filterList,
    cleanLocalStorage,
  } = useDataContext();

  const [search, setSearch] = useState<IProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredSearchList, setFilteredSearchList] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showFilteredResult, setShowFilteredResult] = useState<boolean>(false);
  const [nothingFound, setNothingFound] = useState<boolean>(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);
  const [uncheckFilter, setUncheckFilter] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(8);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = listOfProducts.slice(firstItemIndex, lastItemIndex);
  const searchItems = search.slice(firstItemIndex, lastItemIndex);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const findProducts = () => {
      return listOfProducts
        .filter((p) => p.name.includes(searchQuery))
        .map((p) => p);
    };

    if (findProducts().length === 0) {
      setNothingFound(true);
    }
    setSearch(findProducts());
    setSearchQuery("");
    setShowDropdown(false);
    setShowFilteredResult(true);
    saveInLocalStorage(findProducts());
  };

  const getFromLocalStorage = () => {
    const getFromStorage = window.localStorage.getItem("storage");
    if (getFromStorage) {
      const prevItems = JSON.parse(getFromStorage);
      setSearch(prevItems);
      setShowFilteredResult(true);
    }
  };

  const saveInLocalStorage = (search: IProduct[]) => {
    window.localStorage.setItem("storage", JSON.stringify(search));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowDropdown(true);
    setSearchQuery(e.target.value);
  };

  const updateSearchList = () => {
    const showList = searchList
      .filter((name) => name.includes(searchQuery))
      .map((n) => n);
    setFilteredSearchList(showList);
  };

  const selectQuery = (n: string) => {
    const selectedProduct = listOfProducts.filter((p) => p.name === n);
    setSearch(selectedProduct);
    setSearchQuery(n);
    setShowDropdown(false);
  };

  const handleFilterClick = () => {
    setShowFilterDropdown(!showFilterDropdown);
    cleanLocalStorage();
    
  };

  const handleSeeAllProductsClick = () => {
    setShowFilteredResult(false);
    setShowFilterDropdown(false);
    setUncheckFilter(true);
    setCurrentPage(1);
  };

  let listOfMilkProducts;

  useEffect(() => {
    getFromLocalStorage();
    fetchAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateSearchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    if (search.length === 0) {
    } else {
      setShowFilteredResult(true);
      saveInLocalStorage(search);
    }
  }, [search]);

  if (showFilteredResult && !nothingFound) {
    listOfMilkProducts = (
      <>
        <h5 className="amount-products">{search.length} products</h5>

        <div className="store-products-container">
          {searchItems &&
            searchItems.map((p, index) => (
              <div key={index}>
                <NavLink to={`/milk-products/${p.id}`} state={p}>
                  <Item product={p} />
                </NavLink>
              </div>
            ))}
        </div>
        <Pagination
        totalItems={search.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      </>
    );
  } else {
    listOfMilkProducts = (
      <>
        <h5 className="amount-products">{listOfProducts.length} products</h5>
        <div className="store-products-container">
          {currentItems &&
            currentItems.map((p, index) => (
              <div key={index}>
                <NavLink to={`/milk-products/${p.id}`} state={p}>
                  <Item product={p} />
                </NavLink>
              </div>
            ))}
        </div>
        <Pagination
        totalItems={listOfProducts.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      </>
    );
  }

  return (
    <main>
      <div className="store-header">
        <div className="store-form-container">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              onChange={handleSearchChange}
              value={searchQuery}
            />
            <input className="search-button" type="submit" value="Search" />
          </form>
          <div
            className={`store-search-list-container ${
              showDropdown ? "show" : "hidden"
            }`}
          >
            <ul className="search-list-ul">
              {filteredSearchList.map((name, index) => (
                <li
                  className="search-list-li"
                  key={index}
                  onClick={() => selectQuery(name)}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p
          className={showFilteredResult ? "all-products-button" : "hidden"}
          onClick={handleSeeAllProductsClick}
        >
          See All Products
        </p>
        <div className="filter-container">
          <div className="filter-head" onClick={handleFilterClick}>
            <BsFilterRight />
            {showFilterDropdown ? <p className="filter-x">X</p> : <p>Filter</p>}
          </div>
          <div
            className={`filter-all-items ${
              showFilterDropdown ? "show-filter" : "hidden-filter"
            }`}
          >
            {filterList.map((p, index) => (
              <CheckBox
                key={index}
                type={p}
                search={search}
                setSearch={setSearch}
                setShowFilteredResult={setShowFilteredResult}
                showFilteredResult={showFilteredResult}
                uncheckFilter={uncheckFilter}
              />
            ))}
          </div>
        </div>
      </div>

      {!nothingFound ? listOfMilkProducts : <NoMatch />}
      
      
    </main>
  );
};

export default Store;
