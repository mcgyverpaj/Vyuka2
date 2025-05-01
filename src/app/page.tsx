'use client';

import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    setText('');
  };

  const handleConvert = async () => {
    if (!image) return;
    setLoading(true);
    const url = URL.createObjectURL(image);
    const result = await Tesseract.recognize(url, 'eng');
    setText(result.data.text);
    setLoading(false);
  };

  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">OCR převod zápisků</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button
        onClick={handleConvert}
        disabled={!image || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
      >
        {loading ? 'Načítání...' : 'Převést'}
      </button>
      {text && (
        <div className="bg-gray-100 p-4 rounded mt-4">
          <h2 className="font-semibold mb-2">Výsledný text:</h2>
          <pre className="whitespace-pre-wrap">{text}</pre>
        </div>
      )}
    </main>
  );
}
