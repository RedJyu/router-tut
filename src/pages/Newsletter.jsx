const Newsletter = () => {
  return (
    <form className='form' action='post'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>newsletter</h4>
      {/* name */}
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
      {/* last name */}
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          Last Name
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
          // for testing
          defaultValue='Bobowskis'
        />
      </div>
      {/* email */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='text'
          className='form-input'
          name='email'
          id='email'
          // for testing
          defaultValue='test@test.com'
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
      >
        submit
      </button>
    </form>
  );
};
export default Newsletter;
