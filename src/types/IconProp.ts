import React from 'react';

// Assuming DefaultIconType is your type for default icons (e.g., SVG components)
type DefaultIconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// Icon prop can be a React component (for default icons) or a string (for URLs to user-uploaded icons)
export type IconProp = DefaultIconType | string;