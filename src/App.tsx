import { Routes, Route} from 'react-router-dom';

import'./globals.css';
import Signinform from './_auth/forms/Signinform';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route path="/sign-in" element={<Signinform />} />
        <Route path="/sign-in" element={<SignupForm />} />

        {/* private rotes */}
        <Route index element={<Home />}/>
        </Routes>

    </main>
  )
}

export default App