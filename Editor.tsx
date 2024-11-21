import React from 'react';

type EditorProps = {
  json: string;
  onChange: (value: string) => void;
  error: string | null;
};

const Editor: React.FC<EditorProps> = ({ json, onChange, error }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <textarea
        value={json}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-96 p-2 border border-gray-300 rounded-md"
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default Editor;
