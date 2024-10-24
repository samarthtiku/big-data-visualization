import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  AlertCircle,
  BarChart2,
  Book,
  Users,
  Target,
  Archive,
  Settings,
  FileText
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const paperData = {
  yearlyDistribution: [
    { year: 2010, papers: 2 },
    { year: 2011, papers: 3 },
    { year: 2012, papers: 5 },
    { year: 2013, papers: 7 },
    { year: 2014, papers: 10 },
    { year: 2015, papers: 8 },
    { year: 2016, papers: 6 },
    { year: 2017, papers: 2 }
  ],
  qualityScores: [
    { category: 'Reporting', score: 2.51 },
    { category: 'Rigor', score: 1.33 },
    { category: 'Credibility', score: 1.02 },
    { category: 'Relevance', score: 1.57 }
  ],
  domainDistribution: [
    { name: 'Social Media', value: 18 },
    { name: 'Smart Cities', value: 15 },
    { name: 'Healthcare', value: 12 },
    { name: 'Industrial', value: 10 },
    { name: 'Scientific', value: 8 },
    { name: 'Others', value: 7 }
  ]
};

const Section = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6 border rounded-lg shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left flex items-center justify-between bg-white rounded-t-lg hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  );
};

const MethodologyStep = ({ number, title, description }) => (
  <div className="flex items-start gap-4 mb-4">
    <div className="w-8 h-8 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
      {number}
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ResearchGap = ({ title, description }) => (
  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
    <h4 className="font-semibold text-yellow-800 mb-2">{title}</h4>
    <p className="text-gray-700">{description}</p>
  </div>
);

const ExpandedPaperExplainer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-8">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-10 h-10" />
          <h1 className="text-3xl font-bold">
            Software Architectures for Big Data: A Systematic Literature Review
          </h1>
        </div>
        <p className="text-blue-100 text-lg">
          A comprehensive analysis of big data system architectures across multiple domains.
        </p>
        <div className="mt-4 flex gap-4">
          <div className="bg-white/20 px-4 py-2 rounded-lg">
            <p className="text-sm">Publication Year</p>
            <p className="font-bold">2020</p>
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-lg">
            <p className="text-sm">Papers Analyzed</p>
            <p className="font-bold">622</p>
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-lg">
            <p className="text-sm">Primary Studies</p>
            <p className="font-bold">43</p>
          </div>
        </div>
      </div>

      <Section title="Abstract" icon={FileText} defaultOpen={true}>
        <p>
          This systematic literature review focuses on analyzing software architectures for big data systems, covering research trends, domain applications, and architectural patterns. By examining 622 studies and selecting 43 primary sources, we address key research questions about big data architecture's application areas, motivations, and quality attributes.
        </p>
      </Section>

      <Section title="Background" icon={Book} defaultOpen={true}>
        <h4 className="font-semibold mb-2">Big Data</h4>
        <p>
          Big Data refers to the large volume, velocity, and variety of data that traditional data management systems struggle to process. Its characteristics demand specialized architectures for effective storage, processing, and analysis.
        </p>

        <h4 className="font-semibold mb-2 mt-4">Systematic Reviews</h4>
        <p>
          A systematic review is a rigorous approach to reviewing existing research, aiming to identify patterns, gaps, and insights. It involves predefined criteria for selecting studies and evaluating their relevance and quality.
        </p>

        <h4 className="font-semibold mb-2 mt-4">Software Architectures</h4>
        <p>
          Software architectures for big data define the structural organization of components for data collection, storage, processing, and analysis. They ensure scalability, performance, and resilience to handle massive datasets.
        </p>
      </Section>

      <Section title="Research Methodology" icon={Settings} defaultOpen={true}>
        <MethodologyStep number={1} title="Review Protocol" description="Detailed criteria were established for selecting and evaluating studies, ensuring the inclusion of high-quality research." />
        <MethodologyStep number={2} title="Research Questions" description="Key questions focused on application domains, motivations, and quality attributes in big data architectures." />
        <MethodologyStep number={3} title="Search Strategy" description="Database searches included IEEE, ACM, and Google Scholar, using keywords related to big data and software architectures." />

        <h4 className="font-semibold mt-6 mb-2">Scope</h4>
        <p>
          The review covers studies published between 2010 and 2017, focusing on research contributions to software architectures in various big data application domains.
        </p>
      </Section>

      <Section title="Results" icon={BarChart2} defaultOpen={true}>
        <h4 className="font-semibold mb-2">Publication Distribution Over Years</h4>
        {isClient && (
          <div className="h-64">
            <BarChart width={600} height={250} data={paperData.yearlyDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="papers" fill="#8884d8" />
            </BarChart>
          </div>
        )}

        <h4 className="font-semibold mt-6 mb-2">Quality Assessment Scores</h4>
        {isClient && (
          <div className="h-64">
            <LineChart width={600} height={250} data={paperData.qualityScores}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#8884d8" />
            </LineChart>
          </div>
        )}

        <h4 className="font-semibold mt-6 mb-2">Application Domain Distribution</h4>
        {isClient && (
          <div className="h-64">
            <PieChart width={400} height={250}>
              <Pie
                data={paperData.domainDistribution}
                cx={200}
                cy={125}
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {paperData.domainDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        )}
      </Section>

      <Section title="Conclusions" icon={Archive} defaultOpen={true}>
        <p>
          The systematic review reveals that big data software architectures are widely applied in social media and smart cities, with layered and cloud-based approaches being the most common architectural patterns. However, challenges such as limited standardization and quality evaluation need further research.
        </p>
      </Section>

      <Section title="Research Gaps" icon={AlertCircle} defaultOpen={true}>
        <div className="space-y-4">
          <ResearchGap
            title="Limited Architectural Evaluation"
            description="Few studies provide comprehensive evaluation of their architectural approaches."
          />
          <ResearchGap
            title="Standardization Needs"
            description="Lack of standardized approaches for big data architecture design."
          />
          <ResearchGap
            title="Integration Challenges"
            description="Limited coverage of integration concerns across different domains."
          />
        </div>
      </Section>
    </div>
  );
};

export default ExpandedPaperExplainer;
