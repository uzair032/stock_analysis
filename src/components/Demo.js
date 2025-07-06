// import React from 'react';

// const Demo = () => {
//   return (
//     <section style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(to bottom right, #0f172a, #1e1b4b, #111827)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '4rem 1.5rem',
//       color: 'white'
//     }}>
//       <div style={{
//         maxWidth: '80rem',
//         width: '100%',
//         textAlign: 'center'
//       }}>
//         <h1 style={{
//           fontSize: '2.5rem',
//           fontWeight: 'bold',
//           marginBottom: '2rem',
//           color: 'white'
//         }}>
//           Live Product Demo
//         </h1>
//         <p style={{
//           fontSize: '1.125rem',
//           color: '#cbd5e1',
//           marginBottom: '2.5rem'
//         }}>
//           Watch how StockAI Pro analyzes global markets in real time.
//         </p>

//         <div style={{
//           position: 'relative',
//           paddingBottom: '56.25%',
//           height: 0,
//           overflow: 'hidden',
//           borderRadius: '1rem',
//           boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
//         }}>
//           <iframe
//             src="E:\Crew Ai\react_django\frontend\public\Stock_Analysis.mp4"
//             title="Live Demo Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%'
//             }}
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Demo;

import React from 'react';

const Demo = () => {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #0f172a, #1e1b4b, #111827)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1.5rem',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '80rem',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: 'white'
        }}>
          Live Product Demo
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#cbd5e1',
          marginBottom: '2.5rem'
        }}>
          Watch how StockAI Pro analyzes global markets in real time.
        </p>

        <video
          controls
          style={{
            width: '100%',
            maxWidth: '960px',
            borderRadius: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
          }}
        >
          <source src="Stock_Analysis.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Demo;
