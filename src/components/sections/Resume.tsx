import { useEffect, useRef, useState } from 'react';
import AppSection from "@/components/common/appSection"

export default function Resume() {
    const [loadPDF, setLoadPDF] = useState(false);
    const resumeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setLoadPDF(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (resumeRef.current) {
            observer.observe(resumeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Prevent any auto-scrolling when component mounts
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div ref={resumeRef}>
            <AppSection
                id="resume"
                title="Resume"
                description="Professional experience, achievements, and qualifications showcasing my journey in software development."
            >
                <div className="mt-6">
                    {loadPDF ? (
                        <iframe
                            src="/Resume.pdf"
                            width="100%"
                            height="1000px"
                            tabIndex={-1}
                            style={{ pointerEvents: 'auto' }}
                            className="border border-border rounded-lg"
                            title="Resume PDF"
                        />
                    ) : (
                        <div className="border border-border flex items-center justify-center bg-muted">
                            <p className="text-muted-foreground">Loading resume...</p>
                        </div>
                    )}
                </div>
            </AppSection>
        </div>
    );
}
