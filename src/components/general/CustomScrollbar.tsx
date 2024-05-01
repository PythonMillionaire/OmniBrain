import React, { CSSProperties } from 'react';
import { Scrollbar } from 'react-scrollbars-custom';

// scrollbarStyles.ts
const trackYStyle: CSSProperties = {
    border: '1px solid hsl(226deg 55.31% 84.52% / 1)',
    boxShadow: 'inset 0 0 3px hsl(226deg 25.31% 84.52% / 0.3)',
    backgroundColor: 'hsl(240 14% 99% / 1)',
    borderRadius: '10px',
    position: 'absolute',
    userSelect: 'none',
    width: '10px',
    height: 'calc(100% - 3px)',
    top: '0px',
    right: '0px',
    overflow: 'hidden'
};

const outermostStyle: CSSProperties = {
    position: 'relative',
    inset: '0px 10px 0px 0px',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
};

const wrapperStyle: CSSProperties = {
    position: 'absolute',
    inset: '0px 10px 0px 0px',
    overflow: 'hidden',
    width: '100%',
};


const thumbYStyle: CSSProperties = {
    boxShadow: 'inset 0 0 3px hsl(226deg 25.31% 84.52% / 0.6), 0 3px 3px hsl(226deg 25.31% 84.52% / 0.5)',
    borderRadius: '10px',
    background: 'hsl(225 10% 100% / 1)',
    border: '1px solid hsl(226deg 35.31% 76% / 1)',
    height: '100%',
};

const thumbWrapperStyle: CSSProperties = {
    position: 'absolute',
    width: '100%', // Ensures it covers the track
    height: '100%', // Match the height of the thumb
    display: 'flex',
    alignItems: 'center', // Centers the thumb vertically
    justifyContent: 'center' // Centers the thumb horizontally

};

// Adjusted thumb style for the actual thumb element
const adjustedThumbStyle: CSSProperties = {
    ...thumbYStyle, // Spread existing styles
    transform: 'translateX(-50%)',
    left: '50%',
    position: 'relative', // Relative to the wrapper
    width: '10px', // Your desired thumb width
    margin: 'auto' // Helps in centering if needed
};

const scrollerStyle: CSSProperties = {
    position: 'absolute',
    inset: '0',
    overflowY: 'auto',
    overflowX: 'hidden',
    marginRight: '-10px'
};

const contentStyle: CSSProperties = {
    padding: '0.05px',
    boxSizing: 'border-box',
    minHeight: '100%',
    minWidth: '100%'
};


interface CustomScrollbarProps {
    children: React.ReactNode;
}
const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children }) => {
    return (
        <Scrollbar
            noDefaultStyles
            style={{ width: '100%', height: '100%' }}
            renderer={props => {
                const { elementRef, ...restProps } = props; // Destructure to separate elementRef from other props
                return <div {...restProps} ref={elementRef} style={{ ...restProps.style, ...outermostStyle }} />;
            }}
            trackYProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return <div {...restProps} ref={elementRef} style={{ ...restProps.style, ...trackYStyle }} />;
                }
            }}
            thumbYProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return (
                        <div {...restProps} ref={elementRef} style={{ ...restProps.style, ...thumbWrapperStyle }}>
                            <div style={{ ...adjustedThumbStyle }} /> {/* This div is the actual thumb */}
                        </div>
                    );
                }
            }}
            scrollerProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return <div {...restProps} ref={elementRef} style={{ ...restProps.style, ...scrollerStyle }} />;
                }
            }}
            contentProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return <div {...restProps} ref={elementRef} style={{ ...restProps.style, ...contentStyle }} />;
                }
            }}

            wrapperProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return <div {...restProps} ref={elementRef} style={{ ...restProps.style, ...wrapperStyle }} />;
                }
            }}
        >
            {children}
        </Scrollbar>
    );
};

export default CustomScrollbar;
