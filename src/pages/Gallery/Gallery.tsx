import { SectionHeader } from "@/components/ui/SectionHeader";
import { galleryItems } from '@/data/gallery';

export function Gallery() {
    return (
        <div className="page-wrapper">
            <div className="section">
                <SectionHeader eyebrow="Momentos" title="La" highlight="Galería"></SectionHeader>
                <div className="gallery-mosaic">
                    {galleryItems.map((g) => (
                        <div
                            key={g.id}
                            className={`g-item ${g.span === 2 ? 'span-2' : ''} ${g.tall ? 'tall' : ''}`.trim()}
                        >
                            <img src={g.src} alt={g.alt} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
