import './App.css';
import Preview from './components/Preview';

import GeneralForm from './components/GeneralForm';
import { useState } from 'react';
import EducationForm from './components/EducationForm';

function App() {
  const [generalData, setGeneralData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educationData, setEducationData] = useState([
    {
      school: '',
      degree: '',
      date: '',
    },
  ]);

  function newEducationDataRow(e) {
    e.preventDefault();
    const newEducationData = [...educationData];
    newEducationData.push({
      school: '',
      degree: '',
      date: '',
    });
    setEducationData(newEducationData);
  }

  return (
    <>
      <nav>
        <span>CV Formatter</span>
      </nav>
      <form action=''>
        <legend>General Information</legend>
        <GeneralForm
          generalData={generalData}
          setGeneralData={setGeneralData}
        />
      </form>
      <form>
        <legend>Education</legend>
        <EducationForm
          educationData={educationData}
          setEducationData={setEducationData}
        />
        <button onClick={(e) => newEducationDataRow(e)}>New Row</button>
      </form>
      <form action=''>
        <legend>Experience</legend>
      </form>
      <Preview />
    </>
  );
}

export default App;
