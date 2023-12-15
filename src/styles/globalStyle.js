import { css, createGlobalStyle } from "styled-components";
import { breakpoints } from "../constants/breakpoints";
import theme from "./theme";

export const reset = css`
    /* http://meyerweb.com/eric/tools/css/reset/
   v4.0 | 20180602
   License: none (public domain)
*/

    *:focus {
        outline: none;
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        font-family: "Quicksand", sans-serif;
        vertical-align: baseline;
        text-decoration: none;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section {
        display: block;
    }
    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }

    html {
        background: ${theme.primary};
    }

    body {
        line-height: 1;
        background: white;
        z-index: -5;
        user-select: none;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    h1,
    h2 {
        font-size: 36px;
        font-weight: 900;

        @media (max-width: ${breakpoints.small}) {
            font-size: 28px;
        }
    }
`;

export const Reset = createGlobalStyle`${reset}`;

export default reset;
