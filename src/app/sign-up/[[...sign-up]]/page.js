"use client";
import React from 'react';
import { SignUp } from "@clerk/nextjs";
import './signup.css';

export default function SignUpPage() {
    return (
        <div className="signup-container">
            {/* Custom Logo Header */}
            <div className="signup-header">
                <h1 className="signup-title">
                    MR. PRESIDENT
                </h1>
                <p className="signup-subtitle">
                    Activación de Cuenta
                </p>
            </div>

            {/* Clerk Component with Custom Styling */}
            <div className="signup-wrapper">
                <SignUp
                    appearance={{
                        layout: {
                            socialButtonsPlacement: 'bottom',
                        },
                        elements: {
                            rootBox: "w-full",
                            card: "clerk-card",
                            headerTitle: "hidden",
                            headerSubtitle: "clerk-subtitle",
                            formFieldLabel: "clerk-label",
                            formFieldInput: "clerk-input",
                            formButtonPrimary: "clerk-button",
                            footer: "hidden", // Hide "Have an account? Sign in" footer to keep it clean for invitees
                            footerAction: "hidden",
                            dividerLine: "bg-zinc-800",
                            dividerText: "text-zinc-600 bg-transparent",
                            formFieldAction: "clerk-action-link",
                        }
                    }}
                />
            </div>

            <p className="signup-footer-text">
                Al activar tu cuenta, aceptas las reglas de confidencialidad del círculo interno.<br />
                Bienvenido a El Poder.
            </p>
        </div>
    );
}
