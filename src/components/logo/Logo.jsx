import React from 'react';
import {ReactComponent as  DefaultLogo } from '../../../public/images/logo.svg';
import {ReactComponent as MutedLogo } from  '../../../public/images/logo-muted.svg'

function Logo({ type }) {
    return ( type ? <img src={ MutedLogo } /> : <img src={ DefaultLogo } /> );
}

export default Logo;