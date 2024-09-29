import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure you import the styles for the toast notifications

const Checkout = ({ total }) => {
  const [discountCode, setDiscountCode] = useState('');
  const [finalTotal, setFinalTotal] = useState(total);

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงใน total
  useEffect(() => {
    setFinalTotal(total); // รีเซ็ตยอดรวมสุดท้ายเมื่อ total เปลี่ยน
  }, [total]);

  const handleApplyDiscount = () => {
    let discountAmount = 0;

    if (discountCode === 'SAVE50') {
      discountAmount = total * 0.50; // 50% discount
    } else if (discountCode === 'SAVE20') {
      discountAmount = total * 0.20; // 20% discount
    }

    if (discountAmount > 0) {
      setFinalTotal(total - discountAmount);
      toast.success('Discount applied successfully!');
    } else {
      toast.error('Invalid coupon code');
    }
};

  return (
    <div className="mt-4">
      <ToastContainer /> {/* Place ToastContainer here to show notifications */}
      <h2 className="text-xl font-bold">Checkout</h2>
      <p>Total Price: ฿{total.toFixed(2)}</p>
      <p>Price after Discount: ฿{finalTotal.toFixed(2)}</p>

      <div className="mt-2">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Enter discount code"
          className="form-control w-50"
        />
        <button className="btn btn-primary mt-2" onClick={handleApplyDiscount}>
          Apply Coupon
        </button>
      </div>

      <p>Shipping Cost: ฿100</p>
      <p>Grand Total: ฿{(finalTotal + 100).toFixed(2)}</p>
      <p>Discount Code: SAVE50 </p>

    </div>
  );
};

export default Checkout;
