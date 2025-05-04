import React, { useState } from 'react';
import '../Blogspot/Blogspot.mod.css';
 
const Blogspot = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: 'Blog 1 - Pandemic School Journey',
      description: 'An exciting start to our journey.',
      images: [
          
         './assets/card1.jpg',
         './assets/card11.jpg',
         './assets/card111.jpg',
         
      ],
      details:  'classroom selfies and heartfelt virtual smiles to festive group celebrations, each photo reflects real moments of togetherness, resilience, and joy shared by students navigating learning in their own unique, human way.',
    },
    {
      id: 2,
      title: 'Blog 2 - internship commencement',
      description: 'A heartwarming collage showing students learning.',
      images: [
        './assets/card2.jpg',
        './assets/card22.jpg',
        './assets/card222.jpg', 
      ],
      details: 'A joyful and proud moment as the BS Information Technology Batch 2025 comes together to celebrate their internship commencement filled with smiles, gratitude, and the spirit of achievement.',
    },
    {
      id: 3,
      title: 'Blog 3 - Christmas Party',
      description: 'A joyful beachside gathering filled with food, fun, and shared moments under the sun.',
      images: [
        './assets/card3.jpg',
        './assets/card333.jpg',
        './assets/card33.jpg',
     
      ],
      details: 'From group smiles in matching shirts to tables overflowing with snacks and gifts, these photos capture a day of laughter, bonding, and celebration in a relaxed seaside setting.',
    },
    {
      id: 4,
      title: 'Blog 4 - Trip to Lapaz',
      description: 'A calm day in mountain and river.',
      images: [
        './assets/card44.jpg',
         './assets/card4.jpg',
         './assets/card444.jpg',
      ],
      details: 'crystal clear waters, and pure relaxation marked this wonderful day...',
    },
    {
      id: 5,
      title: 'Blog 5 - Forest Trails',
      description: 'Exploring the serene beauty of the woods.',
      images: [
        './assets/card5.jpg',
        './assets/card555.jpg',
        './assets/card55.jpg',
      ],
      details: 'Walking through lush green trails, surrounded by the sounds of nature...',
    },
    {
      id: 6,
      title: 'Blog 6 - Mountain Adventure',
      description: 'A thrilling day.',
      images: [
         './assets/card66.jpg',
         './assets/card6.jpg',
         './assets/card666.jpg',
      ],
      details: 'Standing and enjoying the vast expanse of golden dunes...',
    },
    {
      id: 7,
      title: 'Blog 7 - New Year Celebration Parade',
      description: 'A day immersed in local traditions.',
      images: [
        './assets/card7.jpg',
        './assets/card77.jpg',
        './assets/card777.jpg',
      ],
      details: 'Experiencing vibrant dances, music, parades and delicious traditional food...',
    },
    {
      id: 8,
      title: 'Blog 8 - The sleepyhead cat',
      description: 'A magical evening on the water.',
      images: [
        './assets/card8.jpg',
        './assets/card88.jpg',
        './assets/card888.jpg',
      ],
      details: 'this sleepyhead cat has mastered the art of doing absolutely nothing in the coziest way possible.',
    },
  ];

  

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blogspot animated-background">  
      <section className="blog-posts">
        <div 
          className="blog-posts-header" 
          style={{  
            textAlign: 'center'
          }}
        >
          <h2>Blog Posts</h2>
        </div>
        <div className="blog-cards">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card" onClick={() => handleBlogClick(blog)}>
              <img src={`${blog.images[0]}?w=400&h=300&fit=crop`} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedBlog && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.details}</p>
            <div className="modal-images">
              {selectedBlog.images.map((image, index) => (
                <img key={index} src={`${image}?w=300&h=200&fit=crop`} alt={`${selectedBlog.title} ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="johnacabo11@gmail.com">johnacabo11@gmail.com</a></p>
        <div className="social-icons"> 
          <a href="https://github.com/PaulJohnA007" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  );
};

export default Blogspot;
