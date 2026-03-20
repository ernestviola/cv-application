import './App.css';

import { useState, useRef } from 'react';
import Preview from './components/Preview';
import EducationForm from './components/EducationForm';
import GeneralForm from './components/GeneralForm';
import ExperienceForm from './components/ExperienceForm';

import { Add, Download } from '@mui/icons-material';
import html2pdf from 'html2pdf.js';

function App() {
  const previewRef = useRef(null);
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

  function downloadPdf() {
    const element = previewRef.current;
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  }

  return (
    <>
      <nav>
        <span>CV Formatter</span>
        <button
          className='download-button'
          onClick={downloadPdf}
          aria-label='Download Resume as PDF'
        >
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
          ref={previewRef}
          generalData={generalData}
          educationData={educationData}
          experienceData={experienceData}
        />
      </main>
    </>
  );
}

export default App;
