import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import styled from "@emotion/styled";
import CompanyPage from "./pages/CompanyPage";
import BusinessPage from "./pages/BusinessPage";
import NoticePage from "./pages/NoticePage/";
import PressreleasePage from "./pages/PressreleasePage";
import LoginPage from "./pages/Login/";
import MainPage from "./pages/MainPage/";
import Delivery from "./pages/Delivery";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Page = styled.div`
    flex: 1;
`;

function App() {
    return (
        <PageContainer className="App">
            <Navbar />
            <Page>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/company/*" element={<CompanyPage />} />
                        <Route path="/business/*" element={<BusinessPage />} />
                        <Route path="/notice/*" element={<NoticePage />} />
                        <Route path="/pressrelease/*" element={<PressreleasePage />} />
                        <Route path="/login/*" element={<LoginPage />} />
                        <Route path="/main/*" element={<MainPage />} />
                        <Route path="/delivery/*" element={<Delivery />} />
                    </Routes>
                </BrowserRouter>
            </Page>
            <Footer />
        </PageContainer>
    );
}

export default App;
