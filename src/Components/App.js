import Messages from "./Messages";

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Messages />
        <div className="container fixed-bottom pt-2" id="newmessage">
          <form>
            <div className="input-group">
              <textarea className="form-control" id="message" aria-label="With textarea" />
              <input className="btn btn-outline-light" type="submit" value="&#8688;" />
            </div>

            <div className="input-group input-group-sm mt-1">
              <input className="form-control" type="file" id="formFile" />
            </div>
          </form>
        </div>
      </header>
    </div>
  )
}
