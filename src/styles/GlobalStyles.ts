import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--color-ad-text);
  }
  html, body, #root {
    width: 100%;
    background: var(--color-background);
    height: 100%;
  }
  *, button, input {
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    word-break: break-word;
    line-height: 1.5;
    // font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  input, textarea, select {
    border: none;
    background-color: var(--color-medium);
    color: var(--color-input) !important;
  }

  :root {
    --color-header: #001B29;
    --color-background: #000D14;
    --color-dark: #001B29;
    --color-medium: #00293D;
    --color-light: #007AB8;
    --color-black: rgba(0,0,0,.9);
    --color-gray: rgba(0,0,0,.6);
    --color-separator: rgba(0,0,0,0.15);
    --color-hashtag: #7a8b98;
    --color-icons: #c7d1d8;
    --color-input: #e1e9ee;
    --color-panel: #fff;
    --color-ad-text: #f7fff7;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  padding-bottom: 12px;

  > div {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 12px 16px;

    .title {
      color: var(--color-light);
      margin-bottom: 10px;
    }
    ul {
      list-style: none;
      margin-top: 8px;

      li {
        display: flex;
        align-items: center;

        .bullet {
          display: inline-flex;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-light);
        }
        .news {
          display: flex;
          // flex-direction: column;
          margin-left: 10px;

          .head {
            font-size: 14px;
            font-weight: 600;
            // color: var(--color-black);
          }
          .subtext {
            font-size: 12px;
            // color: var(--color-gray);
          }
        }

        & + li {
          margin-top: 10px;
        }
      }
    }
  }
`

export const Row = styled.div`
  justify-content: space-between !important;
  display: flex !important;
  align-items: center !important;
  width: 100% !important;

  &.actions {
    justify-content: space-between;

    @media (min-width: 1180px) {
      justify-content: flex-start;
    }

    button {
      background: none;
      border: none;
      outline: none;
      // color: var(--color-gray);
      font-size: 14px;
      font-weight: 600;

      display: flex;
      align-items: center;
      padding: 14px 8px;

      cursor: pointer;
      &:hover,
      &:focus {
        background: rgba(0, 0, 0, 0.05);
      }

      span {
        /* display: none; */

        @media (min-width: 1180px) {
          display: unset;
        }
      }
    }
  }
`
