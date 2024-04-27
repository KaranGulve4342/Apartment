import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const tenantIdEl = useRef(null);
  const nameEl = useRef(null);
  const dobEl = useRef(null);
  const roomEl = useRef(null);
  const ageEl = useRef(null);
  const startDateEl = useRef(null);
  const endDateEl = useRef(null);
  const rentEl = useRef(null);
  const depositEl = useRef(null);

  const [tenantId, setTenantId] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [roomno, setRoomno] = useState(""); // Changed from roomNo to roomno to match backend
  const [age, setAge] = useState("");
  const [startingDate, setStartingDate] = useState(""); // Changed from startDate to startingDate to match backend
  const [endingDate, setEndingDate] = useState(""); // Changed from endDate to endingDate to match backend
  const [rent, setRent] = useState("");
  const [deposit, setDeposit] = useState("");



  const registerTenant = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER}/updateroomstatus`, {
        roomno: roomno,
        status: "occupied",
        endingDate: endingDate,
      });
      const res = await axios.post(`${process.env.REACT_APP_SERVER}/createtenant`, {
        tenantId: tenantId,
        name: name,
        dob: dob,
        roomno: roomno, // Changed from roomNo to roomno to match backend
        age: age,
        startingDate: startingDate, // Changed from startDate to startingDate to match backend
        endingDate: endingDate, // Changed from endDate to endingDate to match backend
        rent: rent,
        deposit: deposit,
      });
      if (res.status === 200) {
        toast.success("Tenant Registered");
        // Clear input fields
        tenantIdEl.current.value = "";
        nameEl.current.value = "";
        dobEl.current.value = "";
        roomEl.current.value = "";
        ageEl.current.value = "";
        startDateEl.current.value = "";
        endDateEl.current.value = "";
        rentEl.current.value = "";
        depositEl.current.value = "";

        
      } else {
        toast.error("Error: " + res.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerTenant();
  };

  return (
    <div className="mx-auto w-full max-w-[550px] my-5 p-5">
      <form onSubmit={handleSubmit} action="" method="POST">
        <div className="mb-5">
          <label htmlFor="tenant-id" className="mb-3 block text-base font-medium text-[#07074D]">
            Tenant ID
          </label>
          <input
            type="text"
            ref={tenantIdEl}
            name="tenant-id"
            id="tenant-id"
            value={tenantId}
            onChange={() => setTenantId(tenantIdEl.current.value)}
            placeholder="Tenant ID"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
            Full Name
          </label>
          <input
            type="text"
            ref={nameEl}
            name="name"
            id="name"
            value={name}
            placeholder="Full Name"
            onChange={() => setName(nameEl.current.value)}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5 flex gap-5 flex-wrap">
          <div>
            <label htmlFor="dob" className="mb-3 block text-base font-medium text-[#07074D]">
              Date of Birth
            </label>
            <input
              type="date"
              ref={dobEl}
              name="dob"
              id="dob"
              value={dob}
              onChange={() => setDob(dobEl.current.value)}
              placeholder="Date of Birth"
              className="w-60 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <label htmlFor="room-no" className="mb-3 block text-base font-medium text-[#07074D]">
              Room No.
            </label>
            <input
              type="text"
              ref={roomEl}
              name="room-no"
              id="room-no"
              value={roomno}
              onChange={() => setRoomno(roomEl.current.value)}
              placeholder="Room No."
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="mb-5 flex gap-5 flex-wrap">
          <div>
            <label htmlFor="age" className="mb-3 block text-base font-medium text-[#07074D]">
              Age
            </label>
            <input
              type="number"
              ref={ageEl}
              name="age"
              id="age"
              value={age}
              onChange={() => setAge(ageEl.current.value)}
              placeholder="Age"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <label htmlFor="start-date" className="mb-3 block text-base font-medium text-[#07074D]">
              Starting Date
            </label>
            <input
              type="date"
              ref={startDateEl}
              name="start-date"
              id="start-date"
              value={startingDate}
              onChange={() => setStartingDate(startDateEl.current.value)}
              placeholder="Starting Date"
              className="w-60 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <label htmlFor="end-date" className="mb-3 block text-base font-medium text-[#07074D]">
              Ending Date
            </label>
            <input
              type="date"
              ref={endDateEl}
              name="end-date"
              id="end-date"
              value={endingDate}
              onChange={() => setEndingDate(endDateEl.current.value)}
              placeholder="Ending Date"
              className="w-60 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="mb-5 flex gap-5 flex-wrap">
          <div>
            <label htmlFor="rent" className="mb-3 block text-base font-medium text-[#07074D]">
              Rent
            </label>
            <input
              type="number"
              ref={rentEl}
              name="rent"
              id="rent"
              value={rent}
              onChange={() => setRent(rentEl.current.value)}
              placeholder="Rent"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <label htmlFor="deposit" className="mb-3 block text-base font-medium text-[#07074D]">
              Deposit
            </label>
            <input
              type="number"
              ref={depositEl}
              name="deposit"
              id="deposit"
              value={deposit}
              onChange={() => setDeposit(depositEl.current.value)}
              placeholder="Deposit"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="flex w-full">
          <button className=" mx-auto hover:shadow-form  py-3 px-8 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
