export default function GeneralForm({ generalData, setGeneralData }) {
  function updateName(value) {
    const newData = { ...generalData };
    newData.name = value;
    setGeneralData(newData);
  }

  function updateEmail(value) {
    const newData = { ...generalData };
    newData.email = value;
    setGeneralData(newData);
  }

  function updatePhone(value) {
    const newData = { ...generalData };
    newData.phone = value;
    setGeneralData(newData);
  }

  return (
    <fieldset>
      <label>
        Name:
        <input
          type='text'
          value={generalData.name}
          onChange={(e) => updateName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type='text'
          value={generalData.email}
          onChange={(e) => updateEmail(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type='text'
          value={generalData.phone}
          onChange={(e) => updatePhone(e.target.value)}
        />
      </label>
    </fieldset>
  );
}
