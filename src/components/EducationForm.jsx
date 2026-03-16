export default function EducationForm({ educationData, setEducationData }) {
  function updateEducationData(key, value, index) {
    const newEducationData = [...educationData];
    newEducationData[index][key] = value;
    setEducationData(newEducationData);
  }

  function deleteEducationRow(e, index) {
    e.preventDefault();
    const newEducationData = [...educationData];
    newEducationData.splice(index, 1);
    setEducationData(newEducationData);
  }
  return (
    <fieldset>
      {educationData.map((data, index) => {
        return (
          <div key={index}>
            <label>
              School:
              <input
                type='text'
                value={data.school}
                onChange={(e) =>
                  updateEducationData('school', e.target.value, index)
                }
              />
            </label>
            <label>
              Degree:
              <input
                type='text'
                value={data.degree}
                onChange={(e) =>
                  updateEducationData('degree', e.target.value, index)
                }
              />
            </label>
            <label>
              Date:
              <input
                type='text'
                value={data.date}
                onChange={(e) =>
                  updateEducationData('date', e.target.value, index)
                }
              />
            </label>
            <button onClick={(e) => deleteEducationRow(e, index)}>
              Delete
            </button>
          </div>
        );
      })}
    </fieldset>
  );
}
