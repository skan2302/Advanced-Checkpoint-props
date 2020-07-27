import React from 'react'
const mystyle = {
    bordercollapse: "collapse",
    width: "100%",
  
  
   td : {
       border: "1px" , 
       color: "solid black", 
    textlign: "center",
    padding: "8px",
  }
  ,th : {
    textlign: "center",
    padding: "8px",
  }
}
  
function ProductTable({tableau} ) {
    return (
        <table style={mystyle}> 
        

        <tr> 
         <th>Name</th>
         <th>category</th>
         <th>price</th>
        </tr>     
           
            { tableau.map((Element) =>    
            <tr>
                <td>{Element.name}</td>
                <td>{Element.category}</td>
                <td>{Element.price} </td>

            </tr>
            )
        }  
            
            
            </table>
    )
}
export default ProductTable