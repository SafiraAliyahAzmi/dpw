import React, { useState } from 'react';

const Car = () => {
  const [cars, setCars] = useState([
    { no: 1, merk: 'Toyota', brand: 'Camry', status: 'Available', price: 'Rp.500000', image: '' },
    { no: 2, merk: 'Honda', brand: 'Civic', status: 'Rented', price: 'Rp.1000000', image: '' },
    { no: 3, merk: 'Ford', brand: 'Mustang', status: 'Available', price: 'Rp.85000', image: '' },
  ]);

  return (
    <div className="min-h-screen p-8 bg-slate-300">
      <h2 className="mb-4 text-xl font-semibold">Available Cars </h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full border-collapse bg-slate-100">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">No</th>
              <th className="px-4 py-2 border-b">Merk</th>
              <th className="px-4 py-2 border-b">Brand</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Images</th>
              <th className="px-4 py-2 border-b border-r">Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-center border-b">{car.no}</td>
                <td className="px-4 py-2 text-center border-b">{car.merk}</td>
                <td className="px-4 py-2 text-center border-b">{car.brand}</td>
                <td className="px-4 py-2 text-center border-b">{car.status}</td>
                <td className="px-4 py-2 text-center border-b">{car.price}</td>
                <td className="px-4 py-2 text-center border-b">
                </td>
                <td className="px-4 py-2 text-center border-b border-r">
                  <button className="px-2 text-blue-500 hover:underline">Edit</button>
                  <button className="px-2 text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Car;
