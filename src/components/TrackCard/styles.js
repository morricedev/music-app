import styled, { css } from "styled-components";
import { Title as HeadingStyles } from "../Heading/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;

    audio {
      height: 25px;
      &::-webkit-media-controls-panel {
        background-color: ${theme.colors.white};
      }
    }

    ${HeadingStyles} {
      margin: ${theme.spacings.small} 0;

      span {
        font-style: oblique;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: color 0.3s ease-in-out;
    }

    &:hover {
      a {
        color: ${theme.colors.secondary};
      }

      img {
        opacity: 0.8;
      }

      span {
        color: black;
      }
    }

    @media ${theme.media.lteSmall} {
      audio::-webkit-media-controls-mute-button,
      audio::-webkit-media-controls-volume-slider-container,
      audio::-webkit-media-controls-volume-slider {
        display: none;
        width: 0;
        height: 0;
      }

      audio::-webkit-media-controls-play-button {
      }
    }
  `}
`;

export const IconsContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const FavoriteButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

    & span {
      position: absolute;
      top: 1rem;
      right: 1rem;

      display: block;
      font-size: ms(2);
      width: auto;
      height: auto;
      cursor: pointer;
      box-shadow: none;
      transition: color 0.3s ease-in-out;
      color: #cbcdce;
      margin: 0;

      & svg {
        width: 30px;
      }

      &.fade {
        animation: fade-in-keyframes 1.5s;
      }
    }

    @keyframes fade-in-keyframes {
      0% {
        color: black;
      }
      50% {
        color: ${theme.colors.secondary};
      }
      to {
        color: black;
      }
    }
  `}
`;

export const Duration = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

    & span {
      position: absolute;
      top: 1rem;
      left: 1rem;
      transition: color 0.3s ease-in-out;

      display: block;
      font-size: calc(${theme.font.sizes.small} - 0.1rem);
      width: auto;
      height: auto;
      box-shadow: none;
      color: #cbcdce;
      margin: 0;

      & svg {
        width: 20px;
      }
    }
  `}
`;

export const Cover = styled.div`
  position: relative;

  img {
    border-radius: 0.5rem;

    max-width: 100%;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;

    margin-top: ${theme.spacings.medium};
    text-align: center;
    a svg {
      width: 25px;
      cursor: pointer;
    }
  `}
`;
