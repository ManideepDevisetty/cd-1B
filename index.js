const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='inner-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        class='img'
      />
      <h1 className='inner-heading'>Kiran V</h1>
      <p className='innerParagraph'>
        Vishnu Institue of Computer Education and Technology,Bimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        class='img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
