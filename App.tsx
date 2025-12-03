import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import PackageModal from './components/PackageModal';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import { PackageItem, User } from './types';

const App: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  // User State
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Load user from session storage on mount (optional persistence for refresh)
  useEffect(() => {
    const savedSession = sessionStorage.getItem('current_session');
    if (savedSession) {
      setCurrentUser(JSON.parse(savedSession));
    }
  }, []);

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // --- Auth Logic ---

  const handleRegister = (name: string, phone: string, country: string, password: string) => {
    // 1. Get existing users
    const existingUsersStr = localStorage.getItem('investment_users');
    const existingUsers: User[] = existingUsersStr ? JSON.parse(existingUsersStr) : [];

    // 2. Generate ID (Start at 1001)
    const lastId = existingUsers.length > 0 ? existingUsers[existingUsers.length - 1].id || 1000 : 1000;
    const newId = lastId + 1;

    // 3. Create new user object
    const newUser: User = {
      id: newId,
      name,
      phone,
      country,
      password, // In a real app, never store plain text passwords!
      role: 'user',
      subscriptionStatus: 'inactive',
      isLoggedIn: true
    };

    // 4. Save to LocalStorage
    existingUsers.push(newUser);
    localStorage.setItem('investment_users', JSON.stringify(existingUsers));

    // 5. Login immediately
    setCurrentUser(newUser);
    sessionStorage.setItem('current_session', JSON.stringify(newUser));
    setIsLoginOpen(false);
    alert(`تم إنشاء الحساب بنجاح! الرقم التعريفي الخاص بك هو: ${newId}`);
  };

  const handleLogin = (username: string, password: string) => {
    // 1. Check for Admin
    if (username === 'admin' && password === 'ahmed1234aa') {
      const adminUser: User = {
        name: 'المدير العام',
        role: 'admin',
        subscriptionStatus: 'active',
        isLoggedIn: true
      };
      setCurrentUser(adminUser);
      sessionStorage.setItem('current_session', JSON.stringify(adminUser));
      setIsLoginOpen(false);
      return;
    }

    // 2. Check for Regular User
    const existingUsersStr = localStorage.getItem('investment_users');
    const existingUsers: User[] = existingUsersStr ? JSON.parse(existingUsersStr) : [];

    // Search by Name or ID (convert input to number for ID check)
    const user = existingUsers.find(u => 
      (u.name === username || String(u.id) === username) && u.password === password
    );

    if (user) {
      const loggedInUser = { ...user, isLoggedIn: true };
      setCurrentUser(loggedInUser);
      sessionStorage.setItem('current_session', JSON.stringify(loggedInUser));
      setIsLoginOpen(false);
    } else {
      alert('بيانات الدخول غير صحيحة');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('current_session');
    // Reload page to clear any dashboard states
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      <Navbar 
        onLoginClick={() => setIsLoginOpen(true)} 
        user={currentUser}
        onLogout={handleLogout}
      />
      <main>
        {/* If Admin, show Admin Dashboard ONLY */}
        {currentUser?.role === 'admin' ? (
           <AdminDashboard />
        ) : (
          /* If User or Guest */
          <>
            <Hero />
            
            {/* Show User Dashboard only if logged in */}
            {currentUser && currentUser.role === 'user' && (
              <UserDashboard user={currentUser} />
            )}

            <About />
            <Packages onSelectPackage={handleSelectPackage} />
          </>
        )}
      </main>
      
      {/* Footer (Hide for Admin to give more app-like feel, or keep it. Keeping it for now) */}
      <Footer />
      
      <PackageModal 
        pkg={selectedPackage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onRegisterSubmit={handleRegister}
        onLoginSubmit={handleLogin}
      />
    </div>
  );
};

export default App;