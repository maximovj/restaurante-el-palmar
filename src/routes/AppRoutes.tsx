import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<h1>Hola mundo</h1>} />
        <Route path="*" element={<h1>Hola mundo (*)</h1>} />
      </Route>
    </Routes>
  );
}