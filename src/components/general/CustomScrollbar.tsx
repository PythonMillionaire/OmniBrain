import React, {CSSProperties, useRef} from 'react';
import {Scrollbar} from 'react-scrollbars-custom';

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
    height: '100%',
    minHeight: '70px'
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
    width: '10px'
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
    //width: '10px', // Your desired thumb width
    margin: 'auto' // Helps in centering if needed
};

const scrollerStyle: CSSProperties = {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden !important',
    width: '100%'
};

const contentStyle: CSSProperties = {
    padding: '0.05px',
    boxSizing: 'border-box',
    minHeight: '100%',
    minWidth: '100%'
};


const CustomScrollbar: React.FC<{ children: React.ReactNode, minHeight?: string }> = ({ children, minHeight = 'none' }) => {
    const scrollerRef = useRef<HTMLDivElement | null>(null);

    // Function to handle the mouse wheel event
    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        const scroller = scrollerRef.current;
        if (scroller && event.currentTarget.contains(event.target as Node)) {
            // Prevent default scrolling behavior
            event.preventDefault();
            // Scroll to the new position
            scroller.scrollTop = scroller.scrollTop + event.deltaY;
        }
    };

    return (
        <Scrollbar
            noDefaultStyles
            style={{ width: '100%', height: '100%', minHeight: minHeight }}
            renderer={props => {
                const { elementRef, ...restProps } = props;
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
                            <div style={{ ...adjustedThumbStyle }} />
                        </div>
                    );
                }
            }}
            scrollerProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return (
                        <div
                            {...restProps}
                            ref={node => {
                                elementRef && elementRef(node); // Call the elementRef function with the node
                                scrollerRef.current = node; // Directly assign the node to scrollerRef.current
                            }}
                            className="custom-scroller"
                            style={{ ...restProps.style, ...scrollerStyle }}
                            onWheel={handleWheel} // Attach the wheel handler
                        />
                    );
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