import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';

function App() {
  const [step, setStep] = useState(0); // 0: სტარტი (Landing), 1: პირადი ინფო, 2: გამოცდილება

  return (
    <div>
      <div style={{ padding: '20px 40px', borderBottom: '1px solid #eee' }}>
        <h1 style={{ color: '#e60000', margin: 0, fontSize: '24px' }}>REDBERRY</h1>
      </div>

      {step === 0 && <LandingPage onStart={() => setStep(1)} />}
      {step === 1 && <PersonalInfo onNext={() => setStep(2)} />}
      {step === 2 && <Experience onNext={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && (
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <h2>რეზიუმე წარმატებით შეიქმნა!</h2>
          <button onClick={() => setStep(2)}>უკან დაბრუნება</button>
        </div>
      )}
    </div>
  );
}

export default App;