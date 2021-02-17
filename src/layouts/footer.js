import React, { Component } from "react";
import styled from "styled-components";
import { Facebook } from '../assets/icons/Facebook';
import { SmartPhone } from '../assets/icons/SmartPhone';
import { GooglePlus } from '../assets/icons/GooglePlus';

export default class Footer extends Component {
  state = {
    icons: [ 
      {
        id: 1,
        icon: <Facebook />,
        path: `https://www.facebook.com`
      },
      {
        id: 2,
        icon: <SmartPhone />,
        path: `https://www.facebook.com`
      },
      {
        id: 3,
        icon: <GooglePlus />,
        path: `https://www.facebook.com`
      }
    ]
  };
  render() {
    return (
      <FooterWrapper>
        <div className="title">fastest Grocery delivery in Chittagong</div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">copyright &copy; Kmart</p>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  background: #262626;
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: #262626;
    font-size: 1.3rem;
    &:hover {
      color: #d2aa5c;
    }
  }
  .copyright {
    color: #fff;
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    color: #d2aa5c;
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.2rem;
  }
`;

