import React from 'react';

const Payment = () => {
  return (
    <div className="min-h-screen p-8 bg-slate-300">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white shadow-lg rounded-2xl">
        <div className="p-6 text-white bg-black rounded-xl">
          <div className="text-xl font-semibold">Total Balance</div>
          <div className="text-3xl font-bold">Rp.10.999.989</div>
          <div className="text-green-500">+ Rp.750.000 Today, Mon 27</div>
          <div className="flex items-center justify-between p-6 text-white bg-gray-800 rounded-lg">
          <div className="text-lg">Ini apa ya</div>
          <div className="text-sm">..</div>
        </div>
        </div>
        <div className="p-6">
          <div className="mb-4 text-lg font-semibold">Activity History</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead className='bg-blue-200'>
                <tr>
                  <th className="px-4 py-4">Type</th>
                  <th className="px-4 py-4">Date</th>
                  <th className="px-4 py-4">Transaction ID</th>
                  <th className="px-4 py-4">Amount</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Expect Payment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {type: 'Paypal', date: 'May 28, 2022', id: 'ID132321S', amount: '$830.00', status: 'Delivered', expect: '10 June, 2022', statusColor: 'text-green-500'},
                  {type: 'Wise', date: 'May 28, 2022', id: 'ID132321S', amount: '$830.00', status: 'On Hold', expect: '10 June, 2022', statusColor: 'text-red-500'},
                  {type: 'Bangjago', date: 'May 28, 2022', id: 'ID132321S', amount: '$830.00', status: 'In Progress', expect: '10 June, 2022', statusColor: 'text-blue-500'}
                ].map((activity, index) => (
                  <tr key={index}>
                    <td className="px-4 py-5 border">{activity.type}</td>
                    <td className="px-4 py-5 border">{activity.date}</td>
                    <td className="px-4 py-5 border">{activity.id}</td>
                    <td className="px-4 py-5 border">{activity.amount}</td>
                    <td>

                        
                    </td>
                    <td className="px-4 py-5 border">{activity.expect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
