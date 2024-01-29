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
    }

    --color-main-50: #b3d9d9;
    --color-main-100: #66b3b3;
    --color-main-200: #4da6a6;
    --color-main-300: #339999;
    --color-main-400: #1a8d8d;
    --color-main-500: #008080;
    --color-main-600: #007373;
    --color-main-700: #006666;
    --color-main-800: #005a5a;
    --color-main-900: #004d4d;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.4s, border 0.4s;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    color: var(--color-grey-700);

    transition: color 0.4s, background-color 0.4s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1rem;

    /* Hide scrollbar for IE, Edge, Firefox */
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Hide scrollbar for Chrome, Safari, Opera */
  ::-webkit-scrollbar {
    display: none;
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

  &:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles
