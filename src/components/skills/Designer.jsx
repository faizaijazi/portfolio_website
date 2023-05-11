import React from 'react'

const Designer = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Graphic Designer</h3>

        <div className="skills__box">
            
            <div className="skills__group">

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Adobe Illustrator</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Adobe XD</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

            </div>

            <div className="skills__group">

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Adobe Photoshop</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Adobe Indesign</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Designer
