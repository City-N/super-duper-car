import React from 'react';

type ImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

export const Image = ({
    src,
    alt,
    width,
    height,
}: ImageProps) => (
    <img src={src} width={width} height={height} alt={alt} />
);
