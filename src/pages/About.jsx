import { FaShieldAlt, FaHandshake, FaCar, FaHeadset } from 'react-icons/fa';

const stats = [
  { label: 'Cars Listed', value: '10,000+' },
  { label: 'Happy Customers', value: '50,000+' },
  { label: 'Cities Covered', value: '500+' },
  { label: 'Trusted Dealers', value: '2,000+' },
];

const values = [
  {
    icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    title: 'Trust & Transparency',
    desc: 'Every car is verified and inspected to ensure top quality and accurate information.',
  },
  {
    icon: <FaHandshake className="text-4xl text-blue-600" />,
    title: 'Fair Dealing',
    desc: 'We connect buyers and sellers directly with no hidden fees or middlemen.',
  },
  {
    icon: <FaCar className="text-4xl text-blue-600" />,
    title: 'Wide Selection',
    desc: 'Thousands of new and used cars across all brands, budgets, and locations.',
  },
  {
    icon: <FaHeadset className="text-4xl text-blue-600" />,
    title: '24/7 Support',
    desc: 'Our dedicated team is always available to assist you at every step.',
  },
];

const team = [
  { name: 'Rajesh Sharma', role: 'Founder & CEO', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya Patel', role: 'Chief Technology Officer', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Amit Singh', role: 'Head of Operations', image: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { name: 'Neha Gupta', role: 'Customer Success Lead', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About CarDekho</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are on a mission to make car buying and selling simple, transparent, and enjoyable for everyone in India.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2020, CarDekho started with a simple vision — to transform the way India buys and sells cars.
              What began as a small platform has grown into one of the country's most trusted automotive marketplaces.
              We have helped over 50,000 customers find their perfect car, and we are just getting started.
            </p>
          </div>

          <h2 className="text-4xl font-bold text-center mb-14">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
