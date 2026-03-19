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
          placeholder='Jane Doe'
          onChange={(e) => updateName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          value={generalData.email}
          placeholder='example@email.com'
          onChange={(e) => updateEmail(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type='tel'
          value={generalData.phone}
          placeholder='123456789'
          onChange={(e) => updatePhone(e.target.value)}
        />
      </label>
    </fieldset>
  );
}
