import { createContext, useContext, useState, useEffect, useRef } from 'react';

const EditModeContext = createContext();

export function EditModeProvider({ children }) {
  const [editing, setEditing] = useState(false);
  const [changes, setChanges] = useState({});
  const changesRef = useRef(changes);

  useEffect(() => {
    changesRef.current = changes;
  }, [changes]);

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        console.log('Edit mode toggled');
        setEditing(p => !p);
      }
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        console.log('Exporting changes');
        exportChanges();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const trackChange = (id, value) => setChanges(p => {
    const updated = { ...p, [id]: value };
    changesRef.current = updated;
    return updated;
  });

  const exportChanges = () => {
    const blob = new Blob([JSON.stringify(changesRef.current, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'content-changes.json';
    a.click();
  };

  return (
    <EditModeContext.Provider value={{ editing, trackChange, exportChanges }}>
      {children}
    </EditModeContext.Provider>
  );
}

export const useEditMode = () => useContext(EditModeContext);