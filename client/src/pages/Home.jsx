import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = ({ isAuthenticated, userRole }) => {
  const location = useLocation();
  const { role: locationRole } = location.state || {};

  // Use userRole if authenticated, otherwise use locationRole or default to null
  const currentRole = isAuthenticated ? userRole : (locationRole || null);

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated);
    console.log('userRole:', userRole);
    console.log('locationRole:', locationRole);
    console.log('currentRole:', currentRole);
  }, [isAuthenticated, userRole, locationRole, currentRole]);

  return (
    <div>
      <section>
        <h1>Welcome to Our Website</h1>
        <p>
          Discover our platform and learn more about what we offer.
        </p>
      </section>

      {isAuthenticated ? (
        currentRole === 'farmer' ? (
          <section>
            <h2>Available Contractors</h2>
            <p>
              Here you can find a list of contractors ready to assist you with your agricultural needs.
            </p>
            {/* You can add code here to list contractors */}
          </section>
        ) : currentRole === 'contractor' ? (
          <section>
            <h2>Available Farmers</h2>
            <p>
              Here you can find a list of farmers looking for contractors like you.
            </p>
            {/* You can add code here to list farmers */}
          </section>
        ) : (
          <section>
            <h2>Welcome</h2>
            <p>
              Please update your profile to see relevant information.
            </p>
          </section>
        )
      ) : (
        <section>
          <h2>Join Our Platform</h2>
          <p>
            Register or login to access our full range of services for farmers and contractors.
          </p>
        </section>
      )}

      <section>
        <h2>What We Do</h2>
        <p>
          Our website provides the best services to meet your needs, offering a wide variety of resources.
        </p>
      </section>

      <section>
        <h2>Testimonials</h2>
        <p>"This website has changed my life!" - User A</p>
        <p>"Amazing experience, highly recommend!" - User B</p>
      </section>
    </div>
  );
};

export default Home;