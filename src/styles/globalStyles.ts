import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }
const GlobalStyles = styled.createGlobalStyle`
  :root {
    &,
    &.light-mode {
      /* LIGHT MODE */
      --color-grey-0: #fff;
      --color-grey-50: #f9fafb;
      --color-grey-100: #f3f4f6;
      --color-grey-200: #e5e7eb;
      --color-grey-300: #d1d5db;
      --color-grey-400: #9ca3af;
      --color-grey-500: #6b7280;
      --color-grey-600: #4b5563;
      --color-grey-700: #374151;
      --color-grey-800: #1f2937;
      --color-grey-900: #111827;

      --backdrop-color: rgba(255, 255, 255, 0.1);

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

      --image-grayscale: 0;
      --image-opacity: 100%;
    }

    &.dark-mode {
      /* DARK MODE */
      --color-grey-0: #18212f;
      --color-grey-50: #111827;
      --color-grey-100: #1f2937;
      --color-grey-200: #374151;
      --color-grey-300: #4b5563;
      --color-grey-400: #6b7280;
      --color-grey-500: #9ca3af;
      --color-grey-600: #d1d5db;
      --color-grey-700: #e5e7eb;
      --color-grey-800: #f3f4f6;
      --color-grey-900: #f9fafb;

      --backdrop-color: rgba(0, 0, 0, 0.3);

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

      --image-grayscale: 10%;
      --image-opacity: 90%;
    }

    /* Indigo */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    color: var(--color-grey-700);

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }
`

export default GlobalStyles
