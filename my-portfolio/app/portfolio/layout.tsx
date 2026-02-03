import Footer from "../components/Footer/page";
import Navbar from "../components/Navbar/page";


export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
      <main>{children}</main>
     <Footer/>
    </>
  );
}
