import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-eyebrow">Cocina del Pacífico · Desde 2015</div>
                <h1 className="hero-title">
                    Sabores que
                    <br />
                    <em>abraza</em> el mar
                </h1>
                <p className="hero-desc">
                    En el corazón de la Zona Romántica, El Palmar celebra la riqueza del Pacífico
                    mexicano: mariscos frescos, carnes a las brasas y coctelería de autor, todo en un
                    ambiente íntimo y sofisticado.
                </p>
                <div className="hero-cta">
                    <Button variant="gold" icon="fa-utensils">
                        Explorar carta
                    </Button>
                    <Button variant="ghost" icon="fa-map-pin">
                        Còmo se llama
                    </Button>
                </div>
            </div>
            <div className="hero-image">
                <div className="badge">
                    <div className="num">4.9</div>
                    <div className="txt">320 reseñas</div>
                </div>
            </div>
        </div>
    );
}
