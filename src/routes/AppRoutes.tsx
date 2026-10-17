import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home/Home';
import { Menu } from '@/pages/Menu/Menu';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='menu' element={<Menu/>} />
        <Route path="*" element={<Home/>} />
      </Route>
    </Routes>
  );
}