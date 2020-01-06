import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const { id } = router.query //id - needs to be the same as the page/file name eg [id].js.
  return (
    <div className="container">
      <h1>Movie with id: {id}</h1>
    </div>
  )
}

export default Movie
