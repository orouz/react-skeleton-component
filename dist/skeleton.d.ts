/// <reference types="react" />
import * as React from "react";
import "./style.css";
export interface SkeletonProps {
    colors: [string, string];
    width: number;
    height: number;
    count?: number;
    duration?: number;
    direction?: "ltr" | "rtl";
    style?: React.CSSProperties;
    className?: string;
}
export declare class Skeleton extends React.Component<SkeletonProps, {}> {
    renderRow: () => JSX.Element;
    render(): JSX.Element | JSX.Element[];
}
