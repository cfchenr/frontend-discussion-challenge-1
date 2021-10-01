import styled from 'styled-components'

export const Container = styled.div`
  width: 500px;
  height: 80vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-height: calc(80vh - 120px);
  position: fixed;
  top: 40px;
  margin-left: calc(80vh + 50px) !important;
`