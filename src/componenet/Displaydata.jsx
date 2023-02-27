import React from "react";
import Table from "./Table";
import data from "./userdata"

const Displaydata=()=>{
    return(
        <>
        <div className="table">
        <div className="child">
        
            <table>
                <tr>
                    <th>Name</th>
                    <th>username</th>
                    <th>Email</th>
                </tr>
               

              {  
                data.map((x)=>{
                    console.log(x.name)
              
                    return(
                      
                        <Table
                    
                        name={x.title}
                        email={x.price}
                        username={x.quantity}
                    />

                    );
                   

                }
                )
               
                
                }
                
               
            </table>
            </div>
            </div>
            dbhdgddg
        </>

    )
}

export default Displaydata;