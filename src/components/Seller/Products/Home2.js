import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '../../../reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Admin from "../../Admin/Admin";
function Home2() {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Admin />
                <div className="parent">
                    <Routes>
                        <Route path="/admin" element={<Admin />} />

                    </Routes>
                </div>

            </BrowserRouter>

        </React.StrictMode>
    );
    reportWebVitals();

}
export default Home2;