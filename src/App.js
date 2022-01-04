import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import styled from "@emotion/styled";

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
                    </Routes>
                </BrowserRouter>
            </Page>
            <Footer />
        </PageContainer>
    );
}

export default App;
