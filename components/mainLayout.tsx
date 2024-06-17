import IMainLayout from "../shared/interfaces/IMainLayout";
import Footer from "./footer";
import Navbar from "./navBar";

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div className="mainLayout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
