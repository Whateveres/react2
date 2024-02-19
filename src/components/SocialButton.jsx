import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({ socialIcons }) => {
    return (

        <div>
            {socialIcons.map((icon, index) => (
                <button key={index} className="icon-shape">
                    <FontAwesomeIcon icon={icon.icon} />
                </button>
            ))}

        </div>
    );
}

export default SocialButton;
