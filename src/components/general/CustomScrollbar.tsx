import React, { CSSProperties, useEffect, useRef } from 'react';
import { Scrollbar } from 'react-scrollbars-custom';

// scrollbarStyles.ts
const trackYStyle: CSSProperties = {
    border: '1px solid hsl(226deg 55.31% 84.52% / 1)',
    boxShadow: 'inset 0 0 3px hsl(226deg 25.31% 84.52% / 0.3)',
    backgroundColor: 'hsl(225 30% 97% / 1)',
    borderRadius: '10px',
    position: 'absolute',
    userSelect: 'none',
    width: '13px',
    height: 'calc(100% - 3px)',
    top: '0px',
    right: '0px',
    overflow: 'hidden'
};

const trackXStyle: CSSProperties = {
    border: '1px solid hsl(226deg 55.31% 84.52% / 1)',
    boxShadow: 'inset 0 0 3px hsl(226deg 25.31% 84.52% / 0.3)',
    backgroundColor: 'hsl(225 30% 97% / 1)',
    borderRadius: '10px',
    position: 'absolute',
    userSelect: 'none',
    height: '10px',
    width: 'calc(100% - 3px)',
    left: '0px',
    bottom: '0px',
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
    boxShadow: 'inset 0 0 3px hsl(226deg 25.31% 84.52% / 0.2), 0 3px 3px hsl(226deg 25.31% 84.52% / 0.15)',
    borderRadius: '10px',
    background: 'hsl(225 10% 100% / 1)',
    border: '1px solid hsl(226deg 65.31% 60% / 1)',
    height: '100%',
    width: '13px'
};

const thumbXStyle: CSSProperties = {
    boxShadow: 'inset 0 0 3px hsl(226deg 25.31% 84.52% / 0.2), 0 3px 3px hsl(226deg 25.31% 84.52% / 0.15)',
    borderRadius: '10px',
    background: 'hsl(225 10% 100% / 1)',
    border: '1px solid hsl(226deg 35.31% 76% / 1)',
    width: '100%',
    height: '15px'
};

const thumbWrapperStyle: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const adjustedThumbYStyle: CSSProperties = {
    ...thumbYStyle,
    transform: 'translateX(-50%)',
    left: '50%',
    position: 'relative',
    margin: 'auto'
};

const adjustedThumbXStyle: CSSProperties = {
    ...thumbXStyle,
    transform: 'translateY(-50%)',
    top: '50%',
    position: 'relative',
    margin: 'auto'
};

const scrollerStyle: CSSProperties = {
    position: 'absolute',
    inset: '0',
    width: '100%',
    marginRight: '0px'
};

const contentStyle: CSSProperties = {
    padding: '0.05px',
    boxSizing: 'border-box',
    minHeight: '100%',
    minWidth: '100%'
};

const CustomScrollbar: React.FC<{ children: React.ReactNode, minHeight?: string, styles?: CSSProperties }> = ({ children, minHeight = 'none', styles = {} }) => {
    const scrollerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (scroller) {
            const handleWheel = (event: WheelEvent) => {
                if (scroller.contains(event.target as Node)) {
                    event.preventDefault();
                    scroller.scrollTop += event.deltaY;
                }
            };
            scroller.addEventListener('wheel', handleWheel, { passive: false });

            return () => {
                scroller.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);

    return (
        <Scrollbar
            noDefaultStyles
            style={{ width: '100%', height: '100%', minHeight: minHeight, ...styles }}
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
                            <div style={{ ...adjustedThumbYStyle }} />
                        </div>
                    );
                }
            }}
            trackXProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;

                    return <div {...restProps} ref={elementRef} style={{ ...restProps.style, ...trackXStyle }} />;
                }
            }}
            thumbXProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;

                    return (
                        <div {...restProps} ref={elementRef} style={{ ...restProps.style, ...thumbWrapperStyle }}>
                            <div style={{ ...adjustedThumbXStyle }} />
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
                                elementRef && elementRef(node);
                                scrollerRef.current = node;
                            }}
                            className="custom-scroller"
                            style={{ ...restProps.style, ...scrollerStyle }}
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
