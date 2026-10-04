import { restaurantInfo } from '@/data/restaurant';

export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-info">
        <span>
          <i className="fas fa-map-marker-alt" /> Francisca Rodríguez 121, Zona Romántica
        </span>
        <span>
          <i className="fas fa-phone-alt" /> {restaurantInfo.phone}
        </span>
      </div>
      <div className="topbar-info">
        <span>
          <i className="fas fa-clock" /> Lun–Dom · 12:00 – 23:00
        </span>
      </div>
    </div>
  );
}