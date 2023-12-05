const Newsletter = () => {
  return (
    <form className='form'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>newsletter</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          name='name'
          id='name'
          // for testing
          defaultValue='Bob'
        />
      </div>
    </form>
  );
};
export default Newsletter;
