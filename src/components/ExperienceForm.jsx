import DeleteButton from './DeleteButton';

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
    <>
      {experienceData.map((data, index) => {
        return (
          <fieldset key={index} className='experience-row'>
            <div>
              <label>
                Name:{' '}
                <input
                  type='text'
                  value={data.name}
                  onChange={(e) =>
                    updateExperineceData('name', e.target.value, index)
                  }
                  placeholder='Google'
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
                  placeholder='Software Engineer'
                />
              </label>
              <label>
                Responsibilities:{' '}
                <textarea
                  type='text'
                  value={data.responsibilities}
                  onChange={(e) =>
                    updateExperineceData(
                      'responsibilities',
                      e.target.value,
                      index,
                    )
                  }
                  placeholder='Wrote the page rank algorithm.'
                />
              </label>
              <label>
                Start Date:{' '}
                <input
                  type='date'
                  value={data.startDate}
                  onChange={(e) =>
                    updateExperineceData('startDate', e.target.value, index)
                  }
                />
              </label>
              <label>
                End Date:{' '}
                <input
                  type='date'
                  value={data.endData}
                  onChange={(e) =>
                    updateExperineceData('endDate', e.target.value, index)
                  }
                />
              </label>
            </div>
            <DeleteButton
              deleteHandler={deleteExperienceDataRow}
              index={index}
            />
          </fieldset>
        );
      })}
    </>
  );
}
