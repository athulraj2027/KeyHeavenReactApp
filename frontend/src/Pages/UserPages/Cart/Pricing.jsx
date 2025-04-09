import React from "react";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <div className="sm:cols-span-1 m-3 sm:m-20">
      <div className="mt-4">
        <button className="bg-blue-600 text-white mb-3 p-3 rounded-md cursor-pointer">
          Clear Cart
        </button>
        <h1 className="text-xl sm:text-2xl mb-4">Pricing</h1>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="py-2">Cart Total</td>
              <td className="py-2 text-right font-medium">$0.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Tax</td>
              <td className="py-2 text-right font-medium">$0.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Shipping</td>
              <td className="py-2 text-right font-medium">$0.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Discount</td>
              <td className="py-2 text-right font-medium text-green-600">
                -$0.00
              </td>
            </tr>
            <tr>
              <td className="py-3 font-bold">Grand Total</td>
              <td className="py-3 text-right font-bold">$0.00</td>
            </tr>
          </tbody>
        </table>
        <Link to="/checkout">
          <button className="bg-blue-700 text-white p-3 rounded-md float-right cursor-pointer">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
