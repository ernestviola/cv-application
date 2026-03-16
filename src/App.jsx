import './App.css';

import { useState } from 'react';
import Preview from './components/Preview';
import EducationForm from './components/EducationForm';
import GeneralForm from './components/GeneralForm';
import ExperienceForm from './components/ExperienceForm';

function App() {
  const [generalData, setGeneralData] = useState({
    name: 'Ernest Viola',
    email: 'fakeemail@gmail.com',
    phone: '123456789',
  });

  const [educationData, setEducationData] = useState([
    {
      school: 'San Diego State University',
      degree: 'Computer Science',
      date: '1/1/1111',
    },
  ]);

  const [experienceData, setExperienceData] = useState([
    {
      name: 'Allvue Systems',
      title: 'Operations Engineer',
      responsibilities:
        'Provided solutions to cover operations within the company',
      startDate: '1/1/1111',
      endDate: '2/2/2222',
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

  function newExperienceDataRow(e) {
    e.preventDefault();
    const newExperienceData = [...experienceData];
    newExperienceData.push({
      name: '',
      title: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
    });
    setExperienceData(newExperienceData);
  }

  return (
    <>
      <nav>
        <span>CV Formatter</span>
      </nav>
      <main>
        <form action=''>
          <legend>General Information</legend>
          <GeneralForm
            generalData={generalData}
            setGeneralData={setGeneralData}
          />
          <legend>Education</legend>
          <EducationForm
            educationData={educationData}
            setEducationData={setEducationData}
          />
          <button onClick={(e) => newEducationDataRow(e)}>New Row</button>
          <legend>Experience</legend>
          <ExperienceForm
            experienceData={experienceData}
            setExperienceData={setExperienceData}
          />
          <button onClick={(e) => newExperienceDataRow(e)}>New Row</button>
        </form>
        <Preview
          generalData={generalData}
          educationData={educationData}
          experienceData={experienceData}
        />
      </main>
    </>
  );
}

export default App;
