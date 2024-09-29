// App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout'; // นำเข้า Checkout
import './App.css';




const App = () => {
  // State สำหรับรายการสินค้า (หมวดหมู่เสื้อผ้า)
  

  const [products] = useState([
    {
      id: 1,
      name: 'เสื้อ SGUB X ฟุตบอลวินเทจครอบรอบ 10 ปี สีขาว',
      price: 350,
      description: (
        <ul>
          <li>เนื้อผ้าคุณภาพสูง ใส่สบาย</li>
          <li>ขนาด: L</li>
          <li>Sgub เสื้อ SGUB X ฟุตบอลวินเทจ สีขาว SKU : 2310-FVWH</li>
        </ul>
      ),
      image: '/images/product11.jpg',
    },
    {
      id: 2,
      name: 'Sgub เสื้อ SGUB X ฟุตบอลวินเทจ สีน้ำเงิน',
      price: 790,
      description: (
        <ul>
          <li>ทรงพอดีตัว ใส่ได้ทุกโอกาส</li>
          <li>ขนาด: L </li>
          <li>Sgub เสื้อ SGUB X ฟุตบอลวินเทจ สีน้ำเงิน SKU : 2401-FVBU</li>
        </ul>
      ),
      image: '/images/product12.jpg',
    },
    {
      id: 3,
      name: 'Sgub เสื้อ SGUB X ฟุตบอลวินเทจ สีดำ',
      price: 1200,
      description: (
        <ul>
          <li>เหมาะสำหรับหน้าหนาว</li>
          <li>ขนาด:  M,L </li>
          <li>Sgub เสื้อ SGUB X ฟุตบอลวินเทจ สีดำ SKU : 2310-FVBK</li>
        </ul>
      ),
      image: '/images/product13.jpg',
    },
    {
      id: 4,
      name: 'SGUB X SOCCERGATE Football Jersey Euro Vintage Italy',
      price: 600,
      description: (
        <ul>
          <li>ใส่สบาย ระบายอากาศดี</li>
          <li>ขนาด: M </li>
          <li>ดีไซน์แบบร่วมสมัยกับ 𝗟𝗢𝗚𝗢 ฟอนต์ไทย "ซอคเกอร์เกต"ที่แฝงไปด้วยตัวตนความเป็นไทยมาไว้ในเสื้อ 𝗝𝗲𝗿𝘀𝗲𝘆 ทรง 𝗢𝘃𝗲𝗿𝘀𝗶𝘇𝗲𝗱 ทีมชาติต่าง ๆ ในศึกฟุตบอลชิงแชมป์แห่งชาติยุโรป ซึ่งได้รับแรงบันดาลใจ มาจากชุดแข่งฟุตบอลในยุค 𝟵𝟬 ที่ให้กลิ่นอายความวินเทจย้อนยุคแต่อัดแน่นไปด้วยคุณภาพ

</li>
        </ul>
      ),
      image: '/images/product14.jpg',
    },
    {
      id: 5,
      name: 'SGUB X SOCCERGATE Football Jersey Euro Vintage Germany',
      price: 450,
      description: (
        <ul>
          <li>เหมาะสำหรับทำงานและใส่ลำลอง</li>
          <li>ขนาด:  XL</li>
          <li>ดีไซน์แบบร่วมสมัยกับ 𝗟𝗢𝗚𝗢 ฟอนต์ไทย "ซอคเกอร์เกต"ที่แฝงไปด้วยตัวตนความเป็นไทยมาไว้ในเสื้อ 𝗝𝗲𝗿𝘀𝗲𝘆 ทรง 𝗢𝘃𝗲𝗿𝘀𝗶𝘇𝗲𝗱 ทีมชาติต่าง ๆ ในศึกฟุตบอลชิงแชมป์แห่งชาติยุโรป ซึ่งได้รับแรงบันดาลใจ มาจากชุดแข่งฟุตบอลในยุค 𝟵𝟬 ที่ให้กลิ่นอายความวินเทจย้อนยุคแต่อัดแน่นไปด้วยคุณภาพ  </li>
        </ul>
      ),
      image: '/images/product15.jpg',
    },
    {
      id: 6,
      name: 'SGUB X SOCCERGATE Football Jersey Euro Vintage Netherland',
      price: 900,
      description: (
        <ul>
          <li>ดีไซน์ทันสมัย ใส่สบาย</li>
          <li>ขนาด: L </li>
          <li>ดีไซน์แบบร่วมสมัยกับ 𝗟𝗢𝗚𝗢 ฟอนต์ไทย "ซอคเกอร์เกต"ที่แฝงไปด้วยตัวตนความเป็นไทยมาไว้ในเสื้อ 𝗝𝗲𝗿𝘀𝗲𝘆 ทรง 𝗢𝘃𝗲𝗿𝘀𝗶𝘇𝗲𝗱 ทีมชาติต่าง ๆ ในศึกฟุตบอลชิงแชมป์แห่งชาติยุโรป ซึ่งได้รับแรงบันดาลใจ มาจากชุดแข่งฟุตบอลในยุค 𝟵𝟬 ที่ให้กลิ่นอายความวินเทจย้อนยุคแต่อัดแน่นไปด้วยคุณภาพ  </li>
        </ul>
      ),
      image: '/images/product16.jpg',
    },
    {
      id: 7,
      name: 'เสื้อแจ็คเก็ต SoccerGate MM (MonoMatch) สีดำ',
      price: 500,
      description: (
        <ul>
          <li>กันน้ำ 100%</li>
          <li>ขนาด: Free Size</li>
          <li>เสื้อแจ็คเก็ต SoccerGate MM (MonoMatch) ชุดสีเบสิค คุมโทน สามารถจับคู่กันได้หลาย LOOK 
LOGO SoccerGate ผ้า 100% Polyester DRY-FLOW นวัตกรรมที่ช่วยให้การระบายอากาศได้ดีทำให้แห้งไวสวมใส่ได้
ตลอดทั้งวันตัวผ้าคงรูปทรงไม่หด ไม่ย้วย ไม่ยับ และมีความนุ่มฟูรู้สึกสบายเนียนไปกับผิวผ้าน้ำหนักเบาและมีความ
ยืดหยุ่นสูงสวมใส่ได้ในทุกโอกาส</li>
        </ul>
      ),
      image: '/images/product17.jpg',
    },
    {
      id: 8,
      name: 'กางเกงขาสั้น SoccerGate MM (MonoMatch) สีดำ',
      price: 300,
      description: (
        <ul>
          <li>ใส่สบาย เหมาะสำหรับหน้าร้อน</li>
          <li>ขนาด:Free Size</li>
          <li>กางเกงขาสั้น SoccerGate MM (MonoMatch) ชุดสีเบสิคคุมโทนสามารถจับคู่กันได้หลาย LOOK 
LOGO SoccerGate กางเกงออกแบบกระเป๋าหลังเป็นพิเศษให้ชิดตะเข็บข้างเพื่อความสะดวกในการนั่งจะไม่ทับสิ่งของ
ที่พกไว้ด้านหลังและเพิ่มซิปเพื่อป้องกันการตกหล่น ตัวผ้าผลิตจาก 100% Polyester DRY-FLOW ซึมซับเหงื่อพร้อม
ระบายอากาศได้ดี ทำให้แห้งไวสวมใส่ได้ตลอดทั้งวันตัวผ้าคงรูปทรงไม่หด ไม่ย้วย ไม่ยับ และมีความนุ่มฟูรู้สึกสบาย
เนียนไปกับผิวผ้าน้ำหนักเบาและมีความยืดหยุ่นสูงสวมใส่ได้ในทุกโอกาส</li>
        </ul>
      ),
      image: '/images/product18.jpg',
    },
    {
      id: 9,
      name: 'เสื้อแจ็คเก็ต SoccerGate MM (MonoMatch) สีเทา',
      price: 2500,
      description: (
        <ul>
       
          <li>ขนาด: S, M, L, XL</li>
          <li>เสื้อแจ็คเก็ต SoccerGate MM (MonoMatch) ชุดสีเบสิค คุมโทน สามารถจับคู่กันได้หลาย LOOK 
LOGO SoccerGate ผ้า 100% Polyester DRY-FLOW นวัตกรรมที่ช่วยให้การระบายอากาศได้ดีทำให้แห้งไวสวมใส่ได้
ตลอดทั้งวันตัวผ้าคงรูปทรงไม่หด ไม่ย้วย ไม่ยับ และมีความนุ่มฟูรู้สึกสบายเนียนไปกับผิวผ้าน้ำหนักเบาและมีความ
ยืดหยุ่นสูงสวมใส่ได้ในทุกโอกาส</li>
        </ul>
      ),
      image: '/images/product19.jpg',
    },
    {
      id: 10,
      name: 'กางเกงขายาว SoccerGate MM (MonoMatch) สีเทา',
      price: 1200,
      description: (
        <ul>
          <li>ใส่ได้ทุกโอกาส สวมใส่สบาย</li>
          <li>ขนาด:Free Size </li>
          <li>22% off
0 Reviews
กางเกงขายาว SoccerGate MM (MonoMatch) สีเทา
มีสินค้า
690.00฿890.00฿
กางเกงขายาว SoccerGate MM (MonoMatch) ชุดสีเบสิคคุมโทนสามารถจับคู่กันได้หลาย LOOK 
LOGO SoccerGate กางเกงออกแบบกระเป๋าหลังเป็นพิเศษให้ชิดตะเข็บข้างเพื่อความสะดวกในการนั่งจะไม่ทับสิ่งของ
ที่พกไว้ด้านหลังและเพิ่มซิปเพื่อป้องกันการตกหล่น ตัวผ้าผลิตจาก 100% Polyester DRY-FLOW ซึมซับเหงื่อพร้อม
ระบายอากาศได้ดี ทำให้แห้งไวสวมใส่ได้ตลอดทั้งวันตัวผ้าคงรูปทรงไม่หด ไม่ย้วย ไม่ยับ และมีความนุ่มฟูรู้สึกสบาย
เนียนไปกับผิวผ้าน้ำหนักเบาและมีความยืดหยุ่นสูงสวมใส่ได้ในทุกโอกาส</li>
        </ul>
      ),
      image: '/images/product20.jpg',
    },
  ]);

  // State สำหรับตะกร้าสินค้า
  const [cartItems, setCartItems] = useState([]);

  // ฟังก์ชันเพิ่มสินค้าไปยังตะกร้า
  const handleAddToCart = (product) => {
    const existItem = cartItems.find((item) => item.id === product.id);
    if (existItem) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id 
          ? { ...existItem, quantity: existItem.quantity + 1 } 
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // ฟังก์ชันลบสินค้าออกจากตะกร้า
  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  // ฟังก์ชันปรับปรุงจำนวนสินค้าในตะกร้า
  const handleUpdateQuantity = (product, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(product);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: newQuantity } 
            : item
        )
      );
    }
  };
  const [view, setView] = useState('products');

  return (
    <div className="App">
      <nav className="menu">
        <ul>
          <li><button onClick={() => setView('products')}>Products</button></li>
          <li><button onClick={() => setView('cart')}>Cart</button></li>
          <li><button onClick={() => setView('checkout')}>Checkout</button></li>
        </ul>
      </nav>

      <div className="container mx-auto">
        {view === 'products' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">NIceshop Store</h1>
            <ProductList products={products} onAddToCart={handleAddToCart} />
          </div>
        )}

        {(view === 'cart' || view === 'checkout') && (
          <div>

            <ShoppingCart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
            {cartItems.length > 0 && (
              <div>
               
                <Checkout
                  total={cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;