import React from 'react';

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white shadow rounded-lg p-4">{children}</div>
);

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="border-b pb-2 mb-4">{children}</div>
);

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);
