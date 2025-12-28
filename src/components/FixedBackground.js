"use client";
import React from "react";

export default function FixedBackground() {
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
