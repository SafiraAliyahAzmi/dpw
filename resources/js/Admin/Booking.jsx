import React from 'react';

const Booking = () => {
  const bookings = [
    { no: 1, id: '5D869F5L2', customerName: 'Safira ALiyah', pickupDropoff: 'Cimahi - Uber', dateTime: '15 Sept, 8:30AM', status: 'Confirmed' },
    { no: 2, id: '3R7G8T9K1', customerName: 'Rhea Jaggaditha', pickupDropoff: 'Uber - Cimahi', dateTime: '20 Oct, 2:45PM', status: 'Cancelled' },
    { no: 3, id: '1A2B3C4D5', customerName: 'Romeo Juliet', pickupDropoff: 'Cicaheum - Ciroyom', dateTime: '5 Dec, 4:00PM', status: 'Confirmed' }
  ];

  return (
    <div className="min-h-screen p-8 bg-slate-300">
        <h2 className="mb-4 text-xl font-semibold">Recent Bookings</h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full border-collapse bg-slate-100">
          <thead>
            <tr>
              <th className="px-2 py-2 border-b">No</th>
              <th className="px-2 py-2 border-b">ID</th>
              <th className="px-2 py-2 border-b">Name</th>
              <th className="px-2 py-2 border-b">Pick up & Drop off</th>
              <th className="px-2 py-2 border-b">Date & Time</th>
              <th className="px-2 py-2 border-b">Status</th>
              <th className="px-2 py-2 border-b border-r">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="border-b">
                <td className="px-2 py-2 text-center border-b">{booking.no}</td>
                <td className="px-2 py-2 text-center border-b">{booking.id}</td>
                <td className="px-2 py-2 text-center border-b">{booking.customerName}</td>
                <td className="px-2 py-2 text-center border-b">{booking.pickupDropoff}</td>
                <td className="px-2 py-2 text-center border-b">{booking.dateTime}</td>
                <td className="px-2 py-2 border-b border-gray-200">
                    
                {/* TOMBOL HARUSNYA */}
                <button className="px-2 text-green-500 hover:underline">Confired</button>
                <button className="px-2 text-red-500 hover:underline">Canceled</button>
                </td>

                <td className="px-2 py-2 text-center border-b border-r">
                  <button className="px-2 text-blue-500 hover:underline">Detail</button>
                  <button className="px-2 text-blue-500 hover:underline">Assign</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
