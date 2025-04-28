import PostUser from "../../components/PostUser/PostUser";

const Home = () => {
  return (
    <div className="home">
      {[...Array(20)].map((_, index) => (
        <div key={index}>
          <PostUser />
        </div>
      ))}
    </div>
  )
}

export default Home;