// Font configuration utility
// Change the FONT_FAMILY value to apply across all pages

/**
 * Available font options:
 * - font-sans (Default: Inter)
 * - font-serif (Georgia/Garamond)
 * - font-mono (Monospace)
 * - font-poppins (Poppins)
 * - font-roboto (Roboto)
 * - font-opensans (Open Sans)
 * - font-lato (Lato)
 * - font-raleway (Raleway)
 * - font-montserrat (Montserrat)
 * - font-ubuntu (Ubuntu)
 * - font-crimson (Crimson Text - Serif)
 * - font-playfair (Playfair Display - Serif)
 * - font-merriweather (Merriweather - Serif)
 */

export const FONT_FAMILY = "font-crimson"; // Change this to switch fonts globally

export const getFontClass = () => FONT_FAMILY;

// Utility function to get font classes for specific elements
export const fontClasses = {
  container: `${FONT_FAMILY}`,
  heading: `${FONT_FAMILY}`,
  paragraph: `${FONT_FAMILY}`,
  button: `${FONT_FAMILY}`,
};

// Available fonts list for reference
export const AVAILABLE_FONTS = [
  { value: "font-sans", label: "Inter (Sans Serif) - Default", category: "Sans" },
  { value: "font-serif", label: "Georgia/Garamond (Serif)", category: "Serif" },
  { value: "font-mono", label: "Monospace", category: "Mono" },
  { value: "font-poppins", label: "Poppins (Sans Serif)", category: "Sans" },
  { value: "font-roboto", label: "Roboto (Sans Serif)", category: "Sans" },
  { value: "font-opensans", label: "Open Sans (Sans Serif)", category: "Sans" },
  { value: "font-lato", label: "Lato (Sans Serif)", category: "Sans" },
  { value: "font-raleway", label: "Raleway (Sans Serif)", category: "Sans" },
  { value: "font-montserrat", label: "Montserrat (Sans Serif)", category: "Sans" },
  { value: "font-ubuntu", label: "Ubuntu (Sans Serif)", category: "Sans" },
  { value: "font-crimson", label: "Crimson Text (Serif)", category: "Serif" },
  { value: "font-playfair", label: "Playfair Display (Serif)", category: "Serif" },
  { value: "font-merriweather", label: "Merriweather (Serif)", category: "Serif" },
];
