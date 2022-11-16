import React from 'react';
import Pagination from '@mui/material/Pagination';


const myPagination=({page,setPage,totalPages})=>{
    const handleChange=(e,p)=>{
        setPage(p)
    }

return(




  
   
   
      <Pagination  variant="outlined" color="primary"  
      page={page}
      onChange={handleChange}
      count={totalPages}
      />
   
    
  );
}
  export default myPagination;