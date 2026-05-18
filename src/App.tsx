 /**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';

import { Home } from './pages/Home.tsx';
import { Inventory } from './pages/Inventory.tsx';
import { CustomParts } from './pages/CustomParts.tsx';
import { Builds } from './pages/Builds.tsx';
import { Contact } from './pages/Contact.tsx';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-brand-black text-white">
        <Navbar />

        <main className="flex-grow pt-20">
          <Routes>
            {/* GIỚI THIỆU */}
            <Route path="/" element={<Home />} />

            {/* XE MÔ HÌNH */}
            <Route path="/model-cars" element={<Inventory />} />

            {/* LINH KIỆN CUSTOM */}
            <Route path="/custom-parts" element={<CustomParts />} />

            {/* XE CUSTOM */}
            <Route path="/custom-cars" element={<Builds />} />

            {/* LIÊN HỆ */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}