import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  > span {
    margin-top: 48px;
    display: flex;
  }
  @media (min-width: 1180px) {
    > span {
      margin-top: 52px;
      padding: 8px 0;
    }
    > main {
      margin: 0 30px;
      display: flex;
      justify-content: space-between;
      height: 100%;
    }
  }
  @media (min-width: 1180px) {
    .left-column,
    .right-column,
    .left-column {
      margin: 0 25px;
    }
    .middle-column {
      margin: 0 auto;
    }
  }
`