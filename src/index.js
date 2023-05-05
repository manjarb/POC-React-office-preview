import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '@pdftron/webviewer/public/ui/style.css';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { PublicLayout } from './layouts/PublicLayout';
import { IframePage } from './pages/IframePage';
import { SheetJsPage } from './pages/SheetJsPage';
import { FileViewerPage } from './pages/FileViewerPage';
import { DocxJsPage } from './pages/DocxJsPage';
import { AprysePage } from './pages/AprysePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: 'iframe',
        element: <IframePage />
      },
      {
        path: 'xlsx',
        element: <SheetJsPage />
      },
      {
        path: 'file-viewer',
        element: <FileViewerPage />
      },
      {
        path: 'docx-js',
        element: <DocxJsPage />
      },
      {
        path: 'apryse',
        element: <AprysePage />
      },
      {
        index: true,
        element: <Navigate to="/iframe" replace />
      }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
