// import axios from "axios";
// import React, { useState } from "react";
// import { useEffect } from "react";
// // import { useEffect } from "react";

// function PayMaintenance(props) {
//   const maintenanceHeader = ["Name", "Tenant no", "Room no", "Status"];
//   const [isPaid, setIsPaid] = useState(false);

//   const [rows, setRows] = useState([]);

//   const pay = async () => {
//     try {
//       const res = await axios.post(`${process.env.REACT_APP_SERVER}/dashboard/tenant`, {
//         userId: JSON.parse(window.localStorage.getItem("whom")).username,
//       });
//       const [result] = res.data;
//       setRows(result);
//       setIsPaid(result.stat === "paid");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     pay();
//   }, []);

//   useEffect(() => {
//     axios
//       .post(`${process.env.REACT_APP_SERVER}/paymaintanance`, {
//         userId: JSON.parse(localStorage.getItem("whom")).username,
//         status: "Paid",
//       })
//       .then((res) => {
//         // console.log(res);
//       })
//       .catch((err) => {
//         // console.log(err);
//       });
//   }, [isPaid]);

//   return (
//     <section className="pr-5 px-10 py-20 w-screen">
//       <div className="container card overflow-hidden">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full px-4">
//             <div className="max-w-full overflow-x-auto">
//               <table className="table-auto w-full">
//                 <thead>
//                   <tr className="bg-blue-500 text-center">
//                     {maintenanceHeader.map((ele, index) => {
//                       return (
//                         <th
//                           key={index + 1}
//                           className="
//                           w-1/6
//                           min-w-[160px]
//                           text-lg
//                           font-semibold
//                           text-white
//                           py-4
//                           lg:py-7       
//                           px-3
//                           lg:px-4
//                           border-l border-transparent
//                           "
//                         >
//                           {ele}
//                         </th>
//                       );
//                     })}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* <tr> */}

//                   <tr>
//                     <td
//                       className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                           "
//                     >
//                       {rows.name}
//                     </td>
//                     <td
//                       className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                           "
//                     >
//                       {rows.room_no}
//                     </td>
//                     <td
//                       className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                           "
//                     >
//                       {rows.tenant_id}
//                     </td>
//                     <td
//                       className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                           "
//                     >
//                       {!isPaid ? (
//                         <button
//                           className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2"
//                           onClick={() => {
//                             setIsPaid(!isPaid);
//                           }}
//                         >
//                           Pay
//                         </button>
//                       ) : (
//                         <span className="px-6 py-2 border-2 border-transparent">
//                           Paid
//                         </span>
//                       )}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PayMaintenance;

// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function PayMaintenance(props) {
//   const maintenanceHeader = ["Name", "Tenant no", "Room no", "Status"];
//   const [isPaid, setIsPaid] = useState(false);
//   const [rows, setRows] = useState({});

//   const pay = async () => {
//     try {
//       const res = await axios.post(`${process.env.REACT_APP_SERVER}/dashboard/tenant`, {
//         userId: JSON.parse(window.localStorage.getItem("whom")).username,
//       });
//       const [result] = res.data || [];
//       if (result) {
//         setRows(result);
//         setIsPaid(result.stat === "paid");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     pay();
//   }, []);

//   useEffect(() => {
//     if (isPaid) {
//       axios
//         .post(`${process.env.REACT_APP_SERVER}/paymaintenance`, {
//           userId: JSON.parse(localStorage.getItem("whom")).username,
//           status: "Paid",
//         })
//         .then((res) => {
//           // Handle success
//           console.log(res);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [isPaid]);

//   return (
//     <section className="pr-5 px-10 py-20 w-screen">
//       <div className="container card overflow-hidden">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full px-4">
//             <div className="max-w-full overflow-x-auto">
//               <table className="table-auto w-full">
//                 <thead>
//                   <tr className="bg-blue-500 text-center">
//                     {maintenanceHeader.map((ele, index) => (
//                       <th
//                         key={index}
//                         className="
//                           w-1/6
//                           min-w-[160px]
//                           text-lg
//                           font-semibold
//                           text-white
//                           py-4
//                           lg:py-7       
//                           px-3
//                           lg:px-4
//                           border-l border-transparent
//                           "
//                       >
//                         {ele}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td
//                       className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                           "
//                     >
//                       {rows.name}
//                     </td>
//                     <td
//                       className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                           "
//                     >
//                       {rows.room_no}
//                     </td>
//                     <td
//                       className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                           "
//                     >
//                       {rows.tenant_id}
//                     </td>
//                     <td
//                       className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                           "
//                     >
//                       {!isPaid ? (
//                         <button
//                           className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2"
//                           onClick={() => {
//                             setIsPaid(!isPaid);
//                           }}
//                         >
//                           Pay
//                         </button>
//                       ) : (
//                         <span className="px-6 py-2 border-2 border-transparent">
//                           Paid
//                         </span>
//                       )}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PayMaintenance;

import axios from "axios";
import React, { useState, useEffect } from "react";

function PayFees(props) {
  const feeHeader = ["Name", "Tenant no", "Room no", "Status"];
  const [isPaid, setIsPaid] = useState(false);
  const [rows, setRows] = useState({});

  const PayFees = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER}/dashboard/tenant`, {
        userId: JSON.parse(localStorage.getItem("whom")).username,
      });
      const [result] = res.data || [];
      if (result) {
        setRows(result);
        setIsPaid(result.stat === "paid");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PayFees();
  }, []);

  useEffect(() => {
    if (isPaid) {
      axios
        .post(`${process.env.REACT_APP_SERVER}/payfees`, {
          userId: JSON.parse(localStorage.getItem("whom")).username,
          status: "Paid",
        })
        .then((res) => {
          // Handle success
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isPaid]);

  return (
    <section className="pr-5 px-10 py-20 w-screen">
      <div className="container card overflow-hidden">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-blue-500 text-center">
                    {feeHeader.map((ele, index) => (
                      <th
                        key={index}
                        className="
                          w-1/6
                          min-w-[160px]
                          text-lg
                          font-semibold
                          text-white
                          py-4
                          lg:py-7       
                          px-3
                          lg:px-4
                          border-l border-transparent
                          "
                      >
                        {ele}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="
                          text-center text-dark
                          font-medium
                          text-base
                          py-5
                          px-2
                          border-b border-l border-[#E8E8E8]
                          "
                    >
                      {rows.name}
                    </td>
                    <td
                      className="
                          text-center text-dark
                          font-medium
                          text-base
                          py-5
                          px-2
                          border-b border-l border-[#E8E8E8]
                          "
                    >
                      {rows.room_no}
                    </td>
                    <td
                      className="
                          text-center text-dark
                          font-medium
                          text-base
                          py-5
                          px-2
                          border-b border-l border-[#E8E8E8]
                          "
                    >
                      {rows.tenant_id}
                    </td>
                    <td
                      className="
                          text-center text-dark
                          font-medium
                          text-base
                          py-5
                          px-2
                          border-b border-l border-[#E8E8E8]
                          "
                    >
                      {!isPaid ? (
                        <button
                          className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2"
                          onClick={() => {
                            setIsPaid(!isPaid);
                          }}
                        >
                          Pay Fees
                        </button>
                      ) : (
                        <span className="px-6 py-2 border-2 border-transparent">
                          Paid
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PayFees;


