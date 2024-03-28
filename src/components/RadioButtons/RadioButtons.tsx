import { useState } from 'react';
import { Button } from '../Button/Button';

export const RadioButtons = ({
  items,
  defaultValue,
  onChange,
}: {
  items: { value: string | number; label: string }[];
  defaultValue?: string | number;
  onChange: (value: string | number) => void;
}) => {
  const [selected, setSelected] = useState<string | number | null>(
    defaultValue ?? null
  );
  return (
    <div className="radio_buttons-container">
      {items.map(({ value, label }) => (
        <Button
          size="large"
          className={`radio_buttons-btn fcc ${
            selected === value ? 'selected' : ''
          }`}
          onClick={() => {
            setSelected(value);
            onChange(value);
          }}
          type={selected === value ? 'primary' : 'default'}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
