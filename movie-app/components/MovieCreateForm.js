import { useState } from 'react';

const MovieCreateForm = (props) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    rating: '',
    image: "",
    cover: "",
    longDesc: "",
    genre: ""
  });

  const handleChange = (e) => {
    const { name, value } =  e.target;

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleGenreChange = (e) => {
    const { options } = e.target;
    const optionsLength = options.length;
    let value = [];

    for(let i = 0; i < optionsLength; i++) {
      if (options[i].selected){
        value.push(options[i].value)
      }
    }

    setForm({
      ...form,
      genre: value.toString()
    })
  }

  const submitForm = () => {
    props.handleFormSubmit({...form})
  }

  return(
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={form.name}
          name="name"
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          onChange={handleChange}
          value={form.description}
          name="description"
          type="text"
          className="form-control"
          id="description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          onChange={handleChange}
          value={form.rating}
          name="rating"
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
        />
        <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          name="image"
          value={form.image}
          type="text"
          className="form-control"
          id="image"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          onChange={handleChange}
          name="cover"
          value={form.cover}
          type="text"
          className="form-control"
          id="cover"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          onChange={handleChange}
          name="longDesc"
          value={form.longDesc}
          className="form-control"
          id="longDesc"
          rows="3"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          onChange={handleGenreChange}
          multiple
          className="form-control"
          id="genre">
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button type="button" className="btn btn-primary" onClick={ submitForm }>Create</button>
    </form>
  )
}

export default MovieCreateForm;
