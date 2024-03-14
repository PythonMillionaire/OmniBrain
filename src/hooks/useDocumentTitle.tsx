// useDocumentTitle.js
import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title]); // Re-run this effect if the title changes
};

export default useDocumentTitle;
