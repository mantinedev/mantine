import { AngleSlider } from './AngleSlider';

export default { title: 'AngleSlider' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <AngleSlider size={100} formatLabel={(value) => `${value}°`} />
    </div>
  );
}

export function WithFormData() {
  return (
    <div style={{ padding: 40 }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          console.log('Checkbox group value:', formData.get('angle'));
        }}
      >
        <AngleSlider name="angle" defaultValue={120} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
