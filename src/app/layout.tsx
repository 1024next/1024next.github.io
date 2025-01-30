// /app/layout.js
import React from 'react';
import Navbar from '@/components/Navbar/index';
import Footer from '@/components/Footer/index';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
