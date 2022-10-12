import React from "react";

const Search=()=>{
    return(
        <div className="modal popup-search-style" id="searchActive">
        <button type="button" className="close-btn" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
        <div className="modal-overlay">
            <div className="modal-dialog p-0" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h2>Search Your Product</h2>
                        <form className="navbar-form position-relative" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search here..."/>
                            </div>
                            <button type="submit" className="submit-btn"><i className="pe-7s-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
   

}
export default Search;