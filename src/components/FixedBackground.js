import { usePathname } from "next/navigation";

export default function FixedBackground() {
    const pathname = usePathname();

    // Don't show this background on the course area (it has its own theme)
    if (pathname && pathname.startsWith('/curso')) {
        return null;
    }

    return (
        <div
            className="fixed-background-layer"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
            }}
        />
    );
}
