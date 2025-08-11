import React, { createContext, useState, useEffect } from "react";

// import data
import { roomData } from "../data";
import axios from "axios";

// export & create room context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);

  // amount person
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });

  const handleClick = (e) => {
    e.preventDefault();

    // loading data
    setLoading(true);

    // filter rooms based on total (person)
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });

    // delay loading data
    setTimeout(() => {
      setRooms(newRooms);

      setLoading(false);
    }, 3000);
  };
//   const fetchRooms = async () => {
//   setLoading(true);
//   try {
//     const res = await axios.get("http://localhost:5000/api/rooms");
//     console.log("Fetched rooms from MongoDB:", res.data); // ✅ ADD THIS
//     setRooms(res.data);
//     // setAllRooms(res.data);
//   } catch (err) {
//     console.error("Failed to fetch rooms:", err);
//   } finally {
//     setLoading(false);
//   }
// };

  return (
    <RoomContext.Provider
      value={{ adults, setAdults, kids, setKids, handleClick }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
