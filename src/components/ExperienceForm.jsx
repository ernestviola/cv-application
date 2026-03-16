export default function ExperienceForm({ experienceData, setExperienceData }) {
  function updateExperineceData(key, value, index) {
    const newExperienceData = [...experienceData];
    newExperienceData[index][key] = value;
    setExperienceData(newExperienceData);
  }

  function deleteExperienceDataRow(e, index) {
    e.preventDefault();
    const newExperienceData = [...experienceData];
    newExperienceData.splice(index, 1);
    setExperienceData(newExperienceData);
  }

  return (
    <fieldset>
      {experienceData.map((data, index) => {
        return (
          <div key={index}>
            <label>
              Name:{' '}
              <input
                type='text'
                value={data.name}
                onChange={(e) =>
                  updateExperineceData('name', e.target.value, index)
                }
              />
            </label>
            <label>
              Title:{' '}
              <input
                type='text'
                value={data.title}
                onChange={(e) =>
                  updateExperineceData('title', e.target.value, index)
                }
              />
            </label>
            <label>
              Responsibilities:{' '}
              <input
                type='text'
                value={data.responsibilities}
                onChange={(e) =>
                  updateExperineceData(
                    'responsibilities',
                    e.target.value,
                    index,
                  )
                }
              />
            </label>
            <label>
              Start Date:{' '}
              <input
                type='text'
                value={data.startDate}
                onChange={(e) =>
                  updateExperineceData('startDate', e.target.value, index)
                }
              />
            </label>
            <label>
              End Date:{' '}
              <input
                type='text'
                value={data.endData}
                onChange={(e) =>
                  updateExperineceData('endDate', e.target.value, index)
                }
              />
            </label>
            <button
              onClick={(e) => {
                deleteExperienceDataRow(e, index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </fieldset>
  );
}
