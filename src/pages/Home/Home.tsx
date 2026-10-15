import { Marquee } from "@/components/ui/Marquee";
import { Hero } from "./Hero";

export function Home() {
    return (
        <div className="page-wrapper">
            <Hero />
            <Marquee />
        </div>
    );
}