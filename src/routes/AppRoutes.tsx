import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home/Home';
import { Menu } from '@/pages/Menu/Menu';
import { Gallery } from '@/pages/Gallery/Gallery';
import { Location } from '@/pages/Location/Location';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='galeria' element={<Gallery />} />
        <Route path='ubicacion' element={<Location />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}