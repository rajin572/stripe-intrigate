import TopNav from "@/components/shared/TopNav";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
