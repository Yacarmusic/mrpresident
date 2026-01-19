"use client";
import React from 'react';
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '2rem',
            position: 'relative',
            zIndex: 10
        }}>
            {/* Custom Logo Header */}
            <div className="mb-8 text-center">
                <h1 className="font-cinzel text-3xl md:text-4xl text-gold font-bold mb-2 tracking-wider">
                    MR. PRESIDENT
                </h1>
                <p className="text-zinc-500 text-xs uppercase tracking-[0.2em]">
                    Área Exclusiva de Miembros
                </p>
            </div>

            {/* Clerk Component with Custom Styling */}
            <div className="w-full max-w-md">
                <SignIn
                    appearance={{
                        layout: {
                            socialButtonsPlacement: 'bottom',
                        },
                        elements: {
                            rootBox: "w-full",
                            card: "bg-zinc-900/90 border border-gold/30 shadow-2xl backdrop-blur-md rounded-xl p-6",
                            headerTitle: "hidden", // Hide default Clerk title
                            headerSubtitle: "text-zinc-400 text-sm mb-6 text-center",
                            formFieldLabel: "text-gold/80 text-xs uppercase tracking-wider mb-1",
                            formFieldInput: "bg-black/50 border-zinc-800 text-white focus:border-gold/50 transition-colors rounded-lg",
                            formButtonPrimary: "bg-gold hover:bg-gold/90 text-black font-bold uppercase tracking-wider text-sm py-3 rounded-lg transition-all",
                            footer: "hidden", // FORCE HIDE the footer (Sign Up link)
                            footerAction: "hidden", // Double check hiding
                            dividerLine: "bg-zinc-800",
                            dividerText: "text-zinc-600 bg-transparent",
                            formFieldAction: "text-gold/60 hover:text-gold text-xs",
                        }
                    }}
                />
            </div>

            <p className="mt-8 text-zinc-600 text-xs text-center max-w-sm">
                Acceso restringido únicamente a miembros verificados. <br />
                Si tienes problemas, contacta con soporte.
            </p>
        </div>
    );
}
