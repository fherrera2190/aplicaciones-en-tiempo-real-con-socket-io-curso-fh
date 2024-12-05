import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainLayout } from "../layout/MainLayout";
import { CreateTIcket, Desktop, SignIn, Line } from "../pages";


export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<SignIn />} />
          <Route path="/line" element={<Line />} />
          <Route path="/create" element={<CreateTIcket />} />
          <Route path="/desktop" element={<Desktop />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
