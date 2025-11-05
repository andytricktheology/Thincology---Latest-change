
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { EyeIcon, MapPinIcon as LocationMarkerIcon, ShieldCheckIcon, ChatBubbleBottomCenterTextIcon as AnnotationIcon } from '@heroicons/react/24/solid';

const visitorData = [
  { name: 'Mon', visitors: 400 },
  { name: 'Tue', visitors: 300 },
  { name: 'Wed', visitors: 200 },
  { name: 'Thu', visitors: 278 },
  { name: 'Fri', visitors: 189 },
  { name: 'Sat', visitors: 239 },
  { name: 'Sun', visitors: 349 },
];

const behaviorData = [
    { name: 'Home', interactions: 1200 },
    { name: 'Blog', interactions: 950 },
    { name: 'Podcast', interactions: 600 },
    { name: 'Books', interactions: 780 },
    { name: 'Merch', interactions: 450 },
];

const Dashboard: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={EyeIcon} title="Total Visitors" value="12,345" change="+5.2% this week" />
                <StatCard icon={LocationMarkerIcon} title="Top Region" value="USA" change="45% of traffic" />
                <StatCard icon={ShieldCheckIcon} title="Login Attempts" value="8" change="2 blocked" />
                <StatCard icon={AnnotationIcon} title="New Comments" value="23" change="7 pending approval" />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartCard title="Visitor Analytics">
                     <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={visitorData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                            <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.7)" />
                            <YAxis stroke="rgba(255, 255, 255, 0.7)" />
                            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                            <Legend />
                            <Line type="monotone" dataKey="visitors" stroke="#c900ff" strokeWidth={2} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartCard>
                 <ChartCard title="User Behavior Report">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={behaviorData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                            <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.7)" />
                            <YAxis stroke="rgba(255, 255, 255, 0.7)" />
                            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                            <Bar dataKey="interactions" fill="url(#colorUv)" />
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#c900ff" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#330040" stopOpacity={0.8}/>
                                </linearGradient>
                            </defs>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>
            {/* Map Placeholder */}
            <div>
                 <ChartCard title="Visitor Regions">
                    <div className="h-96 bg-gray-700/50 rounded-lg flex items-center justify-center">
                       <p className="text-gray-400">Interactive Map Placeholder</p>
                    </div>
                </ChartCard>
            </div>
        </div>
    );
};

// Sub-components for the dashboard for better organization
interface StatCardProps {
    icon: React.ElementType;
    title: string;
    value: string;
    change: string;
}
const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value, change }) => (
    <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-purple-500/10 flex items-center space-x-4">
        <div className="bg-gradient-to-br from-[#c900ff] to-[#330040] p-3 rounded-lg">
            <Icon className="h-8 w-8 text-white"/>
        </div>
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs text-green-500">{change}</p>
        </div>
    </div>
);

const ChartCard: React.FC<{title: string; children: React.ReactNode}> = ({ title, children }) => (
    <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-purple-500/10">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div>{children}</div>
    </div>
)

export default Dashboard;
