
import React from'react';
import Button from'react-bootstrap/Button';

const HeroSection = () => (
  <section className="flex items-center justify-between p-10 bg-white">
    <div className="w-1/2">
      <h2 className="text-4xl font-bold text-blue-600">Procurar ajuda é o começo da mudança!</h2>
      <p className="text-gray-600 mt-4">
        O TOUCHminds oferece um programa online gratuito destinado a ajudar os
        adolescentes a compreender a ansiedade e a promover a procura de ajuda. O acesso está disponível em escolas selecionadas da região norte.
      </p>
      <Button variant="light" className="mt-4 bg-pink-300">Começar AGORA</Button>
    </div>
    <img src="" alt="Ilustração" className="w-1/2" />
  </section>
);

  export default HeroSection;