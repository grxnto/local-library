import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Accordion({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0';
    }, [isOpen]);
    
    return (
        <div className="accordion">
          <div className={`accordion-header ${isOpen ? 'open' : ''}`}>
            <h3 className="description">{title}</h3>
            <FontAwesomeIcon icon={faCircleChevronUp} onClick={toggleAccordion} 
            className={`chevron ${isOpen ? 'rotate' : ''}`} />
          </div>
          <div className="accordion-content" ref={contentRef}>
            {children}
          </div>
        </div>
    );
} 