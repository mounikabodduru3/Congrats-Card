const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='img'
      />
      <h1 className='title'>Kiran V</h1>
      <p className='desc'>
        Vishnu Institute of computer technoligies ,Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
