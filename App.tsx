import React from 'react';
import Editor from './components/Editor';
import FormGenerator from './components/FormGenerator';
import { useJSONValidation } from './hooks/useJSONValidation';

const initialJSON = `
{
  "formTitle": "Project Requirements Survey",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$",
        "message": "Please enter a valid email address"
      }
    }
  ]
}
`;

const App: React.FC = () => {
  const { json, setJson, error, parsedData } = useJSONValidation(initialJSON);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-1/2">
        <Editor json={json} onChange={setJson} error={error} />
      </div>
      <div className="w-full md:w-1/2">
        {parsedData ? <FormGenerator fields={parsedData.fields} /> : <p>Invalid JSON</p>}
      </div>
    </div>
  );
};

export default App;
