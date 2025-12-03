export interface PackageItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  roi: string;
  duration: string;
  color: string;
  badgeColor: string;
  features: string[];
  description: string;
  minDeposit: number;
}

export interface UserStats {
  balance: number;
  profit: number;
  activePackages: number;
  daysRemaining: number;
}

export interface ClientData {
  id: string;
  name: string;
  walletId: string;
  package: string;
  amount: number;
  status: 'active' | 'pending';
}

export interface User {
  id?: number; // User ID (e.g., 1001)
  name: string;
  password?: string; // Stored in local storage for simulation
  phone?: string;
  country?: string;
  role: 'admin' | 'user';
  subscriptionStatus: 'active' | 'inactive';
  activePackage?: string; // Name of the active package
  isLoggedIn: boolean;
}