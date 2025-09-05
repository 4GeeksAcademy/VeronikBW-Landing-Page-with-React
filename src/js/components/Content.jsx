
import Jumbotron from './Jumbotron'
import Card from './Card'

const Content = () => {
  let textLorem = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum soluta ab veritatis ea nihil ipsam. Ullam praesentium ipsa deleniti?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatibus tenetur alias temporibus pariatur repellendus itaque fugit eius error accusamus?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus aliquid incidunt cumque nam ad dignissimos iusto, vel magni ipsam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati quo sit provident tempore, aut iure. Accusamus officiis voluptatum inventore?"
  ]
  return (
    <div className="container">
      <Jumbotron />
      <div className="row">
        {
          textLorem.map((item) => {
            return (
              <Card textLorem={item}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default Content