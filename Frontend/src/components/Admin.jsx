import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import AdminBookings from "./AdminBookings";
import AdminContacts from "./AdminContacts";

export default function AdminRooms() {
  const [activeTab, setActiveTab] = useState("rooms");
  const [rooms, setRooms] = useState([]);
  const [facilitiesList, setFacilitiesList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newRoom, setNewRoom] = useState({
    name: "",
    description: "",
    price: "",
    maxPerson: "",
    size: "",
    image: "",
    facilities: [],
  });

  // Fetch rooms and extract facilities
  const fetchRooms = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/rooms`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setRooms(data);

      // Extract unique facilities
      const allFacilities = [];
      data.forEach((room) => {
        if (Array.isArray(room.facilities)) {
          room.facilities.forEach((f) => {
            if (!allFacilities.some((af) => af.name === f.name)) {
              allFacilities.push(f);
            }
          });
        }
      });
      setFacilitiesList(allFacilities);
    } catch (err) {
      console.error("Error fetching rooms:", err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // Delete room
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this room?")) return;
    try {
      await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/rooms/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setRooms((prev) => prev.filter((room) => room._id !== id));
    } catch (err) {
      console.error("Error deleting room:", err);
    }
  };

  // Add or update room
  const handleSaveRoom = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // UPDATE
        await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/rooms/${editingId}`, {
          method: "PUT",
          headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newRoom),
        });
      } else {
        // CREATE
        await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/rooms`, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newRoom),
        });
      }

      setShowForm(false);
      setIsEditing(false);
      setEditingId(null);
      resetForm();
      fetchRooms();
    } catch (err) {
      console.error("Error saving room:", err);
    }
  };

  // Select/Deselect facility
  const handleFacilityChange = (facility) => {
    setNewRoom((prev) => {
      const exists = prev.facilities.some((f) => f.name === facility.name);
      return {
        ...prev,
        facilities: exists
          ? prev.facilities.filter((f) => f.name !== facility.name)
          : [...prev.facilities, facility],
      };
    });
  };

  const handleEdit = (room) => {
    setIsEditing(true);
    setEditingId(room._id);
    setNewRoom({
      name: room.name,
      description: room.description,
      price: room.price,
      maxPerson: room.maxPerson,
      size: room.size,
      image: room.image,
      facilities: room.facilities || [],
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setNewRoom({
      name: "",
      description: "",
      price: "",
      maxPerson: "",
      size: "",
      image: "",
      facilities: [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-[150px]">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Admin Panel</h1>
      
      {/* Tab Navigation */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("rooms")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "rooms"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <FaIcons.FaBed className="inline mr-2" />
            Manage Rooms
          </button>
          <button
            onClick={() => setActiveTab("bookings")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "bookings"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <FaIcons.FaCalendarCheck className="inline mr-2" />
            Manage Bookings
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "contacts"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <FaIcons.FaEnvelope className="inline mr-2" />
            Contact Submissions
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "rooms" ? (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-700">Room Management</h2>
            <button
              onClick={() => {
                resetForm();
                setIsEditing(false);
                setShowForm(true);
              }}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-colors"
            >
              <FaIcons.FaPlus className="inline mr-2" />
              Add New Room
            </button>
          </div>

          {/* FORM MODAL */}
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
              <div className="w-full max-w-lg rounded bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-xl font-bold">
                  {isEditing ? "Edit Room" : "Create New Room"}
                </h2>
                <form onSubmit={handleSaveRoom} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    value={newRoom.name}
                    onChange={(e) =>
                      setNewRoom({ ...newRoom, name: e.target.value })
                    }
                    className="w-full rounded border p-2"
                    required
                  />
                  <textarea
                    placeholder="Description"
                    value={newRoom.description}
                    onChange={(e) =>
                      setNewRoom({ ...newRoom, description: e.target.value })
                    }
                    className="w-full rounded border p-2"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={newRoom.price}
                    onChange={(e) =>
                      setNewRoom({ ...newRoom, price: e.target.value })
                    }
                    className="w-full rounded border p-2"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Max Person"
                    value={newRoom.maxPerson}
                    onChange={(e) =>
                      setNewRoom({ ...newRoom, maxPerson: e.target.value })
                    }
                    className="w-full rounded border p-2"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Size"
                    value={newRoom.size}
                    onChange={(e) =>
                      setNewRoom({ ...newRoom, size: e.target.value })
                    }
                    className="w-full rounded border p-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Image Filename (e.g. 1.png)"
                    value={newRoom.image}
                    onChange={(e) =>
                      setNewRoom({ ...newRoom, image: e.target.value })
                    }
                    className="w-full rounded border p-2"
                    required
                  />

                  <div>
                    <h3 className="font-semibold mb-2">Select Facilities</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {facilitiesList.map((facility, idx) => {
                        const Icon =
                          FaIcons[facility.icon] || FaIcons.FaQuestion;
                        return (
                          <label
                            key={idx}
                            className="flex items-center space-x-2 border p-2 rounded cursor-pointer hover:bg-gray-100"
                          >
                            <input
                              type="checkbox"
                              checked={newRoom.facilities.some(
                                (f) => f.name === facility.name
                              )}
                              onChange={() => handleFacilityChange(facility)}
                            />
                            <Icon />
                            <span>{facility.name}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setIsEditing(false);
                      }}
                      className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                      {isEditing ? "Update Room" : "Save Room"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* ROOMS TABLE */}
          <div className="overflow-x-auto rounded-lg bg-white shadow-md">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Image</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Max Person</th>
                  <th className="border p-2">Size</th>
                  <th className="border p-2">Facilities</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room._id} className="hover:bg-gray-50">
                    <td className="border p-2">
                      <img
                        src={`/src/assets/images/rooms/${room.image}`}
                        alt={room.name}
                        className="h-16 w-16 rounded object-cover"
                      />
                    </td>
                    <td className="border p-2">{room.name}</td>
                    <td className="border p-2">{room.description}</td>
                    <td className="border p-2">${room.price}</td>
                    <td className="border p-2">{room.maxPerson}</td>
                    <td className="border p-2">{room.size} m²</td>
                    <td className="border p-2">
                      {room.facilities?.map((f, i) => {
                        const Icon = FaIcons[f.icon] || FaIcons.FaQuestion;
                        return (
                          <div
                            key={i}
                            className="flex items-center space-x-1 text-sm"
                          >
                            <Icon /> <span>{f.name}</span>
                          </div>
                        );
                      })}
                    </td>
                    <td className="space-x-2 border p-2">
                      <button
                        onClick={() => handleEdit(room)}
                        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(room._id)}
                        className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : activeTab === "bookings" ? (
        <AdminBookings />
      ) : (
        <AdminContacts />
      )}
    </div>
  );
}
