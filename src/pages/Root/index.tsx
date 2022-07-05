import React from 'react';
import cn from 'classnames';
import { Image } from 'components/Image';

import logo from 'img/logo.svg';
import css from './Root.module.css';

export const Root = () => (
    <main className={cn(css.main, css.container)}>
        <h1>Hello, world</h1>
        <Image src={logo} alt="react logo" width={300} height={300} />
    </main>
);
