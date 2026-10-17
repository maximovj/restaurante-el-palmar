import type { MenuItem } from '@/types';

export function MenuItem({ name, price, description, image }: MenuItem) {
  return (
    <div className="menu-item">
      <img className="menu-item-img" src={image} alt={name} loading="lazy" />
      <div className="menu-item-body">
        <div className="menu-item-head">
          <h4>{name}</h4>
          <span className="price">${price}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}