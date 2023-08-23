import React from "react";

export const metadata = {
  title: "Ausbakelia || Orders",
  description: "Orders page",
};

const OrdersPage = () => {
  return (
    <div className="p-2 md:p-8 h-screen md:h-[60vh] overflow-y-scroll">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-red-100">
            <td className="hidden md:block">12345</td>
            <td>22/05/2023</td>
            <td>$240</td>
            <td className="hidden md:block">Flat White (2)</td>
            <td>Preparing</td>
          </tr>
          <tr>
            <td className="hidden md:block">12345</td>
            <td>22/05/2023</td>
            <td>$240</td>
            <td className="hidden md:block">Flat White (2)</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td className="hidden md:block">12345</td>
            <td>22/05/2023</td>
            <td>$240</td>
            <td className="hidden md:block">Flat White (2)</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
