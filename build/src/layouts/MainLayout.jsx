import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default MainLayout;
