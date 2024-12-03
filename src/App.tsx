import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SplashScreen } from './components/SplashScreen';
import { LoginScreen } from './components/auth/LoginScreen';
import { ChatInterface } from './components/chat/ChatInterface';
import { ReceiptList } from './components/dashboard/ReceiptList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="/receipts" element={<ReceiptList />} />
      </Routes>
    </Router>
  );
}

export default App;