import React from 'react';
import { Wrench } from 'lucide-react';
 

export default function TemplatePage({ name }) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-100"
      style={{ height: 'calc(100vh - 200px)' }}
    >
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
        <Wrench className="text-yellow-600" />
        {name} Page Under Construction
        <Wrench className="text-yellow-600" />
      </h1>
      <p className="text-lg text-gray-700">
        This page is coming soon. Stay tuned!
      </p>
    </div>
  );
}
