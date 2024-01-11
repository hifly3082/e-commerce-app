import { css } from 'styled-components'

export const mobile = (props: any) => {
  return css`
    @media only screen and (min-width: 600px) {
      ${props}
    }
  `
}
