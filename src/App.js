import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

export default function App() {
  const queryClient = new QueryClient()
  return (
    <div className=''>
      <Header />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}

