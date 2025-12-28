export const getPrice = () => {
    const today = new Date();
    const launchDate = new Date("2026-01-15T00:00:00"); // Jan 15 2026
    const preLaunchDate = new Date("2026-01-01T00:00:00"); // Jan 1 2026

    // Note: The user prompt said '15 de enero' without year, assuming upcoming 2025 or 2026 depending on current date. 
    // Given current time is Dec 2025, next Jan is 2026.

    if (today < preLaunchDate) {
        return 360;
    } else {
        // Post Jan 1st price (undefined by user, assuming higher)
        return 500;
    }
};
