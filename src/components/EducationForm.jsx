import DeleteButton from './DeleteButton';

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
    <>
      {educationData.map((data, index) => {
        return (
          <fieldset key={index} className='education-row'>
            <div>
              <label>
                School:
                <input
                  type='text'
                  value={data.school}
                  onChange={(e) =>
                    updateEducationData('school', e.target.value, index)
                  }
                  placeholder='Oxford University'
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
                  placeholder='B.S. in Computer Science'
                />
              </label>
              <label>
                Date:
                <input
                  type='date'
                  value={data.date}
                  onChange={(e) =>
                    updateEducationData('date', e.target.value, index)
                  }
                />
              </label>
            </div>
            <DeleteButton deleteHandler={deleteEducationRow} index={index} />
          </fieldset>
        );
      })}
    </>
  );
}
