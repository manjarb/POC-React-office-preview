import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Navbar";

export function PublicLayout() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
