import {User} from "./types.ts";

function App() {

    const users: User[] = [{
        name: 'User 01',
        messages: [{
            body: 'message 001'
        },{
            body:'message 002'
        }
        ]
    }]

  return (
      <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
        <h2 className="text-4xl text-yellow-500">Hello</h2>
      </div>
  )
}

export default App
