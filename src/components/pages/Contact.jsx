function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <>
    <h2>Contact</h2>
    <form onSubmit={handleSubmit}>
        <fieldset>
            <div className="form-group">
                <label className="form-label mt-4">Name:</label>
                <input type="text" className="form-control" placeholder="Enter Name" required />
            </div>
            <div className="form-group">
                <label className="form-label mt-4">Email:</label>
                <input type="email" className="form-control" placeholder="Enter Email" required />
            </div>
            <div className="form-group">
                <label className="form-label mt-4">Message:</label>
                <textarea type="text" className="form-control" rows={3} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
    </form>
    </>
  )
}

export default Contact