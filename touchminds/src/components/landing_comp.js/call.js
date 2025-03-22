import React from 'react';
import { Button } from "react-bootstrap";

// Call to Action Component
const CallToAction = () => (
  <section className="p-10 bg-gray-300 text-center">
    <p className="text-lg font-semibold">Dá o primeiro passo para o teu bem-estar. Regista-te agora no TOUCHminds!</p>
    <div className="mt-4 mb-4">
      <Button variant="success" className="mx-2">Sign up</Button>
      <Button variant="secondary" className="mx-2">Log in</Button>
    </div>
  </section>
);

export default CallToAction;
