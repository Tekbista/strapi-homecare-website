import React from 'react';
import { Welcome } from '../../models/home-page';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const WelcomComponent: React.FC<Welcome> = ({ content }) => {
  return (
    <div className="mt-4 mb-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
        </ReactMarkdown>
    </div>
    
  );
};

export default WelcomComponent;
