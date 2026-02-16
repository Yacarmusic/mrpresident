'use client';

import Script from 'next/script';
import { useUser } from '@clerk/nextjs';

export default function TallyEmbed() {
    const { user } = useUser();

    // Tally URL
    const baseUrl = "https://tally.so/embed/Np6rEO?alignLeft=1&transparentBackground=1&dynamicHeight=1";
    // If user exists, add email to URL (Hidden Field)
    const tallySrc = user ? `${baseUrl}&email=${encodeURIComponent(user.primaryEmailAddress.emailAddress)}` : baseUrl;

    return (
        <div className="w-full">
            <iframe
                data-tally-src={tallySrc}
                loading="lazy"
                width="100%"
                height="298"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Evento Mr. President"
            ></iframe>
            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    if (typeof Tally !== 'undefined') {
                        Tally.loadEmbeds();
                    }
                }}
            />
        </div>
    );
}
