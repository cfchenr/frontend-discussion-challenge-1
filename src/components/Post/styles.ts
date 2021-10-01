import styled, { css } from 'styled-components'
import {
  FcPlus,
  FcPositiveDynamic,
  FcSignature,
  FcApproval,
  FcMinus,
  FcSupport,
  FcTodoList,
  FcOk
} from 'react-icons/fc'

export const Container = styled.div`
  margin-top: 8px;
  margin-bottom: 12px;
  .separator {
    width: 100%;
    border-bottom: 1px solid var(--color-separator);
    margin: 16px 0 12px;
  }
  .title {
    font-size: 12px;
    font-weight: 600;
    color: var(--color-light);
    margin-bottom: 10px;
  }
`

export const Row = styled.div`
  display: flex;
  margin: 0 16px;
  &.description {
    padding: 12px 0 8px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .left,
  .right {
    display: flex;
    align-items: center;
  }
  &.heading {
    padding: 12px 0 8px;
    h3 {
      font-size: 14px;
      // color: var(--color-black);
    }
    h4,
    time {
      font-size: 12px;
      font-weight: normal;
      // color: var(--color-gray);
    }
  }
  &.likes {
    padding: 8px 0;
    font-size: 12px;
    // color: var(--color-gray);
    .circle {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      &.blue {
        background: #1385bd;
      }
      &.green {
        background: #6dae4f;
      }
      &.red {
        background: #df704c;
      }
      & + .circle {
        margin-left: 4px;
      }
    }
    .number {
      margin-left: 8px;
    }
  }
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

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid var(--color-separator);
`

export const Column = styled.div``

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`

export const LikeIcon = styled(FcPlus)`
  ${iconCSS}
`

export const LikeIconLess = styled(FcMinus)`
  ${iconCSS}
`

export const CommentIcon = styled(FcPositiveDynamic)`
  ${iconCSS}
`

export const ApplyIcon = styled(FcSignature)`
  ${iconCSS}
`

export const AddExam = styled(FcPlus)`
  ${iconCSS}
`

export const EditIcon = styled(FcSupport)`
  ${iconCSS}
`

export const ResponsesIcon = styled(FcTodoList)`
  ${iconCSS}
`

export const PostIcon = styled(FcOk)`
  ${iconCSS}
`

export const HashtagIconCertified = styled(FcApproval)`
  width: 16px;
  height: 16px;
  color: var(--color-hashtag);
  margin-right: 8px;
`