import React from "react";

type Platform = "ios" | "android";

/** Moldura de celular em CSS puro. `platform` muda o formato do recorte da câmera. */
export default function PhoneMockup({
    platform = "ios",
    children,
    className = "",
}: {
    platform?: Platform;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`phone ${className}`} data-platform={platform} aria-hidden="true">
            <div className="phone-island" />
            <div className="phone-screen">{children}</div>
        </div>
    );
}
