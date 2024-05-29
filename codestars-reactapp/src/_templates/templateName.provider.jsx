import { useState, createContext } from "react";

export const TemplateNameContext = createContext();

function TemplateNameProvider({ children }) {
    // List of states provided by this context.
  const [templateName, setTemplateName] = useState(null);

  return (
    <TemplateNameContext.Provider value={{ templateName, setTemplateName }}>
      {children}
    </TemplateNameContext.Provider>
  );
};

export default TemplateNameProvider;