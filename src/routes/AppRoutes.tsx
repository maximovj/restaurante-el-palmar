import { Routes, Route, Outlet } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route index element={<h1>Hola mundo</h1>} />
        <Route path="*" element={<h1>Hola mundo (*)</h1>} />
      </Route>
    </Routes>
  );
}