import { SectionHeader } from "@/components/ui/SectionHeader";
import { menuCategories } from "@/data/menu";
import { MenuCategory } from "./MenuCategory";

export function Menu() {
    return (
        <div className="page-wrapper">
            <div className="section">
            <SectionHeader eyebrow="Nuestra cocina" title="La" highlight="cocina" />
            {menuCategories.map((cat) => (
                <MenuCategory key={cat.id} category={cat} />
            ))}
            </div>
        </div>
    );
}
