import React from 'react';
import { Settings, User, Clock, List, CreditCard } from 'lucide-react';

export default function Account() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Account & Settings</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#1a242f] rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-400">Prime Member</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700">
              <Settings className="h-5 w-5 text-[#00A8E1]" />
              <span>Profile Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700">
              <Clock className="h-5 w-5 text-[#00A8E1]" />
              <span>Watch History</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700">
              <List className="h-5 w-5 text-[#00A8E1]" />
              <span>Watchlist</span>
            </button>
          </div>
        </div>

        <div className="bg-[#1a242f] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Subscription & Billing</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-[#00A8E1]" />
                <div>
                  <p className="font-medium">Prime Membership</p>
                  <p className="text-sm text-gray-400">Next billing date: Apr 1, 2024</p>
                </div>
              </div>
              <button className="text-[#00A8E1] hover:underline">Manage</button>
            </div>
            <button className="w-full text-center px-4 py-3 bg-[#00A8E1] text-white rounded-lg hover:bg-[#0096c7]">
              Update Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}