import './App.css';

import { useState } from 'react';
import Preview from './components/Preview';
import EducationForm from './components/EducationForm';
import GeneralForm from './components/GeneralForm';
import ExperienceForm from './components/ExperienceForm';

import IconButton from '@mui/material/IconButton';
import { Add, BorderColor, Download } from '@mui/icons-material';

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

  const [experienceData, setExperienceData] = useState([
    {
      name: '',
      title: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
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
        <button className='download-button'>
          Download <Download />
        </button>
      </nav>
      <main>
        <form action=''>
          <div>
            <legend>General Information</legend>
            <GeneralForm
              generalData={generalData}
              setGeneralData={setGeneralData}
            />
          </div>
          <div>
            <legend>Education</legend>
            <EducationForm
              educationData={educationData}
              setEducationData={setEducationData}
            />
            <button
              onClick={(e) => newEducationDataRow(e)}
              color='success'
              className='add-button'
            >
              Add Education <Add />
            </button>
          </div>
          <div>
            <legend>Experience</legend>
            <ExperienceForm
              experienceData={experienceData}
              setExperienceData={setExperienceData}
            />
            <button
              onClick={(e) => newExperienceDataRow(e)}
              className='add-button'
            >
              Add Experience <Add />
            </button>
          </div>
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
