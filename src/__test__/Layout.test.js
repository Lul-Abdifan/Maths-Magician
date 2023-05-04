import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import '@testing-library/jest-dom';

describe('Layout testing', () => {
  test('Render Layout', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    );

    const Nav1 = screen.getByText('Home');
    expect(Nav1).toBeInTheDocument();
    const Nav2 = screen.getByText('Calculator');
    expect(Nav2).toBeInTheDocument();
    const Nav3 = screen.getByText('Quote');
    expect(Nav3).toBeInTheDocument();
  });
  test('checking Browser pathname after clicked', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );
    const Home = getByText('Home');
    fireEvent.click(Home);
    expect(window.location.pathname).toBe('/home');
    const Calculator = getByText('Calculator');
    fireEvent.click(Calculator);
    expect(window.location.pathname).toBe('/calculator');
    const Quote = getByText('Quote');
    fireEvent.click(Quote);
    expect(window.location.pathname).toBe('/quote');
  });
});
