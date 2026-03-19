import '../styles/preview.css';

export default function Preview({
  generalData,
  educationData,
  experienceData,
}) {
  if (!generalData && !educationData && !experienceData) {
    return (
      <div className='preview-container'>
        <div className='preview'></div>
      </div>
    );
  }
  return (
    <div className='preview-container'>
      <div className='preview'>
        <div className='general'>
          <h1>{generalData.name}</h1>
          <div>
            <span>{generalData.email}</span>
            {generalData.email && generalData.phone ? ' • ' : ''}
            <span>{generalData.phone}</span>
          </div>
        </div>
        <div className='education'>
          <h2>Education</h2>
          {educationData.map((data, index) => {
            return (
              <div key={index} className='education-row'>
                <div className='row-header'>
                  <span>
                    <b>
                      <i>{data.school}</i>
                    </b>
                  </span>
                  <i>
                    <span>{data.degree}</span>
                  </i>
                </div>
                <span>{data.date}</span>
              </div>
            );
          })}
        </div>
        <div className='experience'>
          <h2>Experience</h2>
          {experienceData.map((data, index) => {
            return (
              <div key={index} className='experience-row'>
                <div>
                  <div className='row-header'>
                    <b>
                      <i>
                        <span>{data.name}</span>
                      </i>
                    </b>
                    <i>
                      <span>{data.title}</span>
                    </i>
                  </div>
                  <span>{data.responsibilities}</span>
                </div>

                <div>
                  <span>{data.startDate}</span>
                  {data.startDate && data.endDate ? ' - ' : ''}
                  <span>{data.endDate}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
