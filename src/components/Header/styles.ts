import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }

    /* div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 88px;
        height: 32px;
        margin-left: 12px;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #fff;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 16px;

          &:before {
            position: absolute;
            content: '';
            height: 20px;
            width: 40px;
            left: 8px;
            bottom: 6px;
            background-color: lightslategray;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 10px;
          }
        }

        input:checked + .slider {
          background-color: #3d3d4d;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(32px);
          -ms-transform: translateX(32px);
          transform: translateX(32px);
        }
      }
    }
  } */
`;
