import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="mmin-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        {/* Body */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
