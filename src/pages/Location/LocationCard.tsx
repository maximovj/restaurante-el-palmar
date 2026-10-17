import { restaurantInfo } from '@/data/restaurant';

export function LocationCard() {
  return (
    <div className="location-card">
      <h3>
        El Palmar
        <br />
        Puerto Vallarta
      </h3>

      <div className="info-row">
        <i className="fas fa-map-marker-alt" />
        <div className="info-text">
          <strong>Dirección</strong>
          <span>{restaurantInfo.address}</span>
        </div>
      </div>

      <div className="info-row">
        <i className="fas fa-clock" />
        <div className="info-text">
          <strong>Horario</strong>
          <span>{restaurantInfo.hours}</span>
        </div>
      </div>

      <div className="info-row">
        <i className="fas fa-phone-alt" />
        <div className="info-text">
          <strong>Teléfono</strong>
          <span>{restaurantInfo.phone}</span>
        </div>
      </div>

      <div className="info-row">
        <i className="fas fa-envelope" />
        <div className="info-text">
          <strong>Correo</strong>
          <span>{restaurantInfo.email}</span>
        </div>
      </div>

      <div className="info-row">
        <i className="fas fa-umbrella-beach" />
        <div className="info-text">
          <strong>Cerca de</strong>
          <span>{restaurantInfo.nearby}</span>
        </div>
      </div>
    </div>
  );
}