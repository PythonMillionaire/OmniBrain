import React, { CSSProperties, useEffect, useRef } from 'react';
import { Scrollbar } from 'react-scrollbars-custom';

const CustomScrollbar: React.FC<{ children: React.ReactNode, minHeight?: string, styles?: CSSProperties, scrollbarId?: string }> = ({ children, minHeight = 'none', styles = {}, scrollbarId }) => {
    const scrollerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (scroller) {
            const handleWheel = (event: WheelEvent) => {
                if (scroller.contains(event.target as Node)) {
                    event.preventDefault();
                    if (event.shiftKey) {
                        scroller.scrollLeft += event.deltaY;  // Scroll horizontally when Shift key is held
                    } else {
                        scroller.scrollTop += event.deltaY;
                    }
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

            id={scrollbarId}

            style={{ width: '100%', height: '100%', minHeight: minHeight, ...styles }}

            renderer={props => {
                const { elementRef, ...restProps } = props;
                return <div {...restProps} ref={elementRef} style={{ ...restProps.style }} />;
            }}
            trackYProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return <div {...restProps} ref={elementRef} style={{ ...restProps.style }} />;
                }
            }}
            thumbYProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return (
                        <div {...restProps} ref={elementRef} style={{ ...restProps.style }}>
                            <div style={{ }} />
                        </div>
                    );
                }
            }}
            trackXProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;

                    return <div {...restProps} ref={elementRef} style={{ ...restProps.style }} />;
                }
            }}
            thumbXProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;

                    return (
                        <div {...restProps} ref={elementRef} style={{ ...restProps.style }}>
                            <div style={{  }} />
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
                            style={{ ...restProps.style }}
                        />
                    );
                }
            }}
            contentProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return <div {...restProps} ref={elementRef} style={{ ...restProps.style }} />;
                }
            }}
            wrapperProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return <div {...restProps} ref={elementRef} style={{ ...restProps.style }} />;
                }
            }}
        >
            {children}
        </Scrollbar>
    );
};

export default CustomScrollbar;
