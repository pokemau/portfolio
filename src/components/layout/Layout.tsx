import { ReactNode } from "react";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
