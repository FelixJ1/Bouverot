import { useEditMode } from '../context/EditModeContext';

export function EditableText({ id, children, as: Tag = 'p' }) {
  const { editing, trackChange } = useEditMode();

  return (
    <Tag
      contentEditable={editing}
      suppressContentEditableWarning
      onBlur={(e) => 
        {
        editing && trackChange(id, e.target.innerText)
        console.log('blur fired', id, e.target.innerText);
        }
    }
      style={editing ? { outline: '2px dashed #ffffff6e', borderRadius: '4px' } : {}}
    >
      {children}
    </Tag>
  );
}