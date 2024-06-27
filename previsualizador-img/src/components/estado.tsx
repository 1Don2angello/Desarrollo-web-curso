import React, { useState, useRef } from 'react';

export const ImagePreviewer = () => {
  const [imageSrc, setImageSrc] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setImageSrc(e.target!.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
        <p>practica 2</p>
      <h2> previsualizador de imagen</h2>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" />
      {imageSrc && <img src={imageSrc} alt="Preview" style={{ width: '100%', height: 'auto' }} />}
      
    </div>
  );
};
