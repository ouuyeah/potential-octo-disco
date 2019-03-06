import React from 'react';
import Meta from './Meta';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/styles/generalStyles';

const theme = {
  red: '#FF0000',
  orange2: '#d3701f',
  orange: 'red',
  orangeHover: '#ff8f34',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <Inner>{this.props.children}</Inner>
          <GlobalStyle theme={theme} />
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
