import { Link, Route, Routes } from "react-router-dom";
import FormReactYup from "./FormReactYup";
import HookForm from "./HookForm";

function Header() {
  return (
    <>
    <div className="header">
        <ul>
          <li>
            <Link to="/">React Formik</Link>
          </li>
          <li>
            <Link to="/hookForm">React Hook Form</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<FormReactYup />} />
        <Route path="/hookForm" element={<HookForm />} />
      </Routes>
    </>
  );
}

export default Header;
