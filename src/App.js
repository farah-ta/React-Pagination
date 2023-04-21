import "./App.css";
import React, { useState } from "react";
import {data} from './data'; 
import ReactPaginate from "react-paginate";

function App() {
  
  const [users, setUsers] = useState(data.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const recordPerPage = 5;
  const pagesVisited = pageNumber * recordPerPage;

  const displayUsers = data
    .slice(pagesVisited, pagesVisited + recordPerPage);
    

    

  const pageCount = Math.ceil(users.length / recordPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    
    <div className="App">
      
      <h1>React Pagination</h1>

      <table className="users">
      <thead>
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
     
      {displayUsers.map((user) => 
(
  <tr>

<td>{user.first_name}</td>
<td>{user.last_name}</td>
          <td>{user.email}</td>
          </tr>
      )
      ) }
        
         
        
        </tbody>
        </table>




      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"Buttons"}
        previousLinkClassName={"prevBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
      
      }
    
export default App;
