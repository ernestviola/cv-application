export default function Preview({
  generalData,
  educationData,
  experienceData,
}) {
  return (
    <div className='preview'>
      <div>
        <span>{generalData.name}</span>
        <span>{generalData.email}</span>
        <span>{generalData.phone}</span>
      </div>
      <div>
        {educationData.map((data) => {
          return (
            <div>
              <span>{data.school}</span>
              <span>{data.degree}</span>
              <span>{data.date}</span>
            </div>
          );
        })}
      </div>
      <div>
        {experienceData.map((data) => {
          return (
            <div>
              <span>{data.name}</span>
              <span>{data.title}</span>
              <span>{data.responsibilities}</span>
              <span>{data.startDate}</span>
              <span>{data.endDate}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
