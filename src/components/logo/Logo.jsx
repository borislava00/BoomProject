import React from 'react';

function Logo({ type }) {
    return ( type ? <img src="/images/logo-muted.svg" /> : <img src="/images/logo.svg" /> );
}

export default Logo;