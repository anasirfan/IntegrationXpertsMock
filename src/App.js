import React from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { SidebarProvider } from './context/SidebarContext';

const App = () => {
  return (
    <SidebarProvider>
      <div className="flex bg-[#F8F9FA] min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Dashboard />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;
