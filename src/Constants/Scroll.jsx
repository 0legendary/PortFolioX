import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Scroll() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollIcon, setShowScrollIcon] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (window.pageYOffset > 200) {
                setShowScrollIcon(true);
            } else {
                setShowScrollIcon(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div className='scroll-icon-container'>
                {showScrollIcon && (
                    <KeyboardArrowUpIcon
                        className={`scroll-icon ${isScrolled ? 'scrolled' : ''}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    />
                )}
            </div>
        </div>
    )
}

export default Scroll
