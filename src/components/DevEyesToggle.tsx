import React from 'react';
import { useDevEyes } from '../context/DevEyesContext';

export default function DevEyesToggle() {
  const { devEyes, toggleDevEyes } = useDevEyes();

  return (
    <button
      onClick={toggleDevEyes}
      title={devEyes ? 'Dev Eyes ON — hover any element to peek at the code' : 'Dev Eyes OFF'}
      className="dev-eyes-toggle"
      style={{
        background: devEyes ? '#4eaeba' : '#1e1e1e',
        color: devEyes ? '#1e1e1e' : '#4eaeba',
        boxShadow: devEyes
          ? '0 0 20px rgba(78,174,186,0.55), 0 2px 8px rgba(0,0,0,0.3)'
          : '0 2px 10px rgba(0,0,0,0.25)',
      }}
    >
      <i className={`${devEyes ? 'ri-eye-line' : 'ri-eye-close-line'} text-lg`} />
      <span>Dev Eyes</span>
    </button>
  );
}
