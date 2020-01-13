import Modal from "./Modal"
import MovieCreateForm from './MovieCreateForm';
import { createMovie } from '../actions/index';

const SideMenu = (props) => {
  const { categories } = props;
  let modal = null;
  const handleCreateMovie = (movie) =>{
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies));
      modal.closeModal();
    });
  }

  return (
    <div>
      <Modal ref={element => modal = element} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
      </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        { categories.map(category => <a key={category.id} href="#" className="list-group-item">{category.name}</a>) }
      </div>
    </div>
  )
}

export default SideMenu
