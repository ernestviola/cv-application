export default function ExperienceForm() {
  return (
    <fieldset>
      <label htmlFor='name'>
        Name: <input type='text' />
      </label>
      <label htmlFor='title'>
        Title: <input type='text' />
      </label>
      <label htmlFor='responsibilities'>
        Responsibilities: <input type='text' />
      </label>
      <label htmlFor='start-date'>
        Start Date: <input type='text' />
      </label>
      <label htmlFor='end-date'>
        End Date: <input type='text' />
      </label>
    </fieldset>
  );
}
