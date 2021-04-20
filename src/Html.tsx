import React from 'react';

interface HtmlProps {
  scripts: Array<string>;
  children: string;
}

const Html: React.FC<HtmlProps> = ({children, scripts}) => (
  <html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <title>React App</title>
  </head>

  <body>
    <div id="app" dangerouslySetInnerHTML = {{ __html: children }}></div>
  </body>
  </html>
);

export default Html;