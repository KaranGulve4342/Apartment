// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import { Link } from "react-router-dom";

// function RoomStatus() {
//   const roomStatusHeader = [
//     "Room No",
//     "Type",
//     "Floor No",
//     "Register No",
//     "Block No",
//     "Parking Slot",
//     "Rent",
//     "Owner Name",
//     "Action",
//   ];
//   const [roomStatusRows, setRoomStatusRows] = useState([]);

//   const getRoomStatusRows = async () => {
//     try {
//       const res = await axios.get(`${process.env.REACT_APP_SERVER}/roomstatus`);
//       console.log(res.data); // Log the response data
//       setRoomStatusRows(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleBookRoom = async (roomno) => {
//     try {
//       // Update room status to "occupied"
//       await axios.post(`${process.env.REACT_APP_SERVER}/updateroomstatus`, {
//         roomno: roomno,
//         status: "occupied",
//       });

//       // Navigate to the create tenant page
//       window.location.href = "http://localhost:3000/createtenant";
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getRoomStatusRows();
//   }, []);

//   return (
//     <section className="pr-5 px-10 py-20">
//       <div className="container card overflow-hidden">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full px-4">
//             <div className="max-w-full overflow-x-auto">
//               <table className="table-auto w-full">
//                 <thead>
//                   <tr className="bg-blue-500 text-center">
//                     {roomStatusHeader.map((ele, index) => (
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
//                         "
//                       >
//                         {ele}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {roomStatusRows.map((ele, index) => (
//                     <tr key={index}>
//                       <td
//                         className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                         "
//                       >
//                         {ele.room_no}
//                       </td>
//                       <td
//                         className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                         "
//                       >
//                         {ele.type}
//                       </td>
//                       <td
//                         className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                         "
//                       >
//                         {ele.floor}
//                       </td>
//                       <td
//                         className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                         "
//                       >
//                         {ele.reg_no}
//                       </td>
//                       <td
//                         className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                         "
//                       >
//                         {ele.block_no}
//                       </td>
//                       <td
//                         className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                         "
//                       >
//                         {ele.parking_slot}
//                       </td>
//                       <td
//                         className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                         "
//                       >
//                         {ele.rent}
//                       </td>
//                       <td
//                         className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                         "
//                       >
//                         {ele.owner_name && ele.owner_name !== "" ? ele.owner_name : "N/A"}
//                       </td>
//                       {/* <td
//                         className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                         "
//                       >
//                         {ele.occupancy_status === "empty" ? (
//                           <Link
//                             to={`/createtenant`}
//                             className="text-white bg-green-500 px-3 py-1 rounded-full hover:bg-green-600"
//                           >
//                             Book
//                           </Link>
//                         ) : (
//                           <div className="text-red-500">Occupied</div>
//                         )}
//                       </td> */}
//                       <td
//                         className="
//                           text-center text-dark
//                           font-medium
//                           text-base
//                           py-5
//                           px-2
//                           border-b border-l border-[#E8E8E8]
//                         "
//                       >
//                         {ele.occupancy_status === "empty" ? (
//                           <button
//                             onClick={() => handleBookRoom(ele.room_no)}
//                             className="text-white bg-green-500 px-3 py-1 rounded-full hover:bg-green-600"
//                           >
//                             Book
//                           </button>
//                         ) : (
//                           <div className="text-red-500">Occupied</div>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RoomStatus;


import React, { useEffect, useState } from "react";
import axios from "axios";

function RoomStatus() {
  const roomStatusHeader = [
    "Room No",
    "Type",
    "Floor No",
    "Register No",
    "Block No",
    "Parking Slot",
    "Rent",
    "Owner Name",
    "Occupied Till",
    "Action",
  ];
  const [roomStatusRows, setRoomStatusRows] = useState([]);

  const getRoomStatusRows = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER}/roomstatus`);
      console.log(res.data); // Log the response data
      setRoomStatusRows(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookRoom = async (roomno) => {
    try {
      // Update room status to "occupied"
      // await axios.post(`${process.env.REACT_APP_SERVER}/updateroomstatus`, {
      //   roomno: roomno,
      //   status: "occupied",
      // });

      // Navigate to the create tenant page
      window.location.href = "http://localhost:3000/createtenant";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomStatusRows();
  }, []);

  return (
    <section className="pr-5 px-10 py-20">
      <div className="container card overflow-hidden">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-blue-500 text-center">
                    {roomStatusHeader.map((ele, index) => (
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
                  {roomStatusRows.map((ele, index) => (
                    <tr key={index}>
                      <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.room_no}
                      </td>
                      <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.type}
                      </td>
                      <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.floor}
                      </td>
                      <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.reg_no}
                      </td>
                      <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.block_no}
                      </td>
                      <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.parking_slot}
                      </td>
                      <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.rent}
                      </td>
                      <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.owner_name && ele.owner_name !== "" ? ele.owner_name : "No-owner"}
                      </td>
                      {/* <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.occupied_till ? ele.occupied_till : "N/A"}
                      </td> */}
                      <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.occupied_till ? new Date(ele.occupied_till).toLocaleDateString() : "Not-Occupied"}
                      </td>
                      <td className="text-center text-dark font-medium text-base py-5 px-2 border-b border-l border-[#E8E8E8]">
                        {ele.occupancy_status === "empty" ? (
                          <button
                            onClick={() => handleBookRoom(ele.room_no)}
                            className="text-white bg-green-500 px-3 py-1 rounded-full hover:bg-green-600"
                          >
                            Book
                          </button>
                        ) : (
                          <div className="text-red-500">Occupied</div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomStatus;
