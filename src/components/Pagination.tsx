type PaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
}


const Pagination = ({totalItems, itemsPerPage, setCurrentPage, currentPage} : PaginationProps) => {

    let pages = [];

    for( let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="pagination">
            {pages && pages.map((page, index) => {
                return <button className={`pagination-item ${page === currentPage && "current-page"}`} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            })}
        </div>
    )
}

export default Pagination;