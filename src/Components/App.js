import Messages from "./Messages"

export default function App() {
  return (
    <div className="App container">
      <main>
        <Messages />
      </main>

      <footer className="container"> 
        <form>
          <div className="input-group">
            <textarea className="form-control" id="message-textarea" />
            <input className="btn btn-primary" type="submit" value="&#8688;" />
          </div>

          <div className="input-group input-group-sm mt-1">
            <input className="form-control" type="file" id="formFile" />
          </div>
        </form>
      </footer>
    </div>
  )
}
