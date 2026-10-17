import { SectionHeader } from '@/components/ui/SectionHeader';

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14938.597660731877!2d-105.24447348759401!3d20.602369987251294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421454b2f06f169%3A0x882ebcec1babc084!2sMuelle%20de%20Playa%20Los%20Muertos!5e0!3m2!1ses-419!2smx!4v1790368924749!5m2!1ses-419!2smx';

export function Location() {
  return (
    <div className="page-wrapper">
      <section className="section">
        <SectionHeader eyebrow="Visítanos" title="Nuestra" highlight="Ubicación" />
        <div className="location-grid">
          <div className="map-frame">
            <iframe
              src={MAP_EMBED}
              title="Mapa El Palmar"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </div>
  );
}