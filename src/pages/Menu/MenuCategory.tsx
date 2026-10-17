import type { MenuCategory } from '@/types';
import { MenuItem } from '@/components/ui/MenuItem';

export function MenuCategory({ category }: { category: MenuCategory }) {
  return (
    <div className="menu-category">
      <h3>
        <i className={`fas ${category.icon}`} /> {category.title}
      </h3>
      <div className="menu-list">
        {category.items.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}