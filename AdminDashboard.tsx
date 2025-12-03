import React, { useState, useEffect } from 'react';
import { Users, Search, Filter, Check, Save } from 'lucide-react';
import { User } from '../types';

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPackages, setSelectedPackages] = useState<{[key: number]: string}>({});

  // Fetch users from LocalStorage on mount
  useEffect(() => {
    const loadUsers = () => {
      const storedUsers = localStorage.getItem('investment_users');
      if (storedUsers) {
        // Filter out admin user if saved there by mistake, usually we only save regular users
        const parsedUsers: User[] = JSON.parse(storedUsers).filter((u: User) => u.role !== 'admin');
        setUsers(parsedUsers);
      }
    };
    loadUsers();
    
    // Set interval to refresh list in case of new registrations while admin page is open
    const interval = setInterval(loadUsers, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePackageChange = (userId: number, pkgName: string) => {
    setSelectedPackages(prev => ({
      ...prev,
      [userId]: pkgName
    }));
  };

  const activateUser = (user: User) => {
    const pkgToActivate = selectedPackages[user.id!] || user.activePackage;
    
    if (!pkgToActivate) {
      alert('الرجاء اختيار باقة لتفعيلها لهذا المستخدم');
      return;
    }

    const updatedUsers = users.map(u => {
      if (u.id === user.id) {
        return { 
          ...u, 
          subscriptionStatus: 'active', 
          activePackage: pkgToActivate 
        } as User;
      }
      return u;
    });

    // Update State
    setUsers(updatedUsers);
    
    // Update LocalStorage
    localStorage.setItem('investment_users', JSON.stringify(updatedUsers));
    
    alert(`تم تفعيل اشتراك المستخدم ${user.name} على ${pkgToActivate} بنجاح`);
  };

  const filteredUsers = users.filter(user => 
    user.name.includes(searchTerm) || String(user.id).includes(searchTerm)
  );

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 mb-8 shadow-lg flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">لوحة تحكم الإدارة</h1>
            <p className="opacity-80">إدارة المستخدمين وتفعيل الاشتراكات</p>
          </div>
          <div className="bg-white/10 px-6 py-3 rounded-xl mt-4 md:mt-0 text-center">
            <span className="block text-2xl font-bold">{users.length}</span>
            <span className="text-sm">عدد المستخدمين المسجلين</span>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 text-brand-navy">
             <Users className="w-6 h-6" />
             <span className="font-bold">قائمة العملاء</span>
          </div>
          
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="بحث بالاسم أو رقم المستخدم (ID)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            />
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-gray-50 text-gray-600 text-sm font-semibold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">الاسم</th>
                  <th className="px-6 py-4">الدولة / الهاتف</th>
                  <th className="px-6 py-4">الحالة الحالية</th>
                  <th className="px-6 py-4">اختيار الباقة</th>
                  <th className="px-6 py-4 text-center">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-gray-500">#{user.id}</td>
                      <td className="px-6 py-4 font-bold text-gray-800">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div>{user.country}</div>
                        <div dir="ltr" className="text-xs text-right">{user.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        {user.subscriptionStatus === 'active' ? (
                          <div className="flex flex-col">
                             <span className="inline-flex w-fit items-center gap-1 text-green-700 bg-green-100 px-2 py-1 rounded-md text-xs font-bold mb-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                مفعل
                             </span>
                             <span className="text-xs font-bold text-gray-600">{user.activePackage}</span>
                          </div>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-red-600 bg-red-100 px-2 py-1 rounded-md text-xs font-bold">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            غير مفعل
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <select 
                          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-navy w-full"
                          value={selectedPackages[user.id!] || user.activePackage || ''}
                          onChange={(e) => handlePackageChange(user.id!, e.target.value)}
                        >
                          <option value="" disabled>-- اختر الباقة --</option>
                          <option value="الباقة البرونزية">الباقة البرونزية</option>
                          <option value="الباقة الفضية">الباقة الفضية</option>
                          <option value="الباقة الذهبية">الباقة الذهبية</option>
                          <option value="باقة الاستثمار VIP">باقة الاستثمار VIP</option>
                          <option value="باقة الـ 24 ساعة">باقة الـ 24 ساعة</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button 
                          onClick={() => activateUser(user)}
                          className="bg-brand-navy hover:bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 w-full shadow-md"
                        >
                          <Save className="w-4 h-4" />
                          تحديث الحالة
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                      لا يوجد مستخدمين مطابقين للبحث
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;