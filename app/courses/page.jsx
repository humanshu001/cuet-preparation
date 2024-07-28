import CourseCard from "../all-cards/CourseCard"

export default function Home() {
    const data = [
        {
          title: 'Mathematics',
          validUpto: '12/12/2022'
        },
        {
          title: 'Physics',
          validUpto: '12/12/2022'
        },
        {
          title: 'Chemistry',
          validUpto: '12/12/2022'
        },
        {
          title: 'Biology',
          validUpto: '12/12/2022'
        },
        {
          title: 'Computer Science',
          validUpto: '12/12/2022'
        },
        {
          title: 'English',
          validUpto: '12/12/2022'
        },
        {
          title: 'Hindi',
          validUpto: '12/12/2022'
        },
        {
          title: 'Physical Education',
          validUpto: '12/12/2022'
        },
        {
          title: 'History',
          validUpto: '12/12/2022'
        },
        {
          title: 'Geography',
          validUpto: '12/12/2022'
        },
        {
          title: 'Political Science',
          validUpto: '12/12/2022'
        },
        {
          title: 'Economics',
          validUpto: '12/12/2022'
        },
        {
          title: 'Sociology',
          validUpto: '12/12/2022'
        },
        {
          title: 'Psychology',
          validUpto: '12/12/2022'
        },
        {
          title: 'Philosophy',
          validUpto: '12/12/2022'
        },
        {
          title: 'Business Studies',
          validUpto: '12/12/2022'
        },
        {
          title: 'Accountancy',
          validUpto: '12/12/2022'
        },
        {
          title: 'Entrepreneurship',
          validUpto: '12/12/2022'
        },
        {
          title: 'Informatics Practices',
          validUpto: '12/12/2022'
        }
      ]
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-start">
                    <h1 className="badge" style={{backgroundColor:'var(--blue)', fontSize:'35px'}}>Purchase Courses</h1>
                </div>
                <div className="row d-flex justify-content-center courses">
                {
                    data.map((item, index) => {
                    return <CourseCard key={index} subject={item.title} validUpto={item.validUpto} purchased={false}/>
                    })
                }
                </div>
            </div>
        </>
    )
}
